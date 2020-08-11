module.exports = {
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader', ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader?limit=100000']
            }
        ]
    }
}