const withCSS = require('@zeit/next-css');
require('dotenv').config();

const {
  APIURL,
  APIKEY,
  BRANCH,
  CDNBASE,
  PROJECTID,
  GRAPHCMSID,
  GRAPHCMSURL,
} = process.env;

module.exports = withCSS({
  publicRuntimeConfig: {
    graphcms: {
      APIURL,
      APIKEY,
      BRANCH,
      CDNBASE,
      PROJECTID,
      GRAPHCMSID,
      GRAPHCMSURL,
    },
  },
});
