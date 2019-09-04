<template>
  <div>
    <h1>Analyzing election results</h1>
    <p>
      First, download this .csv file from the New York Times:
      <a
        href="/datasets/2016_election_results_nyt.csv"
      >2016_election_results_nyt.csv</a>
    </p>
    <p>
      <b>Step 1:</b> import the CSV into Google Sheets
    </p>
    <img
      class="medium pb"
      src="../../assets/images/week2/election_results_imported.png"
      alt="A spreadsheet on Google Sheets containing election results"
    />
    <p>
      <b>Step 2:</b> move the header row down. Why? Because it’s good practice, showcases proficiency with Google Sheets, and means it’s easier to see what rows you’re in when scrolled down.
    </p>
    <img
      class="medium pb"
      src="../../assets/images/week2/election_results_header_down.png"
      alt="Spreadsheet after moving header row down"
    />
    <p>
      <b>Step 3:</b> click on cell E2. We’re going to do some math to create a new column.
    </p>
    <img
      class="medium pb"
      src="../../assets/images/week2/e2.png"
      alt="Spreadsheet with cell E2 selected"
    />
    <p>
      <b>Step 4:</b> type the following into the cell.
      <code>=A2+B2</code>
    </p>
    <img
      class="medium pb"
      src="../../assets/images/week2/a2_b2.png"
      alt="Spreadsheet with '=A2+B2' typed into cell E2"
    />
    <p>
      <b>Step 5:</b> press enter to see your newly minted formula compute.
    </p>
    <img
      class="medium pb"
      src="../../assets/images/week2/a2_b2_result.png"
      alt="Spreadsheet with the result of '=A2+B2' visible"
    />
    <p>
      <b>Step 6:</b> we have applied this formula to a single row. Now we want to apply it to all rows. Click on E2 again.
    </p>
    <img
      class="medium"
      src="../../assets/images/week2/e2_post.png"
      alt="Spreadsheet with E2 selected after calculating result"
    />
    <p>Delicately position the mouse so that the cursor is over the small blue square in the bottom right of cell E2. The cursor should turn into a plus symbol.</p>
    <img
      class="medium"
      src="../../assets/images/week2/e2_crosshair.png"
      alt="Spreadsheet with the bottom right corner of E2 hovered over"
    />
    <p>Now, while the cursor looks like the plus symbol, double-click. This will extend the formula to all rows!</p>
    <img
      class="medium pb"
      src="../../assets/images/week2/formula_e_applied.png"
      alt="Spreadsheet with the formula E applied to all rows"
    />
    <p>
      <b>Step 7:</b> click on cell E1 and type to give the header a meaningful name, like “Sum of votes.”
    </p>
    <img
      class="medium pb"
      src="../../assets/images/week2/sum_of_votes.png"
      alt="Spreadsheet with column E renamed 'Sum of votes'"
    />

    <h2>Fun with math</h2>
    <p>Wow, we’ve just made a formula. It may not seem like much, but we ran an algorithm and applied it to a lot of data at once.</p>
    <p>Let’s have some fun with it.</p>
    <p>
      We’re going to create some more columns just like “Sum of votes”. If you need more room in your spreadsheet, select the last column, go to the menu and hit
      <code>Insert</code> &gt;
      <code>Column Right</code>. This will insert a column to the right of the currently selected one. You can repeat this action multiple times to create more space for yourself.
    </p>
    <img
      class="medium pb"
      src="../../assets/images/week2/insert_column_right.png"
      alt="Spreadsheet with the menu item selected to insert a column to the right"
    />
    <p>
      <b>Step 8:</b> click on cell F2 and type the formula
      <code>=B2-A2</code>. Note: starting a cell with
      <code>=</code> makes it into a formula.
    </p>
    <img
      class="medium pb"
      src="../../assets/images/week2/f2.png"
      alt="Spreadsheet with '=B2-A2' typed into cell F2"
    />
    <p>
      <b>Step 9:</b> following the same instructions as before, compute this formula and apply it to all rows. Then rename the column something like “Trump margin” to show that this column captures how many votes Trump had over Clinton in each place.
    </p>
    <img
      class="medium pb"
      src="../../assets/images/week2/trump_margin.png"
      alt="Spreadsheet with column F populated with a formula and renamed 'Trump margin'"
    />
    <h2>Fun with filters</h2>
    <p>
      <b>Step 10:</b> let’s see which place had the largest margin of Trump voters. To accomplish this, we are going to sort the Trump margin column. We will create a filter to safely sort the data without altering it.
    </p>
    <p>First, select cell A1 so that Google Sheets knows to filter the right data (if you have a cell selected outside your data, it won’t work).</p>
    <img class="medium" src="../../assets/images/week2/a1_selected.png" alt="Cell A1 selected" />
    <p>
      After selecting cell A1, go into the menu and click
      <code>Data</code> &gt;
      <code>Create Filter</code>.
    </p>
    <img
      class="medium"
      src="../../assets/images/week2/create_filter.png"
      alt="The Data menu open with 'Create Filter' highlighted"
    />
    <p>After applying the filter, your spreadsheet should look like a sea of green.</p>
    <img
      class="medium"
      src="../../assets/images/week2/filter_green.png"
      alt="The green filter look that results from applying the filter"
    />
    <p>But the cells are all selected too, causing the cells to look blue. Let’s clear the selection to make it easier to work with the data. Click on cell A1 again to erase the selection.</p>
    <img
      class="medium pb"
      src="../../assets/images/week2/filter_green_deselected.png"
      alt="The green filter look but after clicking A1 again to deselect it"
    />
    <p>
      <b>Step 11:</b> now that we’ve created a filter view, the data is green and there’s an icon next to each column that looks like an inverted pyramid. Click on the pyramid icon for the “Trump margin” column.
    </p>
    <img
      class="medium"
      src="../../assets/images/week2/trump_margin_filter_selected.png"
      alt="Hovering over the filter icon in the 'Trump margin' column"
    />
    <p>The filter menu should pop up for the “Trump margin” column, showing us its values and sorting options.</p>
    <img
      class="medium vert"
      src="../../assets/images/week2/filter_expanded.png"
      alt="Expanding the filter in the 'Trump margin' column"
    />
    <p>
      Let’s sort the column to see which county has the largest margin. To sort by largest first, click on
      <code>Sort A &rarr; Z</code>
    </p>
    <img
      class="medium vert"
      src="../../assets/images/week2/sort_z_to_a.png"
      alt="Hovering over the 'Sort A -> Z' menu item in the filter"
    />
    <p>Voila! The results are sorted. And we can see that Montgomery, Texas has the highest margin for Trump.</p>
    <img
      class="medium pb"
      src="../../assets/images/week2/margin_sorted.png"
      alt="The results of sorting the margin column"
    />
    <p>
      <b>Step 12:</b> We’re in Pennsylvania, so we are interested in data about Pennsylvania. Let’s filter down the state column to only show data for Pennsylvania.
    </p>
    <p>Click the inverted pyramid in the “State” column to open the filter menu for state.</p>
    <img
      class="medium vert"
      src="../../assets/images/week2/state_filter_expanded.png"
      alt="Expanded the filter options for the 'State' column"
    />
    <p>Now we want to only show the state called “Pennsylvania” &mdash; the states with checkmarks next to them show all the values that appear in that column. To only show “Pennsylvania” we could manually uncheck all of them except for “Pennsylvania,” but that would take a while. Instead, let’s erase all the states and then add only “Pennsylvania” back in.</p>
    <p>
      Click on the
      <code>Clear</code> button to erase the checkmarks next to everything.
    </p>
    <img
      class="medium vert"
      src="../../assets/images/week2/clear_filter.png"
      alt="Hovering over the clear button in the filter"
    />
    <p>Now, all the state values are unchecked. Let’s find “Pennsylvania.” We could scroll down, or just type “Pennsylvania” into the search box.</p>
    <p>As we type, notice the results filter down until all that remains is “Pennsylvania.”</p>
    <img
      class="medium vert"
      src="../../assets/images/week2/pennsylvania_query.png"
      alt="Typing 'Pennsylvania' to filter the states down"
    />
    <p>Now, just click on the value for “Pennsylvania” below the search box to cause a check mark to appear.</p>
    <img
      class="medium"
      src="../../assets/images/week2/check_pennsylvania.png"
      alt="Clicking on 'Pennsylvania' to put a check mark there"
    />
    <p>
      Hit
      <code>Ok</code> to apply the filter and see the results.
    </p>
    <img
      class="medium"
      src="../../assets/images/week2/pennsylvania_applied.png"
      alt="Applying the filter to get results for only the state of 'Pennsylvania'"
    />
  </div>
</template>