export default {  
    legend: {
        data: (function (){
            var list = [];
            for (var i = 1; i <=19; i++) {
                list.push(i + 2000 + '');
            }
            return list;
        })()
    },      
    series : (function (){
        var series = [];
        for (var i = 1; i <= 19; i++) {
            series.push({
                name:'浏览器',
                type: 'radar',
                symbol: 'none',
                lineStyle: {
                    width: 1
                },
                emphasis: {
                    areaStyle: {
                        color: 'rgba(0,250,0,0.3)'
                    }
                },
                data:[
                  {
                    value:[
                        (40 - i) * 10,
                        (38 - i) * 4 + 60,
                        i * 5 + 10,
                        i * 9,
                        i * i /2
                    ],
                    name: i + 2000 + ''
                  }
                ]
            });
        }
        return series;
    })()   
 }