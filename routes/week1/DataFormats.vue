<template>
  <div>
    <h1>Data Formats</h1>

    <p>This page is a quick reference on common data formats. This week, we will only be focusing on tabular data formats that can be imported into Google Sheets.</p>

    <p>
      <b>Tabular data formats:</b>
    </p>
    <ul>
      <li>
        <code>csv</code>: Comma-separated values. This file contains a list of tabular records (“tabular” is a fancy way to say spreadsheet, or matrix). Each line of the file corresponds to a row, and each line contains multiple values separated by commas (hence
        <em>comma-separated</em>) corresponding to columns. This kind of file can be imported into Google Sheets.
      </li>
      <li>
        <code>xls</code> and
        <code>xlsx</code>: Microsoft Excel spreadsheet. Like a CSV, this kind of file describes a list of tabular records. The format is more flexible though, and allows for multiple
        <em>sheets</em> within the same file (pages of data, if you will) as well as formatting. This kind of file can also be imported into Google Sheets.
      </li>
    </ul>
    <p>
      <b>Geographic data formats</b>
    </p>
    <ul>
      <li>
        <code>shp</code>: Shapefile. This file stores geographic features (points, lines, or an area) &mdash; basically shapes that correspond to geography. It can also hold associated data for each feature, e.g. the name and population for each county in a state.
      </li>
      <li>
        <code>GeoJSON</code>: Geographic JavaScript Object Notation. This file describes pretty much the same as a Shapefile above, but it is in the
        <em>JSON</em> file format (JavaScript Object Notation), which let’s JavaScript web application read it more easily.
      </li>
      <li>
        <code>kml</code>: Keyhole Markup Language. We won’t really look at this format in this class, but it’s a way to specify geographic annotations and 3D shapes. It could be used to specify the shapes of buildings on Google Earth.
      </li>
    </ul>
    <p>
      <b>Programmatic</b>
    </p>
    <ul>
      <li>
        <code>API</code>: Application Programming Interface. This is not really a data format, in that it doesn’t describe a file type. Instead, it refers to some interface with which you can request data with code and get results back quickly. In most cases, APIs are web applications that return data in one of the formats above after you specify your desired parameters.
      </li>
    </ul>
  </div>
</template>