import React from "react";
import { graphql } from "gatsby";

import Wrap from "@/components/layout/wrap";
import Page from "@/components/layout/page";
import Card from "@/components/basic/card";

const PiLab = ({ data }) => (
  <Wrap>
    <Page
      title="Latest Posts from "
      link="https://pilab.dev"
      linkTitle="Pi Lab"
      alt="Pi Lab"
      social={false}
    >
      {data.allCustomApi.nodes[0].data.map((item, index) => (
        index <= 8 && <Card
          key={item.toString()}
          title={item.title}
          image={item.coverImage}
          link={item.permalink}
        />
      ))}
    </Page>
  </Wrap>
);

export const query = graphql`
  {
    allCustomApi {
      nodes {
        data {
          key
          title
          type
          slug
          tags
          permalink
          username
          coverImage
        }
        children {
          id
        }
      }
    }
  }
`;

export default PiLab;
