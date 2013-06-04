
(function (){

  var canvas = d3.select("#canvas")
      .append("svg")
      .attr("width",window.screen.width+"px")
        .attr("height",window.screen.height+"px");
/*
  canvas.append("rect")
      .attr({
          x:100,
          y:100,
          width:"200px",
          height:"200px",
          fill:"red"
      });
    canvas.append("circle")
        .attr({
            cx: 400,
            cy: 100,
            r: 100,
            fill: "blue"
            });
*/
    var dataset = [10000,20000,30000,40000,50000];
    var color = d3.scale.category20();

    var scale = d3.scale.linear()
        .domain([d3.min(dataset),d3.max(dataset)])
        .range([50,200]);

    var axis = d3.svg.axis()
        .scale(scale)
        .orient("bottom");


    canvas.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr({
            x:function (d,i){
                return (30*i);
            },
            y:function (d,i){
                return 600-scale(d);
            },
            width:25,
            height:function (d,i){
                return scale(d)+"px";
            }
        })
        .attr("fill",function (d,i){
            return color(i);
        });


    canvas.append("g")
        .attr("class","axis")
        .call(axis);

})();


