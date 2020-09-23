/* eslint-disable import/no-extraneous-dependencies */
const withLess = require('@zeit/next-less');

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
});
