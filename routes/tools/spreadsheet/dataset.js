export class Dataset {
  constructor(headers, numRows, getData) {
    this.headers = headers;
    this.numColumns = this.headers.length;
    this.numRows = numRows;
    this.getData = getData;
  }

  async getRows(start, end) {
    return await this.getData(start, end);
  }
}

const CACHE_PADDING = 10;

export class Pending {}

export class CachedDataset extends Dataset {
  constructor(headers, numRows, getData) {
    super(headers, numRows, getData);
    this.cache = {};
    this.pendingColumn = [];
    this.pending = new Pending();
    for (let i = 0; i < this.numColumns; i++) this.pendingColumn.push(this.pending);
  }

  async cacheData(start, end) {
    if (start < 0) start = 0;
    if (end >= this.numRows) end = this.numRows - 1;

    const result = await this.getData(start, end);
    for (let i = start; i < end; i++) {
      this.cache[i] = result[i - start];
    }
  }

  grabCached(start, end) {
    if (start < 0) start = 0;
    if (end >= this.numRows) end = this.numRows - 1;

    const result = [];
    for (let i = start; i < end; i++) {
      if (this.cache[i] == null) throw new Error('Expected cached');
      result.push(this.cache[i]);
    }
    return result;
  }

  uncachedRuns(start, end) {
    if (start < 0) start = 0;
    if (end >= this.numRows) end = this.numRows - 1;

    let streaks = [];
    let currentStreakStart = null;
    for (let i = start; i < end; i++) {
      if (this.cache[i] == null) {
        // Cache miss
        if (currentStreakStart == null) {
          currentStreakStart = i;
        }
      } else {
        // Cache hit
        if (currentStreakStart != null) {
          streaks.push([currentStreakStart, i]);
        }
        currentStreakStart = null;
      }
    }
    if (currentStreakStart != null) {
      streaks.push([currentStreakStart, end]);
    }
    return streaks;
  }

  getRowsImmediately(start, end) {
    if (start < 0) start = 0;
    if (end >= this.numRows) end = this.numRows - 1;

    let cacheMissed = false;

    const results = [];
    for (let i = start; i < end; i++) {
      if (this.cache[i] != null) {
        // Has row
        results.push(this.cache[i]);
      } else {
        results.push(this.pendingColumn);
        cacheMissed = true;
      }
    }
    return [cacheMissed, results];
  }

  async getRows(start, end) {
    if (start < 0) start = 0;
    if (end >= this.numRows) end = this.numRows - 1;

    const runs = this.uncachedRuns(start - CACHE_PADDING, end + CACHE_PADDING);
    if (runs.length == 0) {
      // All cache hits
      return this.grabCached(start, end);
    } else if (runs.length == 1) {
      // Obtain the missing run.
      const run = runs[0];
      await this.cacheData(run[0], run[1]);
      return this.grabCached(start, end);
    } else {
      // Cache it all.
      await this.cacheData(start - CACHE_PADDING, end + CACHE_PADDING);
      return this.grabCached(start, end);
    }
  }
}
