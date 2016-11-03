/**
 * supports chartType:
 * radar                    //雷达图
 */
exports.getOption = function(opt){
    var data = opt.data;
    var option = {
        radar: {
            indicator:[]
        },
        tooltip:{},
        series:[]
    }


    var indicatorMax = [];

    data.series.forEach(function(se,index){
        var serie = {
            type:'radar',
            name:se.dataName || se.name,
            data:[]
        }

        for(var i=0;i<se.data.length;i++){
            indicatorMax[i] = Math.max(indicatorMax[i] || 0 ,se.data[i])

           
        }

         serie.data.push({
            value:se.data,
            name:se.dataName
        })
        
        option.series.push(serie);
    })


    //set indicator
    for(var i=0;i<data.category.data.length;i++){
        option.radar.indicator.push({
            name:data.category.data[i],
            max:parseInt(indicatorMax[i] / 9 * 10,10)
        })
    }

    return option;
}