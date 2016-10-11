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
    data:[],               //[] or null, when null is set,not emptyTips will show     
    type:'bar',
    resize:true,           //(Optional)Default true
    sort:'none',           //(Optional)Default none,['asc','desc','']
    sortType:'auto',       //(Optional)Default auto identify,can be ['date','number','text','number-like']
    emptyTips:true,        //(Optional)Default true,show empty tips when data is empty;
    emptyText:'暂无数据',   //(Optional)empty tips 
    theme:'dark',          //(Optional)Default null
    echartsOption:{}       //(Optional)Default {}
})

chart.showLoading();
var data = yield getData();
chart.setData(data);  //auto hide the loading tips
```