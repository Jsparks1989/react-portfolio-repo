const path = require('path');

module.exports = {
    entry: './js/main.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }
        }]
    }
}


/*
 * WEBPACK CONFIG FILE
 *
 * entry: Where webpack will start, and work its way through the app
 * 
 * output>path: Creating the output directory folder, in the current directory folder, for the output file from webpack
 * 
 * output>filename: The filename of the webpack output
 * 
 * module>rules: An array of rules for webpack to follow when packaging code 
 * 
 * module>rules>test: A regEx that tests what kind of files to include and run through the loader (Include all files ending in .js)
 * 
 * module>rules>exclude: Which files to exclude (exclude the node_modules folder)
 * 
 * module>rules>loader: The name of the loader we are using (the babel module loader for Webpack)
 * 
 * module>rules>presets: Using react
 * 
 */