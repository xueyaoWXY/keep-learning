const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.less$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: 'styled-jsx/css-loader',
                    options: {
                        modules: true,
                    },
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;