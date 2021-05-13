import React from "react";
import { graphql } from "gatsby";

import Wrap from "@/components/layout/wrap";
import Page from "@/components/layout/page";
import Card from "@/components/basic/card";

const Bludit = ({ data }) => (
  <Wrap>
    <Page
      title="Latest Posts from "
      link="https://pilab.dev"
      linkTitle="Pi Lab"
      alt="Pi Lab"
      social={false}
    >
      {data.allBludit.edges.map(({ node }) => {
        return (
          <Card
            key={node.id.toString()}
            title={node.title}
            image={node.coverImage}
            link={node.permalink}
          />
        );
      })}
    </Page>
  </Wrap>
);

export const query = graphql`
  {
    allBludit(limit: 9) {
      edges {
        node {
          id
          coverImage
          title
          permalink
        }
      }
    }
  }
`;

export default Bludit;
