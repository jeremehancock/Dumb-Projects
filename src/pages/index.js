import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import Wrap from "@/components/layout/main/wrap";
import Page from "@/components/layout/main/page";
import Card from "@/components/basic/main/card";

const Index = ({ data }) => (
  <Wrap>
    <Page
      title="Ridiculous projects from the mind of "
      url="https://jeremehancock.com"
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
      {data.allProjectsJson.edges.map(({ node }) => {
        return (
          <Card
            key={node.id}
            title={node.title}
            image={node.image}
            url={node.url}
          />
        );
      })}
    </Page>
  </Wrap>
);

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          url
          title
          image
          id
        }
      }
    }
  }
`;

export default Index;
