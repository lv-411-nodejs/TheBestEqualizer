module.exports = {
    verbose: true,
    moduleDirectories: ["node_modules"] ,
    moduleNameMapper: {
      "\\.css$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["./setupTests.js"],
  };
