<template>
  <div>
    <h1>Class 2: Data and Spreadsheets</h1>
    <p>
      In this class we’ll explore some public datasets. Then, we’ll learn how to import data into
      <a
        href="http://sheets.google.com"
      >Google Sheets</a>, an online spreadsheet application. Within Google Sheets, we will learn how to sort, filter, analyze, and chart data.
    </p>
    <h2>Finding public datasets</h2>
    <p>While some successful data journalism stories entail collecting data yourself, many utilize public data that can be found on the Internet. Just because data is out in the open does not mean that reporters have found it or covered some aspects of it. Some of the most successful data stories entail finding a new angle into a set of data or combining multiple sources of data in unique ways.</p>
    <h4>Public datasets about Philadelphia</h4>
    <p>Ok, let’s try to find public data in Philadelphia. What would an effective Google search for this look like? Try guessing before revealing one example search below:</p>
    <Googler query="public data philadelphia" />
    <p>
      This Google search follows the structure:
      <code>[thing] [place]</code>, where
      <code>[thing]</code> is a concise way of saying what it is we’re looking for (“public datasets”), and
      <code>[place]</code> is “philadelphia” (note that it doesn’t need to capitalized). Words like “in,” “of,” “at,” “to,” etc. can usually safely be omitted from searches since they don’t really change the meaning in Google’s algorithm.
    </p>
    <p>
      Let’s scan the first page of results for this query. We see
      <em>OpenDataPhilly</em>, which claims to contain the official data repository for the city. Scrolling down a little, we see a URL that starts with
      <code>data.pa.gov</code> &mdash; this seems more reputable, since
      <code>.gov</code> URLs have to be registered by the government and can’t be made up by random people. Clicking on this government source yields a link to
      <a
        href="https://www.opendataphilly.org/"
      >OpenDataPhilly</a>. Yay, we’ve verified it’s legit. Now let’s see what we can find on it.
    </p>
    <h4>OpenDataPhilly</h4>
    <img
      src="../../assets/images/week1/open_data_philly.png"
      style="max-width: 700px; border: solid 1px gainsboro; margin: 0;"
      alt="A screenshot of OpenDataPhilly.org that lists a few datasets, each containing several colorful tags"
    />
    <p>
      After clicking the
      <em>Datasets</em> link in OpenDataPhilly (or one of the categories below), we see a listing of datasets. Each dataset contains several mysterious, colorful tags below, like
      <code>Visualization</code>,
      <code>CSV</code>,
      <code>HTML</code>,
      <code>GeoJSON</code>,
      <code>SHP</code>, or
      <code>API Documentation</code>, among others. What do these mean?
    </p>
    <p>
      <code>Visualization</code> and
      <code>HTML</code> are more obvious, but the shorter acronyms are cryptic.
      My first line of attack for learning about what these tags might mean would be to search the website in question, in this case, the
      <em>About</em> or
      <em>FAQ</em> page on OpenDataPhilly. Unfortunately, they are not helpful here. It’s just assumed that we must know what these tags mean, since everyone that uses the website is obviously a proficient data scientist... Let’s turn to Google:
    </p>
    <Googler query="what is csv" />
    <p>In this Google search, we’re asking Google a question, “what is [thing]” &mdash; since Google is trained to answer questions, we often get direct results for this kind of thing.</p>
    <img
      src="../../assets/images/week1/what_is_shp.png"
      alt="A Google search for 'what is shp' which reveals a knowledge panel with a concise definition"
      style="max-width: 400px; border: solid 1px gainsboro; margin: 0"
    />
    <p>
      For example, the query
      <code>what is shp</code> reveals a “knowledge panel,” that little card that shows up before the search results. This displays a concise definition. In this case, it’s pretty helpful. But sometimes, Google gets it wrong, in which case it’s good to scan the search results and look for sites we know are probably reputable, like
      <em>Wikipedia</em>.
    </p>
    <p>
      It’s also good to note that we’re searching for acronyms that may have multiple meanings. We’re particularly searching for these acronyms as they relate to data, but we haven’t told Google that. It’s good to first see what Google returns without telling it you’re looking for data-specific results, just to see if it’s an obvious thing. If the Google results don’t really fit the bill, append the keyword
      <code>data</code> to the end of the search to give Google the hint.
    </p>

    <h4>Data formats</h4>
    <p>
      To summarize, the Google searches about these tags should reveal that most of them are data formats &mdash; essentially, filetypes that describe data. Once you figure out they’re data formats, you may start Google searching
      <code>[name] data format</code>, like “geojson data format,” to get more relevant results. I’ve provided brief definitions for the common ones
      <router-link to="/week-1/data-formats">here</router-link>.
    </p>
    <p>
      This week we will focus only on
      <em>tabular</em> data formats. These formats describe spreadsheet data with rows and columns. The two main tabular data formats are
      <code>csv</code> and
      <code>xls/xlsx</code>. The former stands for “comma-separated values” &mdash; this file contains a list of lines corresponding to rows, with each line containing a list of values separated by commas (these correspond to columns). The latter format describes Microsoft Excel spreadsheets. This format is more flexible than CSV, allowing for multiple
      <em>sheets</em> within the same file (pages of data, if you will) as well as formatting, but it isn’t as simple.
    </p>
    <p>Both kinds of files can be imported into Google Sheets, but OpenDataPhilly has lots of datasets tagged CSV, so let’s look at some of those.</p>

    <h2>Exploring datasets</h2>

    <p>
      I randomly selected the following dataset which has a CSV tag:
      <a
        href="https://www.opendataphilly.org/dataset/district-employees-and-finance-full-time-employee-fte"
      >School District of Philadelphia: Full Time Employee (FTE)</a>
      .
    </p>
    <img
      src="../../assets/images/week1/district_employees_data.png"
      alt="A list of data files for a school district dataset"
      style="border: solid 1px gainsboro; max-width: 700px; margin: 0;"
    />
    <p>
      Now, we see the data associated with this dataset. Notice that there is a CSV file and a TXT file. We want to download the CSV file so that we can import it into Google Sheets. Click the
      <code>Explore</code> button next to the CSV file and click
      <code>Download</code>. Save the file somewhere on your computer where you can find it later.
    </p>

    <h2>Importing into Google Sheets</h2>
    <p>
      Visit Google Sheets at
      <a href="http://sheets.google.com">sheets.google.com</a>. Log into your Google account if you haven’t already.
    </p>
    <p>Now, following the video below to see how to import:</p>
    <details>
      <summary>Instructions:</summary>
      <p>
        Get started by creating a new spreadsheet (hit the big ‘+’ button on the home page of Google Sheets after logging in). Once the spreadsheet pops up and is no longer loading (the “Working...” box stops showing), go to the menu and click on
        <code>File</code> &gt;
        <code>Import</code>. On the import dialog, click on the
        <code>Upload</code> tag and then drag the CSV file you downloaded into the box or click to select the file from your computer. Once the file uploads, an “Import file” dialog will show with several parameters. Under
        <b>Import location</b>, you can set it to “Replace spreadsheet” since you just have an empty spreadsheet anyways. You can leave the default settings for
        <b>Separator type</b> and
        <b>Convert text to numbers, dates, and formulas</b> since those usually work pretty well. Click on the “Import Data” button to start the import. After a few moments, your data should pop up.
      </p>
    </details>

    <Video src="/screencaps/week1/importing_spreadsheet.mp4" style="max-width: 500px" />

    <p>Now, place your mouse over the thicker gray line above the first row to the left of the first column. Click and drag your mouse down to pull that line in between the first and second row. This lets Google Sheets know that the first row is a header.</p>
    <Video src="/screencaps/week1/moving_header.mp4" style="max-width: 500px" />

    <p>Awesome, we’ve imported our sheet. Now... what do all these columns mean?</p>

    <h2>Finding the metadata</h2>
    <p>
      <em>Metadata</em> is data about a dataset. In this case, metadata would be data that describes the column layout of the full-time employee data. Usually, the best place to find the metadata for a dataset is where the dataset itself was found.
    </p>
    <p>Remember, there was a TXT file that showed up with the full-time employee dataset page. This format, like it sounds, just contains simple text. Maybe it’s our metadata. Let’s click through to check.</p>
    <img
      src="../../assets/images/week1/fte_metadata.png"
      style="max-width: 700px; border: solid 1px gainsboro; margin: 0;"
      alt="A screenshot of metadata for the Philadelphia Schools Full-Time Employee data"
    />
    <p>
      Bingo! Now we can understand what’s going on. Let’s play around with the data in class. You can find more videos of spreadsheet tips corresponding to the lecture on
      <router-link to="/week-1/spreadsheet-tips">this page</router-link>.
    </p>
  </div>
</template>

<script>
import Video from "../../Video";
import Googler from "../../Googler";

export default {
  components: { Video, Googler }
};
</script>