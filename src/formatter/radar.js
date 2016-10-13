/**
 * supports chartType:
 * pie                    //饼图,嵌套饼图
 * circle                 //环形图
 */
exports.getOption = function(opt){
    var chartType = opt.type;
    var dataArr = opt.data;
    var option = {
        radar: {
            indicator:[]
        },
        series:[]
    }

    if(toString.call(dataArr) !== '[object Array]'){
        dataArr = [dataArr];
    }

    var indicatorMax = [];

    dataArr.forEach(function(data,index){
        var serie = {
            type:'radar',
            name:data.name || data.valueName,
            data:[]
        }

        if(!data.cols || data.cols.length === 0){
            data.cols = ['']
            data.values = [data.values];
        }
        
        for(var i=0;i<data.cols.length;i++){
            for(var j=0;j<data.values[i].length;j++){
                indicatorMax[j] = Math.max(indicatorMax[j] || 0 ,data.values[i][j])
            }
            serie.data.push({
                value:data.values[i],
                name:data.cols[i] || data.name || data.valueName
            })
        }
        
        option.series.push(serie);
    })


    //set indicator
    for(var i=0;i<dataArr[0].rows.length;i++){
        option.radar.indicator.push({
            name:dataArr[0].rows[i],
            max:indicatorMax[i] / 9 * 10
        })
    }

    console.log(option)

    return option;
}