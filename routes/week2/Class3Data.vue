<template>
  <div>
    <h1>Class 3: Strength in Numbers</h1>
    <p>In this class, we’ll start looking at a powerful way to compute things in spreadsheets: formulas. But first, let’s talk a little more about data in general and why it helps get closer to the truth.</p>
    <p>
      <a
        href="https://docs.google.com/presentation/d/1SDPKQQcYJADHOoqb3TRr3FzcebWuZmC-a6werqh8fHM/edit?usp=sharing"
      >Slides</a>
    </p>
    <h2>Why data-powered journalism is important</h2>
    <p>
      <a
        href="https://www.politico.com/story/2019/08/12/trump-evangelicals-blasphemy-profanity-1456178"
      >POLITICO: ‘Using the Lord’s name in vain’: Evangelicals chafe at Trump’s blasphemy</a>
    </p>
    <p>POLITICO ran a story on Aug 12, 2019 about how Trump’s use of profanity during rallies has upset his devout Christian base. The only problem? POLITICO only interviewed a few people and drew a large conclusion off a limited sample size. A Temple professor was upset:</p>

    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        An example of old-school political reporting that has to stop.
        <a
          href="https://t.co/oDAg2I724a"
        >https://t.co/oDAg2I724a</a>
        <br />
        <br />If only there were a way to see if Trump’s popularity among conservative christians was falling.
        <br />
        <br />July ’19: 73% approve
        <br />Jan ’19: 66% approve
        <br />June ’17: 65% approve
        <a href="https://t.co/mbDSy8CfnQ">https://t.co/mbDSy8CfnQ</a>
      </p>&mdash; Aron Pilhofer (@pilhofer)
      <a
        href="https://twitter.com/pilhofer/status/1160876288183328768?ref_src=twsrc%5Etfw"
      >August 12, 2019</a>
    </blockquote>

    <p>Pilhofer, a seasoned data journalism veteran, is no stranger to finding official sources of data. In this case, the best source to understand how Trump’s popularity among Christian voters has been affected is polling data. Polls are conducted by a variety of different agencies and often released to the public. Let’s try to find polling data on our own:</p>

    <Googler query="presidential approval polls data" />

    <p>Some results that pop up include:</p>

    <ul>
      <li>
        <a
          href="https://www.realclearpolitics.com/epolls/other/president_trump_job_approval-6179.html"
        >RealClear Politics: President Trump Job Approval</a>: A collection of hundreds of polls, and that’s just within the last year.
      </li>
      <li>
        <a
          href="https://projects.fivethirtyeight.com/polls/trump-approval/"
        >FiveThirtyEight: Last Polls - Presidential Approval</a>: A similar collection of polls but with an assigned grade for each pollster. This grade seems to be decided by FiveThirtyEight based on the polling method’s reputability (according to them).
      </li>
    </ul>

    <p>Let’s look at FiveThirtyEight’s polls and filter the results using their site to only show presidential approval polls from pollsters with a rating of A or better. (Even though this rating is decided by them, it’s a useful starting point).</p>
    <p>Clicking on the name of the pollster pulls up a PDF document showing the poll results. If we browse through PDFs starting with the most recent and search for “Christian” inside, we’re bound to find a recent poll to showcase approval rating. To search for text within a PDF document, you can type Ctrl+F (PC) or Cmd+F (Mac) and then enter your query.</p>
    <p>
      Using this method, we find the most recent poll to show Trump’s presidential approval rating amongst Christians is indeed the
      <a
        href="http://maristpoll.marist.edu/wp-content/uploads/2019/07/NPR_PBS-NewsHour_Marist-Poll_USA-NOS-and-Tables_1907190926.pdf"
      >Marist College poll.</a>
    </p>

    <h2>When data backfires</h2>

    <p>
      Data provides strong reasons to believe a thing is true, but that doesn’t always mean the thing is true. Famously, in the 2016 election, pollsters and election forecasters unanimously predicted a democratic victory for Hillary Clinton.
      <a
        href="https://elections.huffingtonpost.com/2016/forecast/president"
      >Huffington Post</a> gave Clinton a 98% chance of winning.
      <a
        href="https://www.nytimes.com/interactive/2016/upshot/presidential-polls-forecast.html"
      >The New York Times</a> predicted Clinton had an 85% chance of winning.
      <a
        href="https://projects.fivethirtyeight.com/2016-election-forecast/"
      >FiveThirtyEight</a> was most tempered with only a 71% win prediction for Clinton. They were all incorrect.
    </p>
    <p>
      What went wrong? Well, it’s important to realize that data may suggest something, but it’s never concrete proof that it will happen. Data catalogues things in the past. To predict the future using data, analysts build
      <em>statistical models</em> &mdash; basically, they use math to say with a certain degree of probability that a thing will happen given what the data says has already happened. In the case of elections, this is like saying “Hillary Clinton will win the 2016 presidential election because thousands of people we randomly called were more likely to vote for Clinton in states that could sway the election.”
    </p>
    <p>There’s a number of things that can go wrong. Firstly, maybe people who are more likely to respond to a phone call also happen to be older, and maybe older people are more likely to vote Clinton. That is, the polls could be sampling from a group of people that doesn’t evenly represent the American public (have any of you been polled before?). Another thing that could go wrong: maybe some people who want to vote for Trump fear social repercussions, so say they are voting for Clinton. Lastly, maybe the pollsters were right. Just because a model says there’s a 98% chance a thing will happen, doesn’t mean it’s impossible for that 2% to happen. 1 in 50 times it will.</p>
    <p>Yes, things can go wrong with data. But having lots of data that’s fairly collected provides the most objective window into what’s happening in our world. As journalists, we must rely on data as a source of truth and seek objectivity and equality in obtaining it.</p>
  </div>
</template>

<script>
import Googler from "../../Googler";

export default {
  components: { Googler }
};
</script>