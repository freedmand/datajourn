<template>
  <div>
    <h1>Spreadsheet Quick Tips</h1>

    <p>Video quick reference for how to accomplish different spreadsheet tasks.</p>

    <h4>Importing a CSV</h4>
    <p>How to import a CSV file into Google Sheets.</p>
    <Video src="/screencaps/week1/importing_spreadsheet.mp4" style="max-width: 500px" />

    <h4>Moving the header line</h4>
    <p>How to make it known that the first row is a header.</p>
    <Video src="/screencaps/week1/moving_header.mp4" style="max-width: 500px" />

    <h4>Hide columns</h4>
    <p>How to clean up a spreadsheet by hiding columns. By not removing them, we can add them back in later if need be.</p>
    <Video src="/screencaps/week1/hide_columns.mp4" style="max-width: 700px" />

    <h4>Create calculated columns</h4>
    <p>Create a new column and derive it based on a formula applied to existing columns.</p>
    <Video src="/screencaps/week1/create_calculated.mp4" style="max-width: 500px" />

    <h4>Create a filter view</h4>
    <p>Create a filter view to sort columns and filter the values in columns.</p>
    <Video src="/screencaps/week1/filter_view.mp4" style="max-width: 700px" />

    <h4>Making a simple chart</h4>
    <p>Creating a chart on one column of data. Showcases how to create a chart from a column, change the chart type, and dive into chart settings to customize the cart.</p>
    <Video src="/screencaps/week1/making_1d_chart.mp4" style="max-width: 700px" />

    <h4>Making a simple pivot table</h4>
    <p>Creating a pivot table in a new sheet. Showcases how to select a row, add a value, changing the value aggregation type, and sort by the value within the rows.</p>
    <Video src="/screencaps/week1/making_1d_pivot.mp4" style="max-width: 700px" />
  </div>
</template>

<script>
import Video from "../../Video";

export default {
  components: { Video }
};
</script>