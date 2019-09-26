// const defaultStyle = {
//   default: {
//     containerBackground: 'gainsboro',
//     fontFamily: 'Open Sans',
//     background: 'white',
//     color: 'black',
//   },

//   border: {
//     color: 'gainsboro',
//     width: 1,
//   },
//   header: {
//     fontSize: 14,
//     padding: [8, 10],
//     height: 30,
//     bottomBorderColor: 'gray',
//     bottomBorderWidth: 2,
//   },
//   numberColumn: {
//     fontSize: 12,
//     padding: [8, 5],
//   },
//   cell: {
//     fontSize: 13,
//     padding: [8, 10],
//     height: 28,
//   },
// };

const defaultStyle = {
  default: {
    containerBackground: '#454545',
    fontFamily: 'Open Sans',
    background: '#1e1e1e',
    color: '#d3d3d3',
    textAlign: 'left',
  },

  border: {
    color: '#565656',
    width: 1,
  },
  header: {
    fontSize: 14,
    padding: [8, 10],
    height: 30,
    bottomBorderColor: 'gray',
    bottomBorderWidth: 2,
    background: '#333333',
  },
  numberColumn: {
    fontSize: 12,
    padding: [8, 10],
    rightBorderColor: 'gray',
    rightBorderWidth: 2,
    textAlign: 'center',
    background: '#333333',
  },
  cell: {
    fontSize: 12,
    padding: [8, 10],
    height: 25,
  },
};

const NUMBER_COLUMN = 'numberColumn';
const HEADER = 'header';
const BORDER = 'border';
const CELL = 'cell';

// Style attributes
const COLOR = 'color';
const FONT = 'font';
const PADDING_X = 'paddingX';
// const PADDING_Y = 'paddingY';
const HEIGHT = 'height';
const WIDTH = 'width';
// const TEXT_ALIGN = 'textAlign ';
const BACKGROUND = 'background';
const BOTTOM_BORDER_COLOR = 'bottomBorderColor';
const BOTTOM_BORDER_WIDTH = 'bottomBorderWidth';
const RIGHT_BORDER_COLOR = 'rightBorderColor';
const RIGHT_BORDER_WIDTH = 'rightBorderWidth';

// Cursors
const NORMAL_CURSOR = 'default';
const COL_RESIZE = 'col-resize';

const COL_RESIZE_TOLERANCE = 7;
const LEFT_BORDER_RESIZE_AVOIDANCE = 10;

export class CanvasSpreadsheet {
  constructor(elem, dataset, styles) {
    this.parentElement = elem;
    if (this.parentElement == null) {
      throw new Error('Target element was not found');
    }

    this.styles = styles == null ? defaultStyle : styles;
    this.dataset = dataset;
    this.canvas = document.createElement('canvas');

    this.dpi = window.devicePixelRatio || 1;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.scale(this.dpi, this.dpi);

    this.width = 0;
    this.height = 0;
    this.numberColumnWidth = 0;
    this.columnWidths = [];
    this.columnStarts = [];
    this.columnRange = [];
    this.rowRange = [];
    this.desiredWidth = 0;
    this.desiredHeight = 0;
    this.scroller = null;
    this.scrollLeft = 0;
    this.scrollTop = 0;
    this.headerHeight =
      this.style(HEADER, HEIGHT) + this.style(HEADER, BOTTOM_BORDER_WIDTH);
    this.cellHeight = this.style(CELL, HEIGHT) + this.style(BORDER, WIDTH);

    this.drawIndex = 0;

    this.destroyers = [];
    this.mouseEvents = [];
    this.mouseDown = false;
    this.initCanvas();
  }

