const path = require("path");
module.exports = {
    mode: 'development',
    entry: {
    index:"./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
    },
    //router dosyasının gezinti yapması için yazılan kod blogudur
    devServer:{
        static:path.resolve(__dirname,"dist"),
        historyApiFallback:true
    }, 
    //webpack ile çalışcak olan programa dillerin ve uzantıların kod blogudur 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    //Sürekli yenileme yapmamak için kullanulan kod blogudur
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
};
