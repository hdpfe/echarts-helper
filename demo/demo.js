//========empty tips===========
var chart0 = echartsHelper.create({
    dom:document.getElementById('chart-0'),
    data:[]
})

//===========loadding===============
var chart1 = echartsHelper.create({
    dom:document.getElementById('chart-1'),
    type:'bar'
})
chart1.showLoading();
setTimeout(function(){
    chart1.setData({
        "rowName":"性别",
        "rows":["男","女"],
        "colName":"爱好",
        "cols":["电影","音乐"],       //can be empty
        "valueName":"记录数",
        "values":[
            [11,12],   //电影-男,电影-女
            [21,22]    //音乐-男,音乐-女
        ]
    })
},1000)

//==============bar====================
var chart2 = echartsHelper.create({
    dom:document.getElementById('chart-2'),
    type:'bar',
    data:{
        "name":"性别分布统计",
        "rowName":"性别",
        "rows":["男","女"],
        "valueName":"记录数",
        "values":[11,23]
    }
})

//line
var chart3 = echartsHelper.create({
    dom:document.getElementById('chart-3'),
    type:'line',
    data:[
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
        }
    ]
})

//barline
var chart4 = echartsHelper.create({
    dom:document.getElementById('chart-4'),
    type:'barLine',
    data:[
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
})


//barStack
var chart5 = echartsHelper.create({
    dom:document.getElementById('chart-5'),
    type:'barStack',
    data:[
        {
            "name":"直接访问",
            "rows":['周一','周二','周三','周四','周五','周六','周日'],
            "values":[320, 332, 301, 334, 390, 330, 320]
        },
        {
            "valueName":"邮件营销",
            "stack":"广告",
            "values":[120, 132, 101, 134, 90, 230, 210]
        },
        {
            "valueName":"联盟广告",
            "stack":"广告",
            "values":[120, 132, 101, 134, 90, 230, 210]
        },
        {
            "valueName":"搜索引擎",
            "values":[862, 1018, 964, 1026, 1679, 1600, 1570]
        },
        {
            "valueName":"百度",
            "stack":"搜索引擎",
            "values":[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            "valueName":"谷歌",
            "stack":"搜索引擎",
            "values":[120, 132, 101, 134, 290, 230, 220]
        },
        {
            "valueName":"必应",
            "stack":"搜索引擎",
            "values":[60, 72, 71, 74, 190, 130, 110]
        },
        {
            "valueName":"其他",
            "stack":"搜索引擎",
            "values":[62, 82, 91, 84, 109, 110, 120]
        }
    ]
})


//==============barSameStack====================
var chart6 = echartsHelper.create({
    dom:document.getElementById('chart-6'),
    type:'barSameStack',
    data:{
        "rowName":"性别",
        "rows":["男","女"],
        "colName":"爱好",
        "cols":["电影","音乐"],       //can be empty
        "valueName":"记录数",
        "values":[
            [11,12],   //电影-男,电影-女
            [21,22]    //音乐-男,音乐-女
        ]
    }
})

//==============barHori====================
var chart7 = echartsHelper.create({
    dom:document.getElementById('chart-7'),
    type:'barHori',
    data:{
        "rowName":"性别",
        "rows":["男","女"],
        "colName":"爱好",
        "cols":["电影","音乐"],       //can be empty
        "valueName":"记录数",
        "values":[
            [11,12],   //电影-男,电影-女
            [21,22]    //音乐-男,音乐-女
        ]
    }
})

//==============barHoriStack====================
var chart8 = echartsHelper.create({
    dom:document.getElementById('chart-8'),
    type:'barHoriStack',
    data:{
        "rowName":"性别",
        "rows":["男","女"],
        "colName":"爱好",
        "cols":["电影","音乐"],       //can be empty
        "valueName":"记录数",
        "values":[
            [11,12],   //电影-男,电影-女
            [21,22]    //音乐-男,音乐-女
        ]
    }
})

//==============barHoriStack====================
var chart9 = echartsHelper.create({
    dom:document.getElementById('chart-9'),
    type:'barHoriSameStack',
    data:{
        "rowName":"性别",
        "rows":["男","女"],
        "colName":"爱好",
        "cols":["电影","音乐"],       //can be empty
        "valueName":"记录数",
        "values":[
            [11,12],   //电影-男,电影-女
            [21,22]    //音乐-男,音乐-女
        ]
    }
})

//==============lineArea====================
var chart10 = echartsHelper.create({
    dom:document.getElementById('chart-10'),
    type:'lineArea',
    data:{
        "rowName":"性别",
        "rows":["男","女"],
        "colName":"爱好",
        "cols":["电影","音乐"],       //can be empty
        "valueName":"记录数",
        "values":[
            [11,12],   //电影-男,电影-女
            [5,22]    //音乐-男,音乐-女
        ]
    }
})

//==============lineArea====================
var chart11 = echartsHelper.create({
    dom:document.getElementById('chart-11'),
    type:'lineStack',
    data:{
        "rowName":"性别",
        "rows":["男","女"],
        "colName":"爱好",
        "cols":["电影","音乐"],       //can be empty
        "valueName":"记录数",
        "values":[
            [11,12],   //电影-男,电影-女
            [5,22]    //音乐-男,音乐-女
        ]
    }
})

//==============lineAreaStack====================
var chart12 = echartsHelper.create({
    dom:document.getElementById('chart-12'),
    type:'lineAreaStack',
    data:{
        "rowName":"性别",
        "rows":["男","女"],
        "colName":"爱好",
        "cols":["电影","音乐"],       //can be empty
        "valueName":"记录数",
        "values":[
            [11,12],   //电影-男,电影-女
            [5,22]    //音乐-男,音乐-女
        ]
    }
})