  style(group, name, adjustDpi = true) {
    if (group == NUMBER_COLUMN && name == HEIGHT) {
      group = CELL;
      name = HEIGHT;
    }

    let accessor = x => x;
    if (name == 'paddingX') {
      name = 'padding';
      accessor = x => x[1];
    } else if (name == 'paddingY') {
      name = 'padding';
      accessor = x => x[0];
    } else if (name == 'font') {
      return `${this.style(group, 'fontSize', adjustDpi)}px ${this.style(
        group,
        'fontFamily'
      )}`;
    }

    if (this.styles[group][name] == null) {
      group = 'default';
    }

    const value = accessor(this.styles[group][name]);
    if (adjustDpi && typeof value == 'number') {
      return value * this.dpi;
    }
    return value;
  }

  destroy() {
    this.clearScroller();
    for (let i = 0; i < this.destroyers.length; i++) {
      this.destroyers[i]();
    }
    while (this.parentElement.firstChild) {
      this.parentElement.removeChild(this.parentElement.firstChild);
    }
  }

  measureNumberColumnWidth() {
    const lastRow = this.dataset.numRows.toLocaleString();

    let width = 0;
    this.ctx.font = this.style(NUMBER_COLUMN, FONT);
    for (let i = 0; i <= 9; i++) {
      const newWidth = this.ctx.measureText(lastRow.replace(/\d/g, `${i}`)).width;
      if (newWidth > width) width = newWidth;
    }

    return width + this.style(NUMBER_COLUMN, PADDING_X) * 2;
  }

  async measureColumnWidths() {
    const widths = [];
    for (let i = 0; i < this.dataset.numColumns; i++) {
      const columnWidth = await this.measureColumnWidth(i);
      widths.push(columnWidth);
    }
    this.columnWidths = widths;
    const columnStarts = [];
    let x = this.numberColumnWidth + this.style(NUMBER_COLUMN, RIGHT_BORDER_WIDTH);
    for (let i = 0; i < this.dataset.numColumns; i++) {
      columnStarts.push(x);
      x += this.columnWidths[i];
      x += this.style(BORDER, WIDTH);
    }
    this.columnStarts = columnStarts;
  }

  measure(group, text) {
    this.ctx.font = this.style(group, FONT);
    const width = this.ctx.measureText(text).width;
    return width + this.style(group, PADDING_X) * 2;
  }

  penalizeAbove(limit, amount) {
    if (amount < limit) return amount;
    const amountAbove = amount - limit;
    return limit + Math.log(amountAbove + 1);
  }

  async measureColumnWidth(idx) {
    const headerWidth = this.penalizeAbove(
      400,
      this.measure(HEADER, this.dataset.headers[idx]) * 1.5
    );
    if (this.dataset.numRows == 0) return headerWidth;

    let totalWidth = 0;
    let maxWidth = 0;
    const data = await this.dataset.getRows(0, Math.min(30, this.dataset.numRows));
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const width = this.measure(CELL, row[idx]) * 1.5;
      if (width > maxWidth) maxWidth = width;
      totalWidth += width;
    }
    const averageWidth = totalWidth / data.length;

