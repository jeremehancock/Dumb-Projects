exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allBludit {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.allBludit.edges.forEach(edge => {
    const slug = edge.node.slug;
    actions.createPage({
      path: `/bludit/${slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: { slug: slug },
    });
  });
};
