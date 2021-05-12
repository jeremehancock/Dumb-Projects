import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Wrap from "@/components/layout/wrap";
import Page from "@/components/layout/page";
import Card from "@/components/basic/card";

const Index = () => (
  <Wrap>
    <Page
      title="Ridiculous projects from the mind of "
      link="https://jeremehancock.com"
      linkTitle="Jereme Hancock"
      alt="Jereme Hancock"
      logo={
        <StaticImage
          src="../images/dumb.png"
          width={200}
          placeholder="blurred"
          alt="Dumb Projects"
        />
      }
    >
      <Card
        title="Raspberry Pi web cluster."
        image=<StaticImage
          src="../images/projects/pilab.png"
          width={440}
          placeholder="blurred"
          alt="Pi Lab"
        />
        link="https://pilab.dev"
      />

      <Card
        title="No one will forget that FLY!"
        image=<StaticImage
          src="../images/projects/zombiepence.png"
          width={440}
          placeholder="blurred"
          alt="Zombie Pence"
        />
        link="https://zombiepence.com"
      />

      <Card
        title="Community driven out of context TV."
        image=<StaticImage
          src="../images/projects/outofcontext.png"
          width={440}
          placeholder="blurred"
          alt="Out of Context TV"
        />
        link="https://outofcontext.dumbprojects.com"
      />

      <Card
        title="Looking for random goat gifs?"
        image=<StaticImage
          src="../images/projects/random-goat.png"
          width={440}
          placeholder="blurred"
          alt="Random Goat"
        />
        link="https://randomgoat.com"
      />

      <Card
        title="Just a bunch of bouncing Trump heads."
        image=<StaticImage
          src="../images/projects/bouncing-trump.png"
          width={440}
          placeholder="blurred"
          alt="Bouncing Trump"
        />
        link="https://bouncingtrump.com"
      />

      <Card
        title="Fact checking is easy!"
        image=<StaticImage
          src="../images/projects/snopes-it.png"
          width={440}
          placeholder="blurred"
          alt="Snopes It"
        />
        link="https://snopesit.com"
      />

      <Card
        title="Are you crazy for Swayze?"
        image=<StaticImage
          src="../images/projects/daily-swayze.png"
          width={440}
          placeholder="blurred"
          alt="Daily Swayze"
        />
        link="https://dailyswayze.com"
      />

      <Card
        title="Roadside America API"
        image=<StaticImage
          src="../images/projects/roadside-america.png"
          width={440}
          placeholder="blurred"
          alt="Roadside America API"
        />
        link="https://roadside-america.dumbprojects.com"
      />

      <Card
        title="So much Trump!"
        image=<StaticImage
          src="../images/projects/random-trump.png"
          width={440}
          placeholder="blurred"
          alt="Random Trump"
        />
        link="https://randomtrump.com"
      />
    </Page>
  </Wrap>
);

export default Index;