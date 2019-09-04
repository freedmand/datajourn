<template>
  <div>
    <img
      alt="How pivot tables work: A visual guide"
      class="img"
      src="../../assets/images/week2/pivots/0-Intro.png"
    />
    <p>Pivot tables allow you to succinctly summarize data in a spreadsheet. They allow you to drill down into a dataset and group findings in a matter of seconds. You can quickly iterate and slice through data in different ways. In this lesson, I’ll illustrate their use with a fictional case study:</p>
    <h2>A fruity problem</h2>
    <p>
      Let’s say we’re a hard-hitting investigative reporter looking into the rise of the fruit industry. We finally get a source at the US Department of Agriculture to crack and give us their dataset on the number of fruits produced in a given year by different farms. We open up the CSV file, revealing a spreadsheet with three columns:
      <em>Year</em>,
      <em>Fruit</em>, and
      <em>Count</em>.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/1-Panel.png" />
    <p>
      Take a look at this spreadsheet. The
      <em>Year</em> column describes the year of production (color-coded for illustrative effect), the
      <em>Fruit</em> column describes the type of fruit, and the
      <em>Count</em> column details the number of that fruit produced by a particular farm. There’s some rows with the same year and fruit, e.g. in 2019 there are two rows with the fruit
      <em>Apple</em> &mdash; that’s because those rows detail two different farms’ apple productions.
    </p>
    <p>It would be great to summarize the data, so we can understand the total fruit production and break it down by year and fruit type. Now, for the sake of this example, this spreadsheet is only a few rows, so you could do it by hand. But imagine that the spreadsheet has thousands of rows. Whatever will we do?</p>
    <p>
      Enter:
      <b>
        <em>pivot tables</em>
      </b>.
    </p>
    <h2>Pivot tables: making Swiss army knives look dull by comparison</h2>
    <p>
      Depending on the spreadsheet application you use, there’s almost certainly a way to create a pivot table. In Google Sheets, you go through the menu and hit
      <code>Data</code> &gt;
      <code>Pivot Table</code>. If an option is presented to place the pivot table in a new sheet or the current sheet, choose
      <em>New sheet</em>. Once you create the pivot table, you’ll be presented with a mysterious looking blank table, and on the side will be some kind of
      <em>pivot table editor</em>.
    </p>
    <img alt class="img wide" src="../../assets/images/week2/pivots/2-Pivot.png" />
    <p>
      <em>Rows</em>,
      <em>Columns</em>,
      <em>Values</em>,
      <em>Filters</em> &mdash; what? To briefly break it down, clicking the green “Add” button on
      <em>Rows</em>,
      <em>Columns</em>, and
      <em>Values</em> allows us to put fields into the pivot table to the left.
      <em>Fields</em> is a fancy way to refer to the name of each column of data in our original spreadsheet. In our case, the dataset we’ve acquired has three fields:
      <em>Year</em>,
      <em>Fruit</em>, and
      <em>Count</em>.
    </p>
    <p>
      Let’s begin by adding
      <em>Count</em> to
      <em>Values</em>. To do that, click on the green “Add” button below
      <em>Values</em> in the pivot table editor.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/2.1-Pivot-Values.png" />
    <p>
      Now we should see a list of all the fields in our spreadsheet pop up. There’s also an option for a
      <em>calculated</em> field. Don’t worry about that one for now, but the gist is you can create new calculated fields using spreadsheet formulas if you like.
    </p>
    <p>
      Let’s click on
      <em>Count</em>.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/2.2-Pivot-Values-Count.png" />
    <p>
      Now, the pivot table editor on the right should reveal a newly created box below
      <em>Values</em>. In the box is written the field we’ve selected,
      <em>Count</em>, along with an aggregation type of
      <em>Sum</em>. Aggregation type is a fancy way of saying: let’s collect all the values in the spreadsheet and then do something with them.
      <em>Sum</em> is the default aggregation type, and it means: take all the values for the field we’ve chosen in the spreadsheet and add them together.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/2.3-Pivot-Count-Added.png" />
    <p>
      So summarizing the
      <em>Count</em> field with an aggregation type of
      <em>Sum</em> is telling the pivot table to add all the values in the
      <em>Count</em> column of the original spreadsheet together.
    </p>
    <p>Let’s take a look at how this would work. Here’s our original spreadsheet:</p>
    <img alt class="img" src="../../assets/images/week2/pivots/3-Table.png" />
    <p>
      All we care about for now is the
      <em>Count</em> column, since we’ve selected the
      <em>Count</em> field above.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/3.1-Table-Faded.png" />
    <p>
      Now, we’re going to take the values in the
      <em>Count</em> column (7, 5, 8, 9, etc.) and
      <em>aggregate</em> them together with
      <em>Sum</em>. If it helps, picture an aggregator as a blender. It takes in a collection of data and spits out a single value as an answer.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/3.2-Sum-Blender.png" />
    <p>
      The
      <em>Sum</em> aggregator in our case is a blender that takes all the values in the
      <em>Count</em> column and comes back with their total.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/3.3-Blender-Pouring.png" />
    <p>
      Delicious! Now, the pivot table has aggregated our
      <em>Sum</em> column and given us a single number back that describes the total of all the values in our dataset. We’ve uncovered the total number of fruits produced in all years! The pivot table now looks like this:
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/4-Sum-Table.png" />
    <h2>Making things interesting</h2>
    <p>What do you mean, interesting? Was that not already interesting?</p>
    <p>Ok, fine. Summing up all the values in a single column is not the most interesting thing you can do in the world. It certainly is useful, but we could accomplish the same task with a spreadsheet formula. What makes pivot tables interesting is the ability to aggregate data in groupings.</p>
    <p>
      The best way to show this is to do it. Let’s add a field to the
      <em>Rows</em> section of the pivot table editor.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/4.1-Rows.png" />
    <p>
      We’re given the three fields in our spreadsheet:
      <em>Year</em>,
      <em>Fruit</em>, and
      <em>Count</em>. Well, we have already have the total of the
      <em>Count</em> field. It would be interesting to break this total down by the
      <em>Year</em>. To accomplish this, select the
      <em>Year</em> field from the dropdown list.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/4.2-Years.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/5-Table.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/5.1-Table-Fruit-Faded.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/5.2-Table-Year-Count.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/5.3-Table-Separated.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/5.4-Table-Grouped.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/5.5-Table-Blended.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/5.6-Pivot-Summary.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/6-Pivot-Columns.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/6.1-Pivot-Fruit.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/6.2-Table.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/6.3-Table-Separated.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/6.4-Table-Plan.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/6.5-Table-Separated-Rows.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/6.6-Table-Colored.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/6.7-Table-Grouped.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/6.8-Table-Blended.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/6.9-Table-Calculated.png" />
    <img alt class="img" src="../../assets/images/week2/pivots/7-Pivot-Complete.png" />
  </div>
</template>

<style scoped>
.img {
  margin: 2em auto !important;
  max-width: 600px;
  max-height: 400px;
  width: auto !important;
  height: auto;
}
</style>