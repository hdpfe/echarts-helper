/**
 * supports chartType:
 * bar                    //柱状图
 * barStack               //堆积柱状图
 * barSameStack           //等高堆积柱状图
 * barHori                //条形图
 * barHoriStack           //堆积条形图
 * barHoriSameStack       //等高堆积条形图
 * line                   //折线图
 * lineArea               //面积图
 * lineStack              //堆积折线图
 * lineAreaStack          //堆积面积图
 * barLine                //柱线图(双y轴)
 */
exports.getOption = function(opt){
    var chartType = opt.type;
    var dataArr = opt.data;
    var option = {
        tooltip:{
            trigger:'axis'
        },
        xAxis:null,
        yAxis:null,
        series:[]
    }

    if(toString.call(dataArr) !== '[object Array]'){
        dataArr = [dataArr];
    }

    var categoryAxis = [
        {
            type : 'category',
            name:dataArr[0].rowName,
            data:dataArr[0].rows,
            axisLabel:{
                interval:'auto',
                rotate:0
            }
        }
    ]
    var valueAxis = []

    //判断是条形图就转一下方向
    if(['barHori','barHoriStack','barHoriSameStack'].indexOf(chartType) !== -1){
        option.xAxis = valueAxis;
        option.yAxis = categoryAxis;
    }else{
        option.xAxis = categoryAxis;
        option.yAxis = valueAxis;
    }

    //如果是折线图修改gap
    if(['line','lineArea','lineStack','lineAreaStack'].indexOf(chartType) !== -1){
        option.xAxis[0].boundaryGap = false;
    }

    dataArr.forEach(function(data,index){
        
        if(!valueAxis[data.yIndex|| 0]){
            valueAxis[data.yIndex|| 0] = {
                type:'value'
            }
        }
        if(!valueAxis[data.yIndex || 0].name){
            valueAxis[data.yIndex || 0].name = data.name || data.valueName;
        }
        
        if(!data.cols || data.cols.length === 0){
            data.cols = [''];
            data.values = [data.values]
        }
        for(var i=0;i<data.cols.length;i++){
            var serie = {
                name:data.cols[i] || data.name || data.valueName,
                type:getSeriesType(chartType,data.yIndex || 0),
                stack:data.stack,
                data:[],
                yAxisIndex:data.yIndex || 0
            }
            for(var j=0;j<data.values[i].length;j++){
                serie.data.push(data.values[i][j])
            }
            option.series.push(serie);
        }
    })

    //处理一下堆积和面积的情况
    option.series.forEach(function(serie,i) {
        // 是否为堆积图
        if(['barStack','barSameStack','barHoriStack','horiSameStack','barHoriSameStack','lineStack','lineAreaStack'].indexOf(chartType) !== -1) {
            option.series[i].stack = option.series[i].stack || 'default_stack';
        }
        // 是否为面积
        if(['lineArea','lineAreaStack'].indexOf(chartType) !== -1) {
            option.series[i].areaStyle = {normal: {}};
        }
    });

    //如果是等高的再处理一下数据
    if(['barSameStack','barHoriSameStack'].indexOf(chartType) !== -1){
        var columnCounts = [];
        option.series.forEach(function(serie){
            serie.data.forEach(function(el,i){
                if(typeof columnCounts[i] === 'undefined'){
                    columnCounts[i] = el; 
                }else{
                    columnCounts[i] += el; 
                }
            })
        })
        option.series.forEach(function(serie){
            serie.data.forEach(function(el,i){
                serie.data[i] = el / columnCounts[i]
            })
        })
    }

    console.log(option)

    return option;
}

function getSeriesType(chartType,yIndex){
    if(chartType === 'barLine'){
        return yIndex === 0 ? 'bar':'line';
    }else if(['bar','barStack','barSameStack','barHori','barHoriStack','barHoriSameStack'].indexOf(chartType) !== -1){
        return 'bar';
    }else{
        return 'line';
    }
}