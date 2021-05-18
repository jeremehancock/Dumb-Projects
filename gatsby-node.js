exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
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
  data.allBluditPages.edges.forEach(edge => {
    const slug = edge.node.slug;
    actions.createPage({
      path: `/bludit/${slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: { slug: slug },
    });
  });
};
