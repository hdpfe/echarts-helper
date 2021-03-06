var echarts = require('echarts');
var extend = require('extend');


var echartsInstanceExtend = {
    setData:function(data){
        var option = echartsHelper.getOption(extend(this.__opt,{data:data}));
        this.hideLoading();
        this.setOption(option);
    }
}

var echartsHelper = {}


/**
 * return an extended echartsInstance
 * var chart = echartsHelper.create({
 *    dom:document.getElementById('main'),
 *    data:{},                         //{},[] or null, when null is set,not emptyTips will show.     
 *    type:'bar',
 *    resize:true,                     //(Optional)Default true
 *    sort:'none',                     //(Optional)Default none,['none','asc','desc']
 *    sortType:'auto',                 //(Optional)Default auto identify,can be ['date','number','text','number-like']
 *    emptyTips:{                      //(Optional)show empty tips when data is empty.set null to disable empty tips
 *      text:"暂无数据"
 *      textColor:"#000",
 *      maskColor:"rgba(255, 255, 255, 0.8)"
 *    } ,     
 *    theme:'dark',                    //(Optional)Default null
 *    echartsOption:{}                  //(Optional)Default {},will merge to the generate option
 * })
**/
echartsHelper.create = function(opt){

    var defaultOpt = {
        resize:true,
        sort:'none',           
        sortType:'auto',       
        emptyTips:{
            text:'暂无数据',
            textColor:"#aaa",
            textSize:14,
            bgColor:"#eee"
        },   
        echartsOption:{}
    }
    opt = extend({},defaultOpt,opt);

    var domId = opt.dom.id;
    var chart = echarts.init(opt.dom, opt.theme);

    chart.__opt = opt;
    extend(chart,echartsInstanceExtend);
    
    function showEmptyTips(){
        var canvas = document.createElement('canvas');
        var width = opt.dom.clientWidth;
        var height = opt.dom.clientHeight;
        var ctx = canvas.getContext('2d');
        var text = opt.emptyTips.text || '暂无数据';
        var textSize = opt.emptyTips.textSize || 14;
        
        canvas.width = width;
        canvas.height = height;
        if(opt.dom.children[0].children.length > 0){
            for(var i = opt.dom.children[0].children.length - 1;i>=0;i--){
                opt.dom.children[0].removeChild(opt.dom.children[0].children[i]);
            }
        }
        opt.dom.children[0].appendChild(canvas);

        ctx.fillStyle = opt.emptyTips.bgColor || defaultOpt.emptyTips.bgColor;
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = opt.emptyTips.textColor || defaultOpt.emptyTips.textColor;
        ctx.font = (opt.emptyTips.textSize || 14)+ "px";
        var mesure = ctx.measureText(text);
        ctx.fillText(text, (width - mesure.width) / 2, (height - textSize) / 2);
    }

    if(opt.data){
        //empty data
        if((toString.call(opt.data) === '[object Object]' && isObjectEmpty(opt.data))
           || (toString.call(opt.data) === '[object Array]' && opt.data.length === 0)
        ){  
            //show empty tips
            if(opt.emptyTips){
                chart.__empty = true;
                showEmptyTips();
            }
        }else{
            var option = echartsHelper.getOption(opt);
            chart.setOption(option);
        }
    }

    //auto resize
    if(opt.resize){
        chart.__resizeHandler = function(){
            chart.__resizeTid && clearTimeout(chart.__resizeTid);
            chart.__resizeTid = setTimeout(function(){
                if(document.getElementById(domId)){
                    chart.resize();
                    if(chart.__empty){
                        showEmptyTips();
                    }
                }else{
                    window.removeEventListener('resize',chart.__resizeHandler);
                }
            },200)
        }
        window.addEventListener('resize',chart.__resizeHandler);
    }

    return chart;
}

/**
 * return echarts formatted option
 */
echartsHelper.getOption = function(opt){
    if(!ChartTypeMap[opt.type]){
        throw new Error('Unsupport chart type : '+opt.type);
    }
    var formatter = require('./formatter/'+ChartTypeMap[opt.type])
    return extend(formatter.getOption(opt),opt.echartsOption);
}

var ChartTypeMap = {
    "bar":"barline",
    "barStack":"barline",
    "barSameStack":"barline",
    "barHori":"barline",
    "barHoriStack":"barline",
    "barHoriSameStack":"barline",
    "line":"barline",
    "lineArea":"barline",
    "lineStack":"barline",
    "lineAreaStack":"barline",
    "barLine":"barline",
    "pie":"pie",
    "circle":"pie",
    "radar":"radar"
}

module.exports = echartsHelper;

function isObjectEmpty(object) {
    for (var i in object) {
        if (object.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}