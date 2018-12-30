/**
 * @author WMXPY
 * @namespace Storybook
 * @description Webpack Config
 */

import * as Path from "path";

module.exports = (baseConfig, env, config) => {

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [{
            loader: require.resolve('awesome-typescript-loader'),
            options: {
                configFileName: Path.join('..', 'typescript', 'tsconfig.storybook.json'),
            },
        }],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
