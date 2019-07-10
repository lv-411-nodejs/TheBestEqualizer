module.exports = {
    verbose: true,
    moduleDirectories: ["node_modules"] 
  };

// module.exports = {
//   "globals": {
//     "__TRANSFORM_HTML__": true
//   },
//   testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
//   transform: {
//     '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js',
//   },
//   resolver: '@nrwl/builders/plugins/jest/resolver',
//   moduleFileExtensions: ['ts', 'js', 'html'],
//   collectCoverage: true,
//   coverageReporters: ['html', "lcov"],
//   moduleNameMapper: {
//     "webfrontendclient/(.*)/src/(.*)": "<rootDir>/libs/$1/src/$2",
//     "webfrontendclient/(.*)": "<rootDir>/libs/$1/src/index.ts",
//   },
//   "transformIgnorePatterns": [
//     "node_modules/(?!@ngrx)"
//   ]
// };
