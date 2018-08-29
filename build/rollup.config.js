import babel from 'rollup-plugin-babel'

export default {
    input: './src/index.js',
    output: [{
        file: './dist/fe-router.umd.js',
        format: 'umd',
        name: 'FeRouter',
        sourceMap: 'inline'
    }],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}
