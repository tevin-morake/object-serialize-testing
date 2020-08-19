var state = function state() {
    //This is a 6x1 chart dashboard
    var eContainer1 = document.querySelector('#chart1');
    var columnsArr = [];
    params.columnApi.getAllGridColumns().forEach(col => {
        columnsArr.push(col.getColId());
    });
    var params1 = {
        cellRange: {
            //    rowStartIndex: 0,
            //     rowEndIndex: 4,
            columns: columnsArr,//['BrandTotal', 'Percent']
        },
        /* Below are options for different chart types that you can create
          'groupedColumn', 'stackedColumn', 'normalizedColumn', 'groupedBar',
          'stackedBar', 'normalizedBar', 'line', 'scatter', 'bubble', 'pie',
          'doughnut', 'area', 'stackedArea', 'normalizedArea' 
      */
        chartType: 'groupedBar',
        chartContainer: eContainer1,
        processChartOptions: function (params) {
            params.options.legend.enabled = false;
            return params.options;
            /*  Following code is used for legend styling. By default we disable the legend
            params.options.seriesDefaults.tooltip.renderer = function (params) {
                  var titleStyle = params.color ? ' style="color: white; background-color:' + params.color + '"' : '';
                  var title = params.title ? '<div class="ag-chart-tooltip-title"' + titleStyle + '>' + params.title + '</div>' : '';
                      var value = "";
                      if(params.datum[params.yKey]) value = params.datum[params.yKey].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                  return (
                      title +
                      '<div class="ag-chart-tooltip-content" style="text-align: center">' +
                      value +
                      '</div>'
                  );
              };
              return params.options; */
        },
    };
    //This allows the application to use a reference to the chart
    //to either destroy the chart for recreation or further manipulation
    const chart1Ref = params.api.createRangeChart(params1);
    this.chartRefs.push(chart1Ref);
    var eContainer2 = document.querySelector('#chart2');
    var params2 = {
        cellRange: {
            columns: columnsArr,
        },
        /* Below are options for different chart types that you can create
          'groupedColumn', 'stackedColumn', 'normalizedColumn', 'groupedBar',
          'stackedBar', 'normalizedBar', 'line', 'scatter', 'bubble', 'pie',
          'doughnut', 'area', 'stackedArea', 'normalizedArea' 
      */
        chartType: 'pie',
        chartContainer: eContainer2,
        aggFunc: 'sum',
        processChartOptions: function (params) {
            params.options.legend.enabled = false;
            return params.options;
            /* Following code is used for legend styling. By default we disable the legend
            params.options.legend.position = 'bottom';
            params.options.padding = {
                top: 20,
                left: 10,
                bottom: 30,
                right: 10,
            };
            
             params.options.seriesDefaults.tooltip.renderer = function (params) {
     
               var titleStyle = params.color ? ' style="color: white; background-color:' + params.color + '"' : '';
                var title = params.title ? '<div class="ag-chart-tooltip-title"' + titleStyle + '>' + params.title + '</div>' : '';
                    var value = "";
                    if(params.datum[params.yKey]) value = params.datum[params.yKey].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                return (
                    title +
                    '<div class="ag-chart-tooltip-content" style="text-align: center">' +
                    value +
                    '</div>'
                );
            };
            return params.options; */
        },
    };
    //This allows the application to use a reference to the chart
    //to either destroy the chart for recreation or further manipulation
    const chart2Ref = params.api.createRangeChart(params2);
    this.chartRefs.push(chart2Ref);
    var eContainer3 = document.querySelector('#chart3');
    var params3 = {
        cellRange: {
            columns: columnsArr,
        },
        /* Below are options for different chart types that you can create
          'groupedColumn', 'stackedColumn', 'normalizedColumn', 'groupedBar',
          'stackedBar', 'normalizedBar', 'line', 'scatter', 'bubble', 'pie',
          'doughnut', 'area', 'stackedArea', 'normalizedArea' 
      */
        chartType: 'pie',
        chartContainer: eContainer3,
        aggFunc: 'sum',
        processChartOptions: function (params) {
            params.options.legend.enabled = false;
            return params.options;
            /* 
            Following code is used for legend styling. By default we disable the legend
            params.options.legend.position = 'bottom';
            params.options.padding = {
                top: 20,
                left: 10,
                bottom: 30,
                right: 10,
            };
            
            params.options.seriesDefaults.tooltip.renderer = function (params) {
     
               var titleStyle = params.color ? ' style="color: white; background-color:' + params.color + '"' : '';
                var title = params.title ? '<div class="ag-chart-tooltip-title"' + titleStyle + '>' + params.title + '</div>' : '';
                    var value = "";
                    if(params.datum[params.yKey]) value = params.datum[params.yKey].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                return (
                    title +
                    '<div class="ag-chart-tooltip-content" style="text-align: center">' +
                    value +
                    '</div>'
                );
            };
            return params.options; */
        },
    };
    //This allows the application to use a reference to the chart
    //to either destroy the chart for recreation or further manipulation
    const chart3Ref = params.api.createRangeChart(params3);
    this.chartRefs.push(chart3Ref);
    //
    var eContainer4 = document.querySelector('#chart4');
    var params4 = {
        cellRange: {
            columns: columnsArr,
        },
        /* Below are options for different chart types that you can create
          'groupedColumn', 'stackedColumn', 'normalizedColumn', 'groupedBar',
          'stackedBar', 'normalizedBar', 'line', 'scatter', 'bubble', 'pie',
          'doughnut', 'area', 'stackedArea', 'normalizedArea' 
      */
        chartType: 'pie',
        chartContainer: eContainer4,
        aggFunc: 'sum',
        processChartOptions: function (params) {
            params.options.legend.enabled = false;
            return params.options;
            /*
            Following code is used for legend styling. By default we disable the legend
            params.options.legend.position = 'bottom';
            params.options.padding = {
                top: 20,
                left: 10,
                bottom: 30,
                right: 10,
            };
            
             params.options.seriesDefaults.tooltip.renderer = function (params) {
     
               var titleStyle = params.color ? ' style="color: white; background-color:' + params.color + '"' : '';
                var title = params.title ? '<div class="ag-chart-tooltip-title"' + titleStyle + '>' + params.title + '</div>' : '';
                    var value = "";
                    if(params.datum[params.yKey]) value = params.datum[params.yKey].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                return (
                    title +
                    '<div class="ag-chart-tooltip-content" style="text-align: center">' +
                    value +
                    '</div>'
                );
            };
            return params.options; */
        },
    };
    //This allows the application to use a reference to the chart
    //to either destroy the chart for recreation or further manipulation
    const chart4Ref = params.api.createRangeChart(params4);
    this.chartRefs.push(chart4Ref);
    //
    var eContainer5 = document.querySelector('#chart5');
    var params5 = {
        cellRange: {
            columns: columnsArr,
        },
        chartType: 'stackedBar',
        chartContainer: eContainer5,
        aggFunc: 'sum',
        processChartOptions: function (params) {
            params.options.legend.enabled = false;
            return params.options;
            /* Following code is used for legend styling. By default we disable the legend
            params.options.legend.position = 'bottom';
            params.options.padding = {
                top: 20,
                left: 10,
                bottom: 30,
                right: 10,
            };
            
             params.options.seriesDefaults.tooltip.renderer = function (params) {
     
               var titleStyle = params.color ? ' style="color: white; background-color:' + params.color + '"' : '';
                var title = params.title ? '<div class="ag-chart-tooltip-title"' + titleStyle + '>' + params.title + '</div>' : '';
                    var value = "";
                    if(params.datum[params.yKey]) value = params.datum[params.yKey].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                return (
                    title +
                    '<div class="ag-chart-tooltip-content" style="text-align: center">' +
                    value +
                    '</div>'
                );
            };
            return params.options; */
        },
    };
    //This allows the application to use a reference to the chart
    //to either destroy the chart for recreation or further manipulation
    const chart5Ref = params.api.createRangeChart(params5);
    this.chartRefs.push(chart5Ref);
    //
    var eContainer6 = document.querySelector('#chart6');
    var params6 = {
        cellRange: {
            columns: columnsArr,
        },
        chartType: 'bubble',
        chartContainer: eContainer6,
        aggFunc: 'sum',
        processChartOptions: function (params) {
            params.options.legend.enabled = false;
            return params.options;
            /* Following code is used for legend styling. By default we disable the legend
            params.options.legend.position = 'bottom';
            params.options.padding = {
                top: 20,
                left: 10,
                bottom: 30,
                right: 10,
            };
            
             params.options.seriesDefaults.tooltip.renderer = function (params) {
     
               var titleStyle = params.color ? ' style="color: white; background-color:' + params.color + '"' : '';
                var title = params.title ? '<div class="ag-chart-tooltip-title"' + titleStyle + '>' + params.title + '</div>' : '';
                    var value = "";
                    if(params.datum[params.yKey]) value = params.datum[params.yKey].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                return (
                    title +
                    '<div class="ag-chart-tooltip-content" style="text-align: center">' +
                    value +
                    '</div>'
                );
            };
            return params.options; */
        }
};
//This allows the application to use a reference to the chart
//to either destroy the chart for recreation or further manipulation
const chart6Ref = params.api.createRangeChart(params6);
this.chartRefs.push(chart6Ref);

}