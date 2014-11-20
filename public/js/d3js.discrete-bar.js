d3.json('../json/discreteBarData.json', function(data) {
  nv.addGraph(function() {
    var chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })    //Specify the data accessors.
        .y(function(d) { return d.value })
        .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
        .tooltips(false)        //Don't show tooltips
        .showValues(true)       //...instead, show the bar value right on top of each bar.
        .transitionDuration(350)
        ;

    d3.select('#chart1')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
});
