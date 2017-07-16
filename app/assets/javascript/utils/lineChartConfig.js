export function getLineChartConfig (seriesData, graphHeight) {
    return {
        chart: {
            height: graphHeight
        },
        title: {
            text: ''
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                pointStart: 1,
                marker: {
                    enabled: false
                }
            }
        },
        series: seriesData
    }
};
