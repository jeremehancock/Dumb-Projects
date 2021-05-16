import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Wrap from "../components/layout/main/wrap";
import Page from "../components/layout/main/page";
import Card from "../components/basic/main/card";

import Projects from "../data/projects";

const Index = () => (
  <Wrap>
    <Page
      title="Ridiculous projects from the mind of "
      url="https://jeremehancock.com"
      linkTitle="Jereme Hancock"
      alt="Jereme Hancock"
      logo={
        <StaticImage
          src="src/images/dumb.png"
          width={200}
          placeholder="blurred"
          alt="Dumb Projects"
        />
      }
    >
      {Projects &&
        Projects.map((item, index) => (
          <Card
            key={`project_${index}`}
            title={item.title}
            image={item.image}
            url={item.url}
          />
        ))}
    </Page>
  </Wrap>
);

export default Index;
