/**
 * supports chartType:
 * pie                    //饼图,嵌套饼图
 * circle                 //环形图
 */
exports.getOption = function(opt){
    var chartType = opt.type;
    var data = opt.data;
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series:[]
    }

    data.series.forEach(function(se,index){
        var radius;
        var itemStyle;
        if(chartType === 'circle' || index > 0){
            radius = ['50%','65%']
        }else if(data.series.length > 1 && index === 0){
            radius = [0,'35%']
            itemStyle = {
                normal: {
                    label: {
                        position: 'inner'
                    }
                }
            }
        }else{
            radius = [0,'65%']
        }

        var serie = {
            name:se.dataName || se.name,
            type:'pie',
            selectedMode:index === 0?'single':undefined,
            radius:radius,
            itemStyle:itemStyle,
            data:[]
        }

        for(var j=0;j<data.category.data.length;j++){
            serie.data.push({
                value:se.data[j],
                name:data.category.data[j]
            })
        }
        
        option.series.push(serie);
    })

    return option;
}