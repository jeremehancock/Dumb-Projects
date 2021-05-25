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
};
