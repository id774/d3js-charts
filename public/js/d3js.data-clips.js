var format = d3.time.format("%Y-%m-%d"),
  margin = {top: 20, right: 20, bottom: 30, left: 40},
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;
 
var force = d3.layout.force()
  .gravity(0.1)
  .charge(function(d, i) { return d.amount * -1; })
  .size([width, height]);
   
var color = d3.scale.category10();
var svg = d3.select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.json('../json/data-clips.json', function(error, data) {
    console.log(data)
    data.values.forEach(function(d) {
      d.date = format.parse(String(d[0]).substring(0, 10));
      d.amount = d[1];
      console.log("Spent $" + d.amount + " on " + d.date);
    });
  force
    .nodes(data.values)
    .start();

  var node = svg.selectAll("g.node")
    .data(data.values)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(force.drag);
  node.append("circle")
    .attr("r", function(d) { return d.amount * .1; })
    .attr("opacity", .67)
    .attr("fill", function(d){
      if (d.amount <= 800) {
        return "#27ae60" // Green
      } else if (d.amount > 800 && d.amount <= 900) {
        return "#f1c40f" // Yellow
      } else if (d.amount > 900 && d.amount <= 1000) {
        return "#e67e22" // Orange
      }
    });
  node.append("text")
    .text(function(d){ return d.date.toString().substring(4,7); })
    .attr('fill', '#fff')
    .attr('font-size', 24)
    .attr('dx', -16)
    .attr('dy', -5);
  node.append("text")
    .text(function(d){ return '$' + d.amount; })
    .attr('fill', '#fff')
    .attr('dx', -25)
    .attr('dy', 15);
  force.on("tick", function() {
    node
    .attr('transform', function(d) { return 'translate('+ Math.max(20, Math.min(width-20, d.x)) + ',' + Math.max(20, Math.min(height-20, d.y)) + ')';     });
  });
})

