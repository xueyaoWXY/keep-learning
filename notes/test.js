// next.config.js
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    cssModules: true,
    cssLoaderOptions: {
        modules: true,
        localIdentName: ' [namel__[local]__[hash: base64: 5]',
        getLocalIdent: (context, localIdentName, localName, options) => {
            const fileName = context.resourcePath.replace(/^.+\/pages\//, '').replace(/\.module\. (css|scss|sass)$/, '');
            return `${fileName}_${localName}*`;
        },
        webpack: (config, options) => {
            config.module.rules.push({
                test: /\.css$/,
                use: [
                    options.defaultLoaders.css,
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    flexbox: 'no-2009'
                                })
                            ]
                        }
                    },
                    { loader: 'resolve-url-loader' }]
            })
            return config;
        }
    }
})