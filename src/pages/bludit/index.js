import React from "react";
import { graphql } from "gatsby";

import Wrap from "../../components/layout/bludit/wrap";
import Page from "../../components/layout/bludit/page";
import Card from "../../components/basic/bludit/card";

const Bludit = ({ data }) => (
  <Wrap>
    <Page
      title="Latest Posts from "
      url="https://pilab.dev"
      linkTitle="Pi Lab"
      alt="Pi Lab"
    >
      {data.allBluditPages.edges.map(({ node }) => {
        return (
          <Card
            key={node.title}
            title={node.title}
            image={node.coverImage}
            content={`${node.content
              .replace(/<\/?[^>]+(>|$)/g, "")
              .substring(0, 100)}...`}
            url={node.permalink}
            tags={node.tags}
          />
        );
      })}
    </Page>
  </Wrap>
);

export const query = graphql`
  {
    allBluditPages(limit: 8) {
      edges {
        node {
          id
          title
          coverImage
          permalink
          content
          tags
          slug
        }
      }
    }
  }
`;

export default Bludit;
