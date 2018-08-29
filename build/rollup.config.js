export default {
    input: './src/index.js',
    output: [{
        file: './dist/fe-router.iife.js',
        format: 'iife',
        sourceMap: 'inline'
    },
    {
        file: './dist/fe-router.cjs.js',
        format: 'cjs',
        sourceMap: 'inline'
    },
    {
        file: './dist/fe-router.umd.js',
        format: 'umd',
        sourceMap: 'inline'
    }]
}