    // Establish sensical width
    if (maxWidth < headerWidth) return headerWidth;
    return headerWidth * 0.4 + averageWidth * 0.3 + maxWidth * 0.3;
  }

  async initCanvas() {
    // Initialize the canvas
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.parentElement.appendChild(this.canvas);
    this.setDimensions();
    await this.setUpMeasurements();
    this.setUpDomains();
    this.setUpMouseEvents();
    this.setUpScroller();
    this.setUpResizer();
    window.console.log(this);
    this.draw();
  }

  setDimensions() {
    this.width = this.canvas.clientWidth * this.dpi;
    this.height = this.canvas.clientHeight * this.dpi;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  setUpColumnDomain() {
    // TODO: Binary search
    let startRange = 0;
    let startRangeSet = false;
    for (let i = 0; i < this.dataset.numColumns; i++) {
      if (
        !startRangeSet &&
        this.columnStarts[i] + this.columnWidths[i] >=
          this.scrollLeft +
            this.numberColumnWidth +
            this.style(NUMBER_COLUMN, RIGHT_BORDER_WIDTH)
      ) {
        startRangeSet = true;
        startRange = i;
      }

      if (this.columnStarts[i] > this.width + this.scrollLeft) {
        this.columnRange = [startRange, i];
        return;
      }
    }
    this.columnRange = [startRange, this.dataset.numColumns];
  }

  setUpRowDomain() {
    // TODO: math to make this easier
    let startRange = 0;
    let startRangeSet = false;
    for (let i = 0; i < this.dataset.numRows; i++) {
      if (
        !startRangeSet &&
        this.getYStart(i) + this.style(CELL, HEIGHT) >=
          this.scrollTop + this.headerHeight
      ) {
        startRangeSet = true;
        startRange = i;
      }

      if (this.getYStart(i) > this.height + this.scrollTop) {
        this.rowRange = [startRange, i];
        return;
      }
    }
    this.rowRange = [startRange, this.dataset.numRows];
  }

  setUpDomains() {
    this.setUpColumnDomain();
    this.setUpRowDomain();
  }

  async setUpMeasurements() {
    this.numberColumnWidth = this.measureNumberColumnWidth();
    await this.measureColumnWidths();
    this.setDesired();
  }

  setDesired() {
    // Set desired width and height
    const lastColumn = this.dataset.numColumns - 1;
    this.desiredWidth =
      this.columnStarts[lastColumn] +
      this.columnWidths[lastColumn] +
      this.style(BORDER, WIDTH);

    this.desiredHeight = this.getYStart(this.dataset.numRows);
  }

  clearScroller() {
    if (this.scroller != null) {
      this.parentElement.removeChild(this.scroller);
      this.scroller = null;
    }
  }

  setUpScroller() {
    // Clear any existing scroller
    this.clearScroller();

    this.scroller = document.createElement('div');
    this.scroller.style.position = 'absolute';
    this.scroller.style.top = '0';
    this.scroller.style.left = '0';
    this.scroller.style.width = '100vw';
    this.scroller.style.height = '100vh';
    const subScroll = document.createElement('div');
    subScroll.style.width = `${this.desiredWidth / this.dpi}px`;
    subScroll.style.height = `${this.desiredHeight / this.dpi}px`;
    this.scroller.appendChild(subScroll);
    this.scroller.style.overflow = 'scroll';

    this.parentElement.appendChild(this.scroller);

    this.scroller.addEventListener('scroll', e => this.handleScroll(e));
    for (let i = 0; i < this.mouseEvents.length; i++) {
      this.scroller.addEventListener(...this.mouseEvents[i]);
    }
  }

  setUpResizer() {
    const resizer = ['resize', this.handleResize.bind(this)];
    window.addEventListener(...resizer);
    this.destroyers.push(() => window.removeEventListener(...resizer));
  }

  handleScroll() {
    this.scrollLeft = this.scroller.scrollLeft * this.dpi;
    this.scrollTop = this.scroller.scrollTop * this.dpi;
    this.setCursor(NORMAL_CURSOR);
    this.setUpDomains();
    this.draw();
  }

  handleResize() {
    this.setDimensions();
    this.setUpDomains();
    this.draw();
  }

  setUpMouseEvents() {
    this.mouseEvents.push(['click', e => this.handleClick(e)]);
    this.mouseEvents.push(['mousemove', e => this.handleMouseMove(e)]);
    this.mouseEvents.push(['mousedown', e => this.handleMouseDown(e)]);

    for (let i = 0; i < this.mouseEvents.length; i++) {
      this.canvas.addEventListener(...this.mouseEvents[i]);
    }

    const mouseUp = ['mouseup', e => this.handleMouseUp(e)];
    window.addEventListener(...mouseUp);
    this.destroyers.push(() => window.removeEventListener(mouseUp));
  }

  async handleClick(e) {
    const mouseX = e.clientX * this.dpi + this.scrollLeft;
    const mouseY = e.clientY * this.dpi + this.scrollTop;

    for (let y = this.rowRange[0]; y < this.rowRange[1]; y++) {
      for (let x = this.columnRange[0]; x < this.columnRange[1]; x++) {
        if (
          mouseX >= this.columnStarts[x] &&
          mouseX < this.columnStarts[x] + this.columnWidths[x]
        ) {
          if (
            mouseY >= this.getYStart(y) &&
            mouseY < this.getYStart(y) + this.style(CELL, HEIGHT)
          ) {
            const cell = (await this.dataset.getRows(y, y + 1))[0][x];
            alert(cell);
            return;
          }
        }
      }
    }
  }

  setCursor(style) {
    this.canvas.style.cursor = style;
    this.scroller.style.cursor = style;
  }

  handleMouseMove(e) {
    const mouseX = e.clientX * this.dpi + this.scrollLeft;
    const rawX = e.clientX * this.dpi;
    for (let x = this.columnRange[0]; x < this.columnRange[1]; x++) {
      if (
        rawX >
          this.numberColumnWidth +
            this.style(NUMBER_COLUMN, RIGHT_BORDER_WIDTH) +
            LEFT_BORDER_RESIZE_AVOIDANCE &&
        mouseX >= this.columnStarts[x] - COL_RESIZE_TOLERANCE &&
        mouseX < this.columnStarts[x] + COL_RESIZE_TOLERANCE
      ) {
        this.setCursor(COL_RESIZE);
        return;
      }
    }
    this.setCursor(NORMAL_CURSOR);
  }
  handleMouseDown(e) {
    this.mouseDown = true;
    window.console.log('down', e);
  }
  handleMouseUp(e) {
    this.mouseDown = false;
    window.console.log('up', e);
  }

  drawHeaderCell(x) {
    this.drawGenericCell(
      HEADER,
      this.dataset.headers[x],
      this.columnStarts[x],
      0,
      this.columnWidths[x]
    );
  }

  getYStart(y) {
    return this.headerHeight + y * this.cellHeight;
  }

  drawNumberCell(y, text) {
    this.drawGenericCell(
      NUMBER_COLUMN,
      text,
      0,
      this.getYStart(y),
      this.numberColumnWidth
    );
  }

  drawCell(x, y, text) {
    this.drawGenericCell(
      CELL,
      text,
      this.columnStarts[x],
      this.getYStart(y),
      this.columnWidths[x]
    );
  }

  drawGenericCell(group, text, xStart, yStart, width) {
    // Fill background
    this.ctx.fillStyle = this.style(group, BACKGROUND);
    this.ctx.fillRect(xStart, yStart, width, this.style(group, 'height'));

    // Draw border
    this.ctx.fillStyle = this.style(BORDER, COLOR);
    const bw = this.style(BORDER, WIDTH);
    const h = this.style(group, HEIGHT);
    this.ctx.fillRect(xStart - bw, yStart - bw, width + bw * 2, bw); // tl -> tr
    this.ctx.fillRect(xStart - bw, yStart - bw, bw, h + bw * 2); // tl -> bl
    if (group == HEADER) {
      const bh = this.style(HEADER, BOTTOM_BORDER_WIDTH);
      this.ctx.fillStyle = this.style(HEADER, BOTTOM_BORDER_COLOR);
      this.ctx.fillRect(xStart - bw, yStart + h, width + bw * 2, bh);
      this.ctx.fillStyle = this.style(BORDER, COLOR);
    } else {
      this.ctx.fillRect(xStart - bw, yStart + h, width + bw * 2, bw); // bl -> br
    }
    if (group == NUMBER_COLUMN) {
      const bww = this.style(NUMBER_COLUMN, RIGHT_BORDER_WIDTH);
      this.ctx.fillStyle = this.style(NUMBER_COLUMN, RIGHT_BORDER_COLOR);
      this.ctx.fillRect(xStart + width, yStart - bw, bww, h + bw * 2);
      this.ctx.fillStyle = this.style(BORDER, COLOR);
    } else {
      this.ctx.fillRect(xStart + width, yStart - bw, bw, h + bw * 2); // tr -> br
    }

    // Return early if no text needs to be rendered.
    if (text == null || (typeof text == 'string' && text.trim() == '')) return;
    // TODO: make pending italic
    if (text == this.dataset.pending) text = '...';

    // Specify clipping region for text
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rect(
      xStart + this.style(group, PADDING_X),
      yStart,
      width - this.style(group, PADDING_X),
      this.style(group, HEIGHT)
    );
    this.ctx.clip();

    // Draw text
    this.ctx.fillStyle = this.style(group, COLOR);
    this.ctx.font = this.style(group, FONT);
    this.ctx.textBaseline = 'middle';
    // TODO: Text align
    // this.ctx.textAlign = this.style(group, TEXT_ALIGN);
    this.ctx.fillText(
      text,
      xStart + this.style(group, PADDING_X),
      yStart + this.style(group, HEIGHT) / 2
    );

    // Clear clipping region
    this.ctx.restore();
  }

  drawHeaderBorder(xStart) {
    const yStart = 0;
    this.ctx.fillStyle = this.style(BORDER, COLOR);
    this.ctx.fillRect(
      xStart,
      yStart,
      this.style(BORDER, WIDTH),
      this.style(HEADER, HEIGHT)
    );
  }

  draw() {
    // Draw rows
    this.drawIndex++;
    this.ctx.save();
    this.ctx.translate(-this.scrollLeft, -this.scrollTop);
    const [cacheMissed, rows] = this.dataset.getRowsImmediately(
      this.rowRange[0],
      this.rowRange[1]
    );
    if (cacheMissed) {
      const currentDrawIndex = this.drawIndex;
      setTimeout(() => {
        if (this.drawIndex != currentDrawIndex) return;
        this.dataset.getRows(this.rowRange[0], this.rowRange[1]).then(() => {
          if (this.drawIndex == currentDrawIndex) this.draw();
        });
      }, 100);
    }
    for (let y = 0; y < rows.length; y++) {
      for (let x = this.columnRange[0]; x < this.columnRange[1]; x++) {
        this.drawCell(x, y + this.rowRange[0], rows[y][x]);
      }
    }
    this.ctx.restore();

    // Draw headers
    this.ctx.save();
    this.ctx.translate(-this.scrollLeft, 0);
    for (let i = this.columnRange[0]; i < this.columnRange[1]; i++) {
      this.drawHeaderCell(i);
    }
    this.ctx.restore();

    // Draw number column
    this.ctx.save();
    this.ctx.translate(0, -this.scrollTop);
    for (let y = this.rowRange[0]; y < this.rowRange[1]; y++) {
      this.drawNumberCell(y, y.toLocaleString());
    }
    this.ctx.restore();

    // Lastly, draw top-left block
    this.ctx.fillStyle = this.style('default', 'containerBackground');
    this.ctx.fillRect(0, 0, this.numberColumnWidth, this.headerHeight);
    this.ctx.fillStyle = this.style(NUMBER_COLUMN, RIGHT_BORDER_COLOR);
    this.ctx.fillRect(
      this.numberColumnWidth,
      0,
      this.style(NUMBER_COLUMN, RIGHT_BORDER_WIDTH),
      this.headerHeight
    );
    this.ctx.fillStyle = this.style(HEADER, BOTTOM_BORDER_COLOR);
    this.ctx.fillRect(
      0,
      this.style(HEADER, HEIGHT),
      this.numberColumnWidth + this.style(NUMBER_COLUMN, RIGHT_BORDER_WIDTH),
      this.style(HEADER, BOTTOM_BORDER_WIDTH)
    );
  }
}
