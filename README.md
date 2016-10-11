# Echarts3 secondary encapsulation to support a unified data structure and encapsulates commonly used functions

## Install

```html
<script src="echarts.min.js"></script>
<script src="hcharts.min.js"></script>
```

Or

```sh
npm install echarts hcharts
```

```js
var echarts = require('echarts');
var hcharts = require('hcharts');
```

## Usage
```js
//return an hchartsInstance(extends from echartsInstance)
var chart = hcharts.create({
    dom:document.getElementById('main'),
    data:{},               //{},[] or null, when null is set,not emptyTips will show.     
    type:'bar',
    resize:true,           //(Optional)Default true
    sort:'none',           //(Optional)Default none,['asc','desc','']
    sortType:'auto',       //(Optional)Default auto identify,can be ['date','number','text','number-like']
    emptyTips:true,        //(Optional)Default true,show empty tips when data is empty;
    emptyText:'暂无数据',   //(Optional)empty tips 
    theme:'dark',          //(Optional)Default null
    echartsOption:{}       //(Optional)Default {},will merge to the generate option
})

//use theme
echarts.registerTheme('dark',{})

//show loading
chart.showLoading();
var data = yield getData();
chart.setData(data);  //show data and auto hide the loading tips

//get echarts option
var option = hcharts.getOption({
    data:{},
    type:'bar'
})
```

## Data Structure
```js
var data1 = {
    "rows":["row1","row2"],
    "cols":["col1","col2"],       //can be empty
    "cells":[
        [11,12],
        [21,22]
    ]
}

var data2 = [
    {   
        "name":"series1"
        "yIndex":0,
        "rows":["row1","row2"],
        "cols":[],        
        "cells":[
            [11],
            [21]
        ]
    },
    {   
        "name":"series2"
        "yIndex":1,
        "rows":["row1","row2"],
        "cols":[],        
        "cells":[
            [11],
            [21]
        ]
    }
]
```

## Support Chart Type

```js
bar                    //柱状图
barStack               //堆积柱状图
barSameStack           //等高堆积柱状图
barHori                //条形图
barHoriStack           //堆积条形图
barHoriSameStack       //等高堆积条形图
line                   //折线图
lineArea               //面积图
lineStack              //堆积折线图
lineAreaStack          //堆积面积图
barLine                //柱线图(双y轴)
map                    //地域分布图,会自动识别是省份还是城市显示为分布图还是散点图
pie                    //饼图
circle                 //环形图
radar                  //雷达图
heatmap                //热力图
scatter                //散点图
```