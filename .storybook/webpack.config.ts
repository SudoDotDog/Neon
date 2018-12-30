/**
 * @author WMXPY
 * @namespace Storybook
 * @description Webpack Config
 */

const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");

module.exports = (baseConfig: any, env: any, defaultConfig: any) => {

    defaultConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [{
            loader: require.resolve('awesome-typescript-loader'),
        }],
    });

    defaultConfig.plugins.push(new TSDocgenPlugin());
    defaultConfig.resolve.extensions.push('.ts', '.tsx');
    return defaultConfig;
};
