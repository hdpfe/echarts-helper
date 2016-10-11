var PROD = process.argv.indexOf('-p') >= 0;

module.exports = {
    entry: {
        'hcharts': __dirname + '/index.js'
    },
    output: {
        libraryTarget: 'umd',
        library: ['hcharts'],
        path: __dirname + '/dist',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    externals: {
        'echarts': 'echarts'
    }
};