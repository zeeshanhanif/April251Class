
(function (){

  var canvas = d3.select("#canvas")
      .append("svg")
      .attr("width",window.screen.width+"px")
        .attr("height",window.screen.height+"px");

    var color = d3.scale.category20();
    var dataset = [ 5, 10, 20, 45, 6, 25 ];
    var pie = d3.layout.pie();
    //var a = pie(dataset);

    var width = 300;
    var height = 300;
    var outerRadius = width/2;
    var innerRadius = 0;
    var arc = d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);



    var arcs = canvas.selectAll("g.arc")
        .data(pie(dataset))
        .enter()
        .append("g")
        .attr("class","arc")
        .attr("transform","translate("+outerRadius+","+outerRadius+")")

    arcs.append("path")
        .attr("fill",function (d,i){
            return color(i);
        })
        .attr("d",arc);

    arcs.append("text")
        .attr("transform", function(d) {
            return "translate ("+arc.centroid(d)+")";
        })
        .attr("text-anchor", "middle")
        .text(function (d){
            return d.value;
        });


})();


