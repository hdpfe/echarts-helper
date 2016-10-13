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
var data1 = {
    "name":"爱好对比",
    "rowName":"性别",
    "rows":["男","女"],
    "colName":"爱好",
    "cols":["电影","音乐"],       //can be empty
    "valueName":"记录数",
    "stack":null,               //(Optional)Specifies the stack group
    "yIndex":0,                 //(Optional)Specifies the value Axis
    "values":[
        [11,12],   //电影-男,电影-女
        [21,22]    //音乐-男,音乐-女
    ]
}

var data2 = [
    {
        "name":"评论数",
        "rowName":"性别",
        "rows":["男","女"],
        "valueName":"最小值",
        "values":[11,21]
    },
    {
        "valueName":"最大值",
        "values":[110,210]
    },
    {
        "valueName":"平均",
        "values":[59,103]
    },
    {
        "name":"点赞数",
        "yIndex":1,
        "valueName":"最小值",
        "values":[5,10]
    },
    {   
        "yIndex":1,
        "valueName":"最大值",
        "values":[23,24]
    },
    {
        "yIndex":1,
        "valueName":"平均",
        "values":[12,16]
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
pie                    //饼图,嵌套饼图
circle                 //环形图
radar                  //雷达图
heatmap                //热力图
scatter                //散点图
```