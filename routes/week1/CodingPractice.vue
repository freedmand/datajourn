<template>
  <div>
    <h1>The JavaScript console</h1>
    <p>Coding may seem difficult, mysterious, or scary. But it doesn’t have to be! It actually follows quite a basic set of rules. In this class, we’ll pull back the curtain on coding early on.</p>
    <p>
      Below is a web
      console. The console allows you to interact with JavaScript code directly. This is the language that powers all interactive websites!
    </p>
    <Console />
    <p>
      Try typing the following after the blue arrow above and press &lt;Enter&gt;:
      <code>let a = 2;</code>
    </p>
    <p>
      Congratulations! It may not seem exciting, but you just ran code. This code creates a
      <em>variable</em> called “a” which stores the value 2. This variable is just a placeholder.
    </p>
    <p>
      Now try typing:
      <code>a + 3</code>. Before you press &lt;Enter&gt;, what do you think the output will be?
    </p>
    <details>
      <summary>Reveal working code</summary>
      <Console :preload="['let a = 2;', 'a + 3']" />
      <p>It’s 5! That makes sense, because the computer is just calculating “a + 3”, or 2 + 3 = 5.</p>
    </details>
    <h3>Enabling the web console in your browser</h3>
    <p>Every web browser has a JavaScript console built in to let you run code quickly and tinker around with web pages. As a mini exercise, try to figure out how to open the console for your web browser.</p>
    <p>The way I would go about this is as follows: Google search “open web console [browser name]” (replacing [browser name] with the name of your web browser, e.g. ”open web console firefox”). Now scan the first page of results for an authoritative-looking website.</p>
    <p>Once you get the web console running in your browser, try typing in the above exercise in your browser’s console.</p>
  </div>
</template>

<script>
import Console from "../../Console";

export default {
  components: { Console }
};
</script>