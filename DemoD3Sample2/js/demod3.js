
var dataSet = [5,10,15,20,25,30];

var svg = d3.select("#canvas")
    .append("svg")
    .attr("width","1000px")
    .attr("height","400px");

svg.selectAll("circle")
    .data(dataSet)
    .enter()
    .append("circle")
    .attr({
       cx:function (d,i){
           return d*15;
       },
       cy:"50",
       r:"30",
       fill:"red"
    });



