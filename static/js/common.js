/*
 **功能:图表
 **作者:loho
 **日期:2017-04-07
 */
$(function () {

    var dates = '';
    var s = '';
    var happy = [];
    var study = [];
    for (var n = 0; n < 7; n++) {
        var date = new Date();
        var year, month, day;
        date.setDate(date.getDate() - n);
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        if (n == 0) {
            s += year + '-' + (month < 10 ? ('0' + month) : month) + '-' + (day < 10 ? ('0' + day) : day);
        } else {
            s += ',' + year + '-' + (month < 10 ? ('0' + month) : month) + '-' + (day < 10 ? ('0' + day) : day);
        }
    }
    s = s.split(",").reverse();
    $('.next').val(s[7 - 1]);
    $('.pav').val(s[0]);

    $.ajax({
        url: 'data.json',
        async: false,
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            for (var j = 0; j < s.length; j++) {
                study.push(data[s[j]]);
                happy.push(24 - data[s[j]]);
            }
        }
    })

    setOption("echarts-3", {
        // title: {
        //     text: '折线图堆叠'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['学习时长', '快乐时长']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: s
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '学习时长',
            type: 'line',
            // stack: '花费',
            data: study
        },
        {
            name: '快乐时长',
            type: 'line',
            // stack: '花费',
            data: happy
        },
        ]
    });
});


/*
 **功能:柱状、折线图
 **参数1：元素ID
 **参数2：配置项设置
 */
function setOption(ident, opt) {
    //基于准备好的dom,初始化echarts实例
    let myChart = echarts.init($('#' + ident)[0]);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(opt);
}
/*
 **功能:南丁格尔图
 **参数1：元素ID
 **参数2：配置项设置
 */
function setOption(ident, opt) {
    //基于准备好的dom,初始化echarts实例
    let myChart = echarts.init($('#' + ident)[0]);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(opt);
}
