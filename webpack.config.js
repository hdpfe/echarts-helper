var PROD = process.argv.indexOf('-p') >= 0;

module.exports = {
    entry: {
        'echarts-helper': __dirname + '/index.js'
    },
    output: {
        libraryTarget: 'umd',
        library: ['echartsHelper'],
        path: __dirname + '/dist',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    externals: {
        'echarts': 'echarts'
    }
};