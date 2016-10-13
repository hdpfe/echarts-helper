/**
 * supports chartType:
 * pie                    //饼图,嵌套饼图
 * circle                 //环形图
 */
exports.getOption = function(opt){
    var chartType = opt.type;
    var dataArr = opt.data;
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series:[]
    }

    if(toString.call(dataArr) !== '[object Array]'){
        dataArr = [dataArr];
    }

    dataArr.forEach(function(data,index){
        var radius;
        var itemStyle;
        if(chartType === 'circle' || index > 0){
            radius = ['50%','65%']
        }else if(dataArr.length > 1 && index === 0){
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
            name:data.name || data.valueName,
            type:'pie',
            selectedMode:index === 0?'single':undefined,
            radius:radius,
            itemStyle:itemStyle,
            data:[]
        }

        if(!data.cols || data.cols.length === 0){
            data.cols = ['']
            data.values = [data.values];
        }
        for(var i=0;i<data.cols.length;i++){
            for(var j=0;j<data.values[i].length;j++){
                serie.data.push({
                    value:data.values[i][j],
                    name:data.rows[j]
                })
            }
        }
        
        option.series.push(serie);
    })

    return option;
}