module.exports = function override(config) {
    config.module.rules.push({
        test: /\.svg$/,
        loader: '@svgr/webpack'
    })
    return config;
}