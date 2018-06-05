"use strict";

const md = require("markdown-it")();
// const loaderUtils = require("loader-utils");

module.exports = function (markdown) {
    // merge params and default config
    // const options = loaderUtils.getOptions(this);

    this.cacheable();
    markdown = markdown || ''

    // marked.setOptions(options);
    return "export default {data: " + JSON.stringify(md.render(markdown)) + "}"
};
