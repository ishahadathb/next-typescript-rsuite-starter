/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const withLess = require('@zeit/next-less');

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: { '@base-color': '#710e8c' },
  },
});
