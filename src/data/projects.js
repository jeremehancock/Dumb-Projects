import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Projects = [
  {
    title: "Raspberry Pi Web Cluster",
    image: (
      <StaticImage
        src="../images/projects/pilab.png"
        width={440}
        placeholder="blurred"
        alt="Pi Lab"
      />
    ),
    url: "https://pilab.dev",
  },
  {
    title: "No one will forget that FLY!",
    image: (
      <StaticImage
        src="../images/projects/zombiepence.png"
        width={440}
        placeholder="blurred"
        alt="Zombie Pence"
      />
    ),
    url: "https://zombiepence.com",
  },
  {
    title: "Out of Context TV",
    image: (
      <StaticImage
        src="../images/projects/outofcontext.png"
        width={440}
        placeholder="blurred"
        alt="Out of Context TV"
      />
    ),
    url: "https://outofcontext.dumbprojects.com",
  },
  {
    title: "Looking for random goat gifs?",
    image: (
      <StaticImage
        src="../images/projects/random-goat.png"
        width={440}
        placeholder="blurred"
        alt="Random Goat"
      />
    ),
    url: "https://randomgoat.com",
  },
  {
    title: "Bouncing Trump heads!",
    image: (
      <StaticImage
        src="../images/projects/bouncing-trump.png"
        width={440}
        placeholder="blurred"
        alt="Bouncing Trump"
      />
    ),
    url: "https://bouncingtrump.com",
  },
  {
    title: "Fact checking is easy!",
    image: (
      <StaticImage
        src="../images/projects/snopes-it.png"
        width={440}
        placeholder="blurred"
        alt="Snopes It"
      />
    ),
    url: "https://snopesit.com",
  },
  {
    title: "Are you crazy for Swayze?",
    image: (
      <StaticImage
        src="../images/projects/daily-swayze.png"
        width={440}
        placeholder="blurred"
        alt="Daily Swayze"
      />
    ),
    url: "https://dailyswayze.com",
  },
  {
    title: "Roadside America API",
    image: (
      <StaticImage
        src="../images/projects/roadside-america.png"
        width={440}
        placeholder="blurred"
        alt="Roadside America API"
      />
    ),
    url: "https://roadside-america.dumbprojects.com",
  },
  {
    title: "So much Trump!",
    image: (
      <StaticImage
        src="../images/projects/random-trump.png"
        width={440}
        placeholder="blurred"
        alt="Random Trump"
      />
    ),
    url: "https://randomtrump.co",
  },
];

export default Projects;
