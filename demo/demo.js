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
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"电影",
                "data":[11,21]
            },
            {
                "dataName":"音乐",
                "data":[21,22]
            }
        ]
    })
},2000)

//==============bar====================
var chart2 = echartsHelper.create({
    dom:document.getElementById('chart-2'),
    type:'bar',
    theme: 'vintage',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"记录数",
                "data":[11,21]
            }
        ]
    }
})

//line
var chart3 = echartsHelper.create({
    dom:document.getElementById('chart-3'),
    type:'line',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "axisName":"评论数",
                "axisIndex":0,                 //(Optional)default 0
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
            }
        ]
    }
})

//barline
var chart4 = echartsHelper.create({
    dom:document.getElementById('chart-4'),
    type:'barLine',
    data:{
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
                "name":"点赞数",
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
})


//barStack
var chart5 = echartsHelper.create({
    dom:document.getElementById('chart-5'),
    type:'barStack',
    data:{
        "category":{
            "data":['周一','周二','周三','周四','周五','周六','周日']
        },
        "series":[
            {
                "dataName":"直接访问",
                "data":[320, 332, 301, 334, 390, 330, 320]
            },
            {
                "dataName":"邮件营销",
                "stack":"广告",
                "data":[120, 132, 101, 134, 90, 230, 210]
            },
            {
                "dataName":"联盟广告",
                "stack":"广告",
                "data":[120, 132, 101, 134, 90, 230, 210]
            },
            {
                "dataName":"搜索引擎",
                "data":[862, 1018, 964, 1026, 1679, 1600, 1570]
            },
            {
                "dataName":"百度",
                "stack":"搜索引擎",
                "data":[620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
                "dataName":"谷歌",
                "stack":"搜索引擎",
                "data":[120, 132, 101, 134, 290, 230, 220]
            },
            {
                "dataName":"必应",
                "stack":"搜索引擎",
                "data":[60, 72, 71, 74, 190, 130, 110]
            },
            {
                "dataName":"其他",
                "stack":"搜索引擎",
                "data":[62, 82, 91, 84, 109, 110, 120]
            }
        ]
    }
})


//==============barSameStack====================
var chart6 = echartsHelper.create({
    dom:document.getElementById('chart-6'),
    type:'barSameStack',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"电影",
                "data":[11,21]
            },
            {
                "dataName":"音乐",
                "data":[21,22]
            }
        ]
    }
})

//==============barHori====================
var chart7 = echartsHelper.create({
    dom:document.getElementById('chart-7'),
    type:'barHori',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"电影",
                "data":[11,21]
            },
            {
                "dataName":"音乐",
                "data":[21,22]
            }
        ]
    }
})

//==============barHoriStack====================
var chart8 = echartsHelper.create({
    dom:document.getElementById('chart-8'),
    type:'barHoriStack',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"电影",
                "data":[11,21]
            },
            {
                "dataName":"音乐",
                "data":[21,22]
            }
        ]
    }
})

//==============barHoriStack====================
var chart9 = echartsHelper.create({
    dom:document.getElementById('chart-9'),
    type:'barHoriSameStack',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"电影",
                "data":[11,21]
            },
            {
                "dataName":"音乐",
                "data":[21,22]
            }
        ]
    }
})

//==============lineArea====================
var chart10 = echartsHelper.create({
    dom:document.getElementById('chart-10'),
    type:'lineArea',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"电影",
                "data":[11,21]
            },
            {
                "dataName":"音乐",
                "data":[21,22]
            }
        ]
    }
})

//==============lineArea====================
var chart11 = echartsHelper.create({
    dom:document.getElementById('chart-11'),
    type:'lineStack',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"电影",
                "data":[11,21]
            },
            {
                "dataName":"音乐",
                "data":[21,22]
            }
        ]
    }
})

//==============lineAreaStack====================
var chart12 = echartsHelper.create({
    dom:document.getElementById('chart-12'),
    type:'lineAreaStack',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"电影",
                "data":[11,21]
            },
            {
                "dataName":"音乐",
                "data":[21,22]
            }
        ]
    }
})

//==============pie====================
var chart13 = echartsHelper.create({
    dom:document.getElementById('chart-13'),
    type:'pie',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"记录数",
                "data":[11,21]
            }
        ]
    }
})

//==============circle====================
var chart14 = echartsHelper.create({
    dom:document.getElementById('chart-14'),
    type:'circle',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"记录数",
                "data":[11,21]
            }
        ]
    }
})

//==============pie(nested)====================
var chart15 = echartsHelper.create({
    dom:document.getElementById('chart-15'),
    type:'pie',
    data:{
        "category":{
            "name":"性别",
            "data":["男","女"]
        },
        "series":[
            {
                "dataName":"电影",
                "data":[11,21]
            },
            {
                "dataName":"音乐",
                "data":[21,22]
            }
        ]
    }
})

//==============radar====================
var chart15 = echartsHelper.create({
    dom:document.getElementById('chart-16'),
    type:'radar',
    data:{
        "category":{
            "data":["销售","管理","信息技术","客服","研发","市场"]
        },
        "series":[
            {
                "dataName":"预算",
                "data":[4300, 10000, 28000, 35000, 50000, 19000]
            },
            {
                "dataName":"开销",
                "data":[5000, 14000, 28000, 31000, 42000, 21000]
            }
        ]
    }
})