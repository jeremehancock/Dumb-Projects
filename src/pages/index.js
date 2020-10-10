import React from "react";

import Wrap from "@/wrap";
import Page from "@/components/Page";
import Card from "@/components/Card";

import pilab from "@/images/projects/pilab.png";
import zombiepence from "@/images/projects/zombiepence.png";
import outofcontext from "@/images/projects/outofcontext.png";
import randomgoat from "@/images/projects/random-goat.png";
import bouncingtrump from "@/images/projects/bouncing-trump.png";
import snopesit from "@/images/projects/snopes-it.png";
import dailyswayze from "@/images/projects/daily-swayze.png";
import roadsideamerica from "@/images/projects/roadside-america.png";
import randomtrump from "@/images/projects/random-trump.png";

const Index = () => (
  <Wrap>
    <Page title="Ridiculous projects from the mind of " link="https://jeremehancock.com" linkTitle="Jereme Hancock" alt="Dumb Projects">
      <Card title="Raspberry Pi web cluster." image={pilab} link="https://pilab.dev" alt="Pi Lab" />

      <Card title="No one will forget that FLY!" image={zombiepence} link="https://zombiepence.com" alt="Zombie Pence" />

      <Card title="Community driven out of context TV." image={outofcontext} link="https://outofcontext.dumbprojects.com" alt="Out of Context TV" />

      <Card title="Looking for random goat gifs?" image={randomgoat} link="https://randomgoat.com" alt="Random Goat" />


      <Card title="Just a bunch of bouncing Trump heads." image={bouncingtrump} link="https://bouncingtrump.com" alt="Bouncing Trump" />

      <Card title="Fact checking is easy!" image={snopesit} link="https://snopesit.com" alt="Snopes It" />

      <Card title="Are you crazy for Swayze?" image={dailyswayze} link="https://dailyswayze.com" alt="Daily Swayze" />

      <Card title="Roadside America API" image={roadsideamerica} link="https://roadside-america.dumbprojects.com" alt="Roadside America API" />

      <Card title="So much Trump!" image={randomtrump} link="https://randomtrump.com" alt="Random Trump"/>
    </Page>
  </Wrap>
);

export default Index;
