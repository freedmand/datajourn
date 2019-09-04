<template>
  <div>
    <h1>Election results mini assignment</h1>
    <p>This assignment will help you practice spreadsheet formulas and filtering.</p>
    <p>
      We will use the .csv we analyzed in class, the election results from the New York Times:
      <a
        href="/datasets/2016_election_results_nyt.csv"
      >2016_election_results_nyt.csv</a>
    </p>
    <h2>Assignment</h2>
    <p>In an email to me, answer the following questions. Use spreadsheet math and filters to answer the questions. Reach out if you need help.</p>
    <ol>
      <li>What is the only county in Wyoming in which Clinton had more voters than Trump?</li>
      <li>Which county in Wyoming had the most Clinton voters? (Note that this is different than the previous question, because Clinton could have more overall voters but still lose to Trump in any given county.)</li>
    </ol>
    <p>
      The following questions are about percent of voter share. To answer these questions, I recommend you create two new columns,
      <code>% Clinton</code> and
      <code>% Trump</code> (or whatever meaningful name you like). You can create the Clinton percent column by dividing the number of Clinton votes by the sum of votes, and you can create the Trump percent column similarly. Before you create new columns, turn off any existing filters (in the menu:
      <code>Data</code> &gt;
      <code>Turn off Filter</code>).
    </p>
    <ol start="3">
      <li>Which place (with more than 10 voters) had the highest percentage vote for Trump?</li>
      <li>Which place (with more than 10 voters) had the highest percentage vote for Clinton?</li>
      <li>Answer the two questions above, but only for counties in Pennsylvania.</li>
      <li>Extra credit: out of places with more than 50,000 total voters, which place nationally had the highest percentage vote for Trump? (hint: you will have to look up how to filter on conditions)</li>
    </ol>
    <p>Share the spreadsheet with me (freedmand@temple.edu) along with your written answers.</p>
  </div>
</template>