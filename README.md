# Echarts3 secondary encapsulation to support a unified data structure and encapsulates commonly used functions

## Install

```html
<script src="echarts.min.js"></script>
<script src="echarts-helper.min.js"></script>
```

Or

```sh
npm install echarts echarts-helper
```

```js
var echarts = require('echarts');
var echartsHelper = require('echarts-helper');
```

## Demo
[https://hdpfe.github.io/echarts-helper/](https://hdpfe.github.io/echarts-helper/)

## Usage
```js
//return an hchartsInstance(extends from echartsInstance)
var chart = echartsHelper.create({
    dom:document.getElementById('main'),
    data:{},               //{},[] or null, when null is set,not emptyTips will show.     
    type:'bar',
    resize:true,           //(Optional)Default true
    sort:'none',           //(Optional)Default none,['none','asc','desc']
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
var option = echartsHelper.getOption({
    data:{},
    type:'bar'
})
```

## Data Structure
```js

var data = {
    "category":{
        "name":"性别",
        "data":["男","女"]
    },
    "series":[
        {
            "axisName":"评论数",
            "axisIndex":0,                 //(Optional)default 0
            "stack":null,                  //(Optional)Specifies the stack group
            "dataName":"最小值",
            "data":[11,21]
        },
        {
            "dataName":"最大值",
            "data":[110,210]
        },
        {
            "dataName":"平均",
            "data":[59,103]
        },
        {
            "axisName":"点赞数",
            "axisIndex":1,
            "dataName":"最小值",
            "data":[5,10]
        },
        {   
            "axisIndex":1,
            "dataName":"最大值",
            "data":[23,24]
        },
        {
            "axisIndex":1,
            "dataName":"平均",
            "data":[12,16]
        }
    ]
}
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
pie                    //饼图,嵌套饼图
circle                 //环形图
radar                  //雷达图
```