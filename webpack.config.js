const { merge } = require("webpack-merge");
const commonConfig = require("./config/webpack.common");

module.exports = env => {
    console.log(env)
    const config = require(`./config/webpack.${env.build}.js`);
    return merge(commonConfig, config);
};
