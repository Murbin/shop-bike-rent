const config = {
  verbose: true
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    setupFilesAfterEnv: ['./jest.setup.js']
  };
};
