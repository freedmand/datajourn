<template>
  <div>
    <h1>Class 9: Figma like a Pro</h1>
    <p>In this class you’ll learn some advanced Figma tactics that will really level up your game. These include managing colors, aligning and distributing spacing, grouping and ungrouping, exporting, and some really mind-blowing stuff.</p>
    <p>
      <a
        href="https://docs.google.com/presentation/d/1ZENKe9BWHnh8opPuEWAh7UWXLBSNe2JdTSe5pAVAs9k/edit?usp=sharing"
      >Slides</a>
    </p>
    <h2>In-class Exercise: Coloring a map</h2>
    <img
      src="../../assets/images/week5/png_vs_svg.png"
      style="max-width: 500px; border: solid 1px gainsboro; margin: 0; padding: 1em"
      alt
    />
    <p>
      <em>SVG</em>, or scalable vector graphics, is the file format Figma uses internally. Unlike most image formats, which are based on square pixels, SVG describes everything as mathematical formulas, like a graphic calculator.
    </p>
    <p>You don’t need to worry about how SVG works internally (for now), but just know that if you want to include graphics in Figma, it’s best to drag in SVG files if you have them (for maps, charts, logos, etc.). If you are dealing with images taken with a camera, e.g. headshots, outdoor photos, etc., you must use an image format that’s pixel-based, like PNG or JPG.</p>
    <h4>Your task</h4>
    <img
      src="../../assets/images/week5/pennsylvania_election.png"
      style="max-width: 500px; border: solid 1px gainsboro; margin: 0; padding: 1em"
      alt
    />
    <p>Recreate this chart of the 2016 election results in Figma. You will first need to find a map of Pennsylvania counties in SVG format (this will allow you to import it into Figma and recolor counties as you wish).</p>
    <Googler query="pennsylvania counties svg" />
    <p>Find a reputable source. In general, Wikipedia has many good results for SVG maps you can use. Download an SVG map you find and drag it into Figma.</p>
    <p>Once you have the SVG in Figma, you can begin editing it. Look at how things are labeled and grouped in the layers panel. Apply your skills to make the map of 2016 election results in Pennsylvania above. You are free to add your own artistic flair.</p>
    <p>Once you’re done, share the Figma map with me (freedmand@temple.edu)</p>
  </div>
</template>

<script>
import Googler from "../../Googler";

export default {
  components: { Googler }
};
</script>