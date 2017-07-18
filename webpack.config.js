module.exports={
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    entry: './react/index.js',
    output: {
        path: __dirname +'/static/js',
        filename: 'bundle.js'
    },
    watch: true
}