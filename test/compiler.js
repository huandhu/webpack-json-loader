import path from 'path'
import webpack from 'webpack'
import memoryfs from 'memory-fs'

export default (fixture, options = {}) => {
    const compiler = webpack({
        entry: path.resolve(__dirname, `../src/${fixture}`),
        output: {
            path: path.resolve(__dirname),
            filename: 'app.js'
        },
        module: {
            rules: [
                {
                    test: /\.json$/,
                    loader: path.resolve(__dirname, '../src/json-loader.js')
                }
            ]
        }
    })

    compiler.outputFileSystem = new memoryfs();

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) reject(err)

            resolve(stats)
        })
    })
}