/*
d3.select("body")
    .append("p")
    .text("Fast 6");
*/
var dataSet = [5,10,15,25,30];

d3.select("body")
    .selectAll("p")
    .data(dataSet)
    .enter()
    .append("p")
    .text(function (d,i){
        return "This is the number ";
    })
    .append("span")
    .text(function (d){
        return d;
    })
    .style("color",function (d,i){
        if(i<2){
            return "blue";
        }
        return "red";
    });
