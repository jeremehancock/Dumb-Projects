let fs = require("fs");
const publicPath = `./public`;
const robotsSource = `${process.env.PWD}/plugins/robots-txt/env/${process.env.GATSBY_ROBOTS_ENVIRONMENT}.txt`;
const creatingText = "Creating robots.txt..."
const errorText = "Error when creating robots.txt file."
const successText = "Successfully created robots.txt file!"

// For Development
exports.onCreateDevServer = async ({ reporter }) => {
  reporter.info(creatingText);
  await createRobotsTxt({ reporter });
};

// For Staging or Production
exports.onPostBuild = async ({ reporter }) => {
  reporter.info(creatingText);
  await createRobotsTxt({ reporter });
};

// Create robots.txt file based on environment
async function createRobotsTxt({ reporter }) {
  try {
    createFile({ reporter });
  } catch (error) {
    reporter.panic(`${errorText} - ${error.message}`);
  }
}

// Abstraction to create robots.txt file
function createFile({ reporter }) {
  fs.copyFile(robotsSource, `${publicPath}/robots.txt`, (err) => {
    if (err) throw reporter.panic(`${errorText} - ${err.message}`);
    reporter.success(successText);
  });
}
