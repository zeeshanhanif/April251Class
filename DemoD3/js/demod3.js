/**
 * Created with JetBrains WebStorm.
 * User: zeeshan
 * Date: 5/19/13
 * Time: 5:36 PM
 * To change this template use File | Settings | File Templates.
 */

(function (){

    d3.select("#canvas")
        .append("svg")
        .attr("width","500px")
        .attr("height","500px")
        .append("rect")
        .attr("id","rec")
        .attr("x",20)
        .attr("y",20)
        .attr("width",200)
        .attr("height",150)
        .attr("fill","red");

    var t = d3.select("#rec").transition().duration(1500)
        .attr(
        {
         x:100,
         y:100,
         fill:"green"
        });




})();
