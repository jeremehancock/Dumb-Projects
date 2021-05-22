exports.createPages = async function ({ actions, graphql, reporter }) {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query {
      allBluditPages {
        edges {
          node {
            slug
          }
        }
      }
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query');
  }
  data.allBluditPages.edges.forEach(edge => {
    const slug = edge.node.slug;
    createPage({
      path: `/bludit/${slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: { slug: slug },
    });
  });

  const posts = data.allMdx.edges;

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve(`./src/templates/postTemplate.js`),
      context: { id: node.id },
    });
  });
};
