import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const Image = ({ src, alt }) => {
  const data = useStaticQuery(
    graphql`
      query allTheImagesQuery {
        allImageSharp {
          edges {
            node {
              id
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              parent {
                ... on File {
                  name
                }
              }
            }
          }
        }
      }
    `
  );

  const image = data.allImageSharp.edges
    .filter(edge => edge.node.parent.name === src)
    .map(srcImage => (
      <GatsbyImage
        key={srcImage}
        image={srcImage.node.gatsbyImageData}
        alt={alt}
      />
    ));

  return <>{image}</>;
};

export default Image;
