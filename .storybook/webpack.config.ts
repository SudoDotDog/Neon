/**
 * @author WMXPY
 * @namespace Storybook
 * @description Webpack Config
 */

const TSDocgenPlugin: any = require("react-docgen-typescript-webpack-plugin");

module.exports = (baseConfig: any, env: any, defaultConfig: any) => {

    defaultConfig.module.rules.push(
        {
            test: /.mdx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
                '@mdx-js/loader',
            ],
        }, {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: require.resolve('awesome-typescript-loader'),
            }],
        },
    );

    defaultConfig.plugins.push(new TSDocgenPlugin());
    defaultConfig.resolve.extensions.push('.ts', '.tsx');

    return defaultConfig;
};
