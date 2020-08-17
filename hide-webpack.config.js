const webpack = require('webpack');

module.exports = {
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery/dist/jquery.min.js',
            jQuery: 'jquery/dist/jquery.min.js',
            'window.jQuery': 'jquery/dist/jquery.min.js',
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader', ],
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
            // {
            //     test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            //     use: ['url-loader?limit=100000']
            // }
        ]
    }
}