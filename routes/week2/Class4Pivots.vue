<template>
  <div>
    <h1>Class 4: Pivot Tables</h1>
    <p>In this class we’ll explore pivot tables in Google Sheets, a flexible data summarization tool.</p>
    <p>
      <a
        href="https://docs.google.com/presentation/d/1m5fEV1-ZYs5u3mRa6XtoEgWGgSIOP0uApi_1N7DUmp8/edit?usp=sharing"
      >Slides</a>
    </p>
    <p>
      <a href="/datasets/phl_shootings.csv">Philadelphia Shooting Victims Dataset</a>
    </p>

    <h2>A visual guide to pivot tables</h2>
    <p>
      <router-link to="week2/pivot-guide">Check out the guide here.</router-link>
    </p>
    <h2>In-class exercise 1</h2>
    <p>Create a new Google sheet with the table below and try to replicate the in-class presentation.</p>
    <table cellspacing="0">
      <tr>
        <th>Year</th>
        <th>Fruit</th>
        <th>Count</th>
      </tr>
      <tr>
        <td>2017</td>
        <td>Apple</td>
        <td>7</td>
      </tr>
      <tr>
        <td>2017</td>
        <td>Banana</td>
        <td>5</td>
      </tr>
      <tr>
        <td>2018</td>
        <td>Apple</td>
        <td>8</td>
      </tr>
      <tr>
        <td>2018</td>
        <td>Banana</td>
        <td>9</td>
      </tr>
      <tr>
        <td>2018</td>
        <td>Banana</td>
        <td>6</td>
      </tr>
      <tr>
        <td>2019</td>
        <td>Apple</td>
        <td>10</td>
      </tr>
      <tr>
        <td>2019</td>
        <td>Apple</td>
        <td>12</td>
      </tr>
      <tr>
        <td>2019</td>
        <td>Banana</td>
        <td>11</td>
      </tr>
    </table>
    <p>
      First, create a pivot table with just a value for sum of
      <em>Count</em>. Next, add a row grouping by
      <em>Year</em>. Finally, add a column grouping by
      <em>Fruit</em>.
    </p>
    <p>
      Mess around with things a bit. Try dragging
      <em>Fruit</em> from the column section of the pivot table editor to the row section.
    </p>
  </div>
</template>

<style scoped>
td,
th {
  border: solid 1px #dfdfdf;
  padding: 2px 10px;
}

th {
  background: gainsboro;
}
</style>