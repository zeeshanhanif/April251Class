
var dataSet = [5,10,15,20,25,30];

var color = d3.scale.category20();

var svg = d3.select("#canvas")
    .append("svg")
    .attr("width","1000px")
    .attr("height","400px");


svg.selectAll("rect")
    .data(dataSet)
    .enter()
    .append("rect")
    .attr({
        x:function (d,i){
            return (i+1)*30;
        },
        y:function (d,i){
            return 100-(d*3);
        },
        width: 20,
        height: function (d,i){
            return d*3;
        },
        fill:function (d,i){
            return color(i);
        }

    });





