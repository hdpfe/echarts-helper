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
    var data = opt.data;
    var option = {
        tooltip:{
            trigger:'axis'
        },
        xAxis:null,
        yAxis:null,
        series:[]
    }

    var categoryAxis = [
        {
            type : 'category',
            name:data.category.name,
            data:data.category.data,
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

    data.series.forEach(function(se,index){
        
        if(!valueAxis[se.axisIndex|| 0]){
            valueAxis[se.axisIndex|| 0] = {
                type:'value'
            }
        }
        if(!valueAxis[se.axisIndex || 0].name){
            valueAxis[se.axisIndex || 0].name = se.axisName;
        }
        
        var serie = {
            name:se.dataName || se.name,
            type:getSeriesType(chartType,se.axisIndex || 0),
            stack:se.stack,
            data:se.data,
            yAxisIndex:se.axisIndex || 0
        }
   
        option.series.push(serie);
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