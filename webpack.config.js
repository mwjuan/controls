const path = require('path');

module.exports = {
    entry: './src/index.js', // 主入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'SpaceControlComponents', // 库名
        libraryTarget: 'umd', // 支持多种模块格式
        umdNamedDefine: true,
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    externals: {
        react: 'commonjs react' // 确保React不会被打包到库中
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};