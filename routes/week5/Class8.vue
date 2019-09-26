<template>
  <div>
    <h1>Class 8: Diving into Figma</h1>
    <p>In this class, I’ll show you how to use Figma in more depth so you can become an expert. We’ll spend most of the class going over how to use Figma and then discuss strategies for creating data-driven visualizations inside Figma.</p>
    <p>
      <a
        href="https://docs.google.com/presentation/d/1HWQCjP0wz3__nOjUrIbipM83xWFhZS4B2LdXg8P9KQk/edit?usp=sharing"
      >Slides</a>
    </p>

    <h2>How to use Figma</h2>
    <p>
      See the link to the slides above for some introductory tips on Figma. I’ve also prepared a series of mini silent videos on how to use different Figma features
      <router-link to="/week-5/figma-tips">here</router-link>.
    </p>
    <p>
      Also, check out Figma’s official
      <a
        href="https://help.figma.com/article/12-getting-familiar-with-figma"
      >documentation</a>. These pages have a series of videos that are very easy to follow along.
    </p>
    <h2>In-class exercise</h2>
    <div>
      <b>Fruit production by year</b>
    </div>
    <table>
      <tr>
        <th>Year</th>
        <th>Apple</th>
        <th>Banana</th>
      </tr>
      <tr>
        <td>2017</td>
        <td>7</td>
        <td>5</td>
      </tr>
      <tr>
        <td>2018</td>
        <td>8</td>
        <td>15</td>
      </tr>
      <tr>
        <td>2019</td>
        <td>22</td>
        <td>11</td>
      </tr>
    </table>
    <p>Create a bar graph from scratch in Figma based on the above dataset. I would recommend using the rectangle tool to draw the bars. It is important in a data visualization for the size of the rectangles to be exactly proportional to the data. I would use the height setting in the properties panel to set the height to the data points. Don’t worry about creating axes for now, but if you have time give it a stab.</p>
  </div>
</template>

<style scoped>
td,
th {
  padding: 2px 10px;
  border: solid 1px gainsboro;
}
</style>