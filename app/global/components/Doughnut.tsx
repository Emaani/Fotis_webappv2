import { useEffect } from 'react';
const  Highcharts = require('highcharts');  
// require('highcharts/modules/exporting')(Highcharts); 

export type TypeDoughnutData ={
    name:string,
    y: number,
    color:string
}
type PropsType ={
    data: TypeDoughnutData[],
    title:string
}
const Doughnut =({data,title}:PropsType)=>{

    useEffect(()=>{
        console.log("8a")
        if (data.length>0) {
            createChart();
        }
    },[data]);

    const createChart =()=>{
        new Highcharts.Chart({
            chart: {
                renderTo: "doughnut_chart",
                type: 'pie',
            },
            credits: {
                enabled: false,
           },
            title: {
                text: title,
                align: 'center',
                verticalAlign: 'middle',
                y: -10
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            legend:{
                itemStyle:{
                    fontWeight:"500"
                }
            },
            
            series: [{
                name: '',
                data:  data,
              //   color:collectedData.color,
                innerSize: '88%',
                showInLegend:true,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    }

    return (
        <div id='doughnut_chart'></div>
    );
}

export default Doughnut;