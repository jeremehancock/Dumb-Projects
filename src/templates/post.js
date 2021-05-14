import React from "react";
import { graphql } from "gatsby";

import Wrap from "@/components/layout/wrap";
import Page from "@/components/layout/page";

export default function Post({ data }) {
  const post = data.allBludit.edges[0].node;
  return (
    <Wrap>
      <Page>
        <div>
          <h1>{post.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.replaceAll(
                "/bl-content",
                "https://pilab.dev/bl-content"
              ).replaceAll(
                  "/images",
                  "https://pilab.dev/images"
              ).replaceAll("data-src", "src"),
            }}
          />
        </div>
      </Page>
    </Wrap>
  );
}

export const query = graphql`
  query ($slug: String!) {
    allBludit(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`;
