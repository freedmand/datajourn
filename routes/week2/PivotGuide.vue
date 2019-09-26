<template>
  <div>
    <img
      alt="How pivot tables work: A visual guide"
      class="img"
      src="../../assets/images/week2/pivots/0-Intro.png"
    />
    <p>Pivot tables allow you to succinctly summarize data in a spreadsheet. They are a core feature of most spreadsheet applications, including Google Sheets and Excel. With pivot tables, you can drill down into a dataset and group findings in a matter of seconds. You can quickly iterate and slice through data in unique ways. In this lesson, I’ll illustrate their use with a fictional case study:</p>
    <h2>A fruity problem</h2>
    <p>
      Let’s say we’re a hard-hitting investigative reporter looking into the rise of the fruit industry. We finally get a source at a big agricultural firm to crack and give us their dataset on the number of fruits produced in a given year by different farms. We open up the CSV file, revealing a spreadsheet with three columns:
      <em>Year</em>,
      <em>Fruit</em>, and
      <em>Count</em>.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/1-Panel.png" />
    <p>
      Take a look at this spreadsheet. The
      <em>Year</em> column describes the year of production (color-coded for illustrative effect), the
      <em>Fruit</em> column describes the type of fruit, and the
      <em>Count</em> column details the quantity of that fruit produced by a particular farm. There’s some rows with the same year and fruit, e.g. in 2019 there are two rows with the fruit
      <em>Apple</em> &mdash; that’s because those rows detail two different farms’ apple productions.
    </p>
    <p>It would be great to summarize the data, so we can understand the total fruit production and break it down by year and fruit type. Now, for the sake of this example, this spreadsheet is only a few rows, so you could do it by hand. But imagine that the spreadsheet has thousands of rows. Whatever will we do?</p>
    <p>
      Enter:
      <b>
        <em>pivot tables</em>
      </b>.
    </p>
    <h2>Pivot tables: a Swiss army knife for data</h2>
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
      <em>Fields</em> refers to the name of each column of data in our original spreadsheet. In our case, the dataset we’ve acquired has three fields:
      <em>Year</em>,
      <em>Fruit</em>, and
      <em>Count</em>.
    </p>
    <p>
      Let’s begin by adding our
      <em>Count</em> field to
      <em>Values</em> in the pivot table editor. To do that, click on the green “Add” button next to
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
      Now, the
      <em>Values</em> section of the pivot table editor on the right should expand with a new box. In the box is written the field we’ve selected,
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
    <p>
      Ok, fine. Summing up all the values in a single column is not the most interesting thing you can do in the world. It certainly is useful, but we could accomplish the same task with a spreadsheet formula. What makes pivot tables interesting is the ability to aggregate data in
      <em>groupings.</em>
    </p>
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
    <p>
      Now, we are asking the pivot table to list the sum of the
      <em>Count</em> field for each possible
      <em>Year</em> value. So, we have our original spreadsheet.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/5-Table.png" />
    <p>
      We are only interested in the
      <em>Year</em> column (because it was selected as a row in the pivot table editor) and
      <em>Count</em> (because it is still selected as a value in the pivot table editor). So for now, we don’t care about
      <em>Fruit</em>.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/5.1-Table-Fruit-Faded.png" />
    <p>
      Now, let’s group the resulting spreadsheet by the
      <em>Year</em> column. We should have two
      <em>Count</em>s for 2017, three
      <em>Count</em>s for 2018, and three
      <em>Count</em>s for 2019.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/5.3-Table-Separated.png" />
    <p>
      In the pivot table editor, we had added
      <em>Year</em> to the
      <em>Rows</em> section. The resulting pivot table should have a single row for each possible
      <em>Year</em>, so let’s squash
      <em>Year</em> down to only show each year once.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/5.4-Table-Grouped.png" />
    <p>
      We still have
      <em>Count</em> in the
      <em>Values</em> section of our pivot table editor, aggregated by
      <em>Sum</em>. This means that we want to sum all the
      <em>Count</em>s for each
      <em>Year</em>. Let’s represent this with a blue blender for
      <em>Count</em>s in the year 2017, a yellow blender for
      <em>Count</em>s in the year 2018, and a red blender for
      <em>Count</em>s in the year 2019.
    </p>
    <p>
      Each blender receives all the
      <em>Count</em> values for the corresponding year. For instance, in 2017, there were two
      <em>Count</em> values: 7 and 5. Aggregating these by sum means we calculate 7 + 5 = 12.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/5.5-Table-Blended.png" />
    <p>The output of each aggregator, or blender, forms the resulting pivot table:</p>
    <img alt class="img" src="../../assets/images/week2/pivots/5.6-Pivot-Summary.png" />
    <p>
      So to summarize, the
      <em>Values</em> section of the pivot table editor is the most important. That tells us what field to look at and how to aggregate it. The
      <em>Rows</em> section of the pivot table editor lets us break down the
      <em>Values</em>. We added
      <em>Year</em> in the
      <em>Rows</em> section, so the resulting pivot table will have one row for each possible year (2017, 2018, and 2019). Within each row break down, we run the
      <em>Values</em> aggregator, in our case summing the
      <em>Count</em> column.
    </p>
    <h2>Taking it to the next level</h2>
    <p>
      A pivot table with a field in the
      <em>Values</em> section is useful to get aggregates across the whole table. Adding a field in the
      <em>Rows</em> section lets us group the data. This means that the aggregation will run for each possible value for the row field (in our case,
      <em>Year</em>, which has 3 values: 2017, 2018, 2019).
    </p>
    <p>
      But what if we take it to the next level? We have a breakdown by
      <em>Year</em>, but maybe we want to break it down by
      <em>Fruit</em> as well. Let’s try adding a field to the
      <em>Columns</em> section of the pivot table editor. Click the green “Add” button next to
      <em>Columns</em> in the pivot table editor.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/6-Pivot-Columns.png" />
    <p>
      There’s only two fields to choose from. That’s because we already chose
      <em>Year</em> above, so it’s not a valid grouping option. Let’s choose
      <em>Fruit</em> since we’re already aggregating on
      <em>Count</em>.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/6.1-Pivot-Fruit.png" />
    <p>
      Ok, let’s predict how this will look. After adding the
      <em>Year</em> to the row field, we had a pivot table with
      <em>Year</em> in the row headers and the sum of
      <em>Count</em> as the values. So, adding
      <em>Fruit</em> as a column field should result in a pivot table with
      <em>Year</em> in the row headers,
      <em>Fruit</em> in the column headers, and the sum of
      <em>Count</em> as the values. Kind of like this:
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/6.4-Table-Plan.png" />
    <p>Let’s see how it turns out. Here’s our spreadsheet again for reference.</p>
    <img alt class="img" src="../../assets/images/week2/pivots/6.2-Table.png" />
    <p>This time we’re going to use every column, so we don’t need to fade anything out.</p>
    <img alt class="img" src="../../assets/images/week2/pivots/6.3-Table-Separated.png" />
    <p>
      We can group the
      <em>Year</em>s as before.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/6.5-Table-Separated-Rows.png" />
    <p>
      But we’re also going to have to group the
      <em>Fruit</em>s. To make it visually easier to understand, let’s color in the
      <em>Fruit</em> values. We only have two possible values,
      <em>Apple</em> and
      <em>Banana</em>, so let’s color those green and orange, respectively.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/6.6-Table-Colored.png" />
    <p>
      Just as before, let’s squash down the fields to only show each
      <em>Year</em> once. We’ll also move the
      <em>Fruit</em>s to column headers and show each one once. The
      <em>Count</em>s are shown as values. For instance, 9 and 6 appear right of 2018 and below
      <em>Banana</em> because those are all the
      <em>Count</em>s that appear when
      <em>Year</em> is 2018 and
      <em>Fruit</em> is
      <em>Banana</em>.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/6.7-Table-Grouped.png" />
    <p>
      But we have multiple counts in some of the cells. We need to run our aggregator over the values to get the sum. We will use a sum aggregator, or blender, for each possible combination of
      <em>Fruit</em> and
      <em>Year</em>. So the 9 and 6 above should get reduced to 9 + 6 = 15. If there’s only one value for a given combo of
      <em>Fruit</em> and
      <em>Year</em>, the sum is that value itself.
    </p>
    <img alt class="img larger" src="../../assets/images/week2/pivots/6.8-Table-Blended.png" />
    <p>
      And just like that, we should get a nice summary table of the sum of
      <em>Count</em> for each combo of
      <em>Year</em> (in the row header) and
      <em>Fruit</em> (in the column header). Just as we had predicted above.
    </p>
    <img alt class="img" src="../../assets/images/week2/pivots/6.9-Table-Calculated.png" />
    <p>The pivot table should look something like this:</p>
    <img alt class="img" src="../../assets/images/week2/pivots/7-Pivot-Complete.png" />
    <p>
      Of course, we don’t actually have to manually do any of that work ourselves. The pivot table automates the whole process for us from the second we click on
      <em>Fruit</em> to add it to the
      <em>Column</em> section of the pivot table editor. All those blenders are sent churning, grouped by each possible combo of our
      <em>Row</em> and
      <em>Column</em> fields. But it’s good to understand exactly how it works to best be able to utilize it.
    </p>
    <h2>Going deeper</h2>
    <p>Hopefully this visual guide serves as a useful explanation for how pivot tables work. Obviously, this example spreadsheet is small, but imagine if we had thousands of rows spanning decades of fruit production. What if there were an additional column for the farm that produced the fruits, and maybe a column for the state each farm is in. You could pivot on those additional fields and potentially discover shocking insights, like declining apple production in Washington over the years. Those insights might inform news stories.</p>
    <p>
      We showcased the most simple use cases of pivot tables, but you can do even more things. We aggregated by sum, but you can change the aggregation type in the
      <em>Values</em> panel in the pivot table editor. You could, for instance, aggregate by the average.
    </p>
    <p>
      You can have multiple fields in the
      <em>Rows</em> section. You can click and drag the
      <em>Fruit</em> field from the
      <em>Columns</em> section of the pivot table editor to the
      <em>Rows</em> section to test it out. This causes there to be multiple row headers, one for
      <em>Year</em> and one for
      <em>Fruits</em>. In Google Sheets, it would look something like this:
    </p>
    <img alt class="img smaller" src="../../assets/images/week2/pivots/8-multiple-rows.png" />
    <p>
      When fields are grouped together, they have to be shown in a particular order. For instance, the
      <em>Year</em>s field is shown going from 2017 to 2019 in ascending order in the row headers. You can change the way it’s sorted. Making it sort in
      <em>descending</em> order, for instance, would show the
      <em>Year</em> going from 2019 to 2017 in the row headers.
    </p>
    <p>
      In Google Sheets, you can change the sort order by clicking on the box called
      <em>Order</em> within a row or column field in the pivot table editor. Changing the sort order of the
      <em>Year</em> field to
      <em>descending</em> would look like this:
    </p>
    <img alt class="img smaller" src="../../assets/images/week2/pivots/8.1-sort-order.png" />
    <p>
      You can also add
      <em>Filters</em> in the pivot table editor. This flexible feature allows you to exclude certain fields from groupings. For example, you might be uninterested in bananas and could thus exclude
      <em>Banana</em> from appearing as part of the
      <em>Fruit</em> field.
    </p>
    <p>
      The best way to gain an intuitive understanding of the pivot table is to play around with it using actual data. There are lots of ways things can go wrong, as well. For instance, plugging in the
      <em>Count</em> field as a
      <em>Row</em> and as a
      <em>Value</em> in the pivot table editor will result in a strange looking pivot table where each possible
      <em>Count</em> value is summarized in row headers. That’s probably not something you’d want.
    </p>
    <p>
      In general, the best practice is to start with what you want in the
      <em>Value</em> field and then work backwards to what groupings would be useful in row and column headers. You can then try more advanced features like filters or change sort orders and aggregation types. Hopefully this guide provides a good base intuition for you to successfully explore your data.
    </p>
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

.larger {
  max-height: 600px;
}

.smaller {
  max-width: 450px;
  max-height: 300px;
}
</style>