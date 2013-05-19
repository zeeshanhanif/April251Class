/**
 * Created with JetBrains WebStorm.
 * User: zeeshan
 * Date: 5/19/13
 * Time: 5:36 PM
 * To change this template use File | Settings | File Templates.
 */

(function (){

    var canvas = d3.select("#canvas")
        .append("svg")
        .attr("width",window.screen.width+"px")
        .attr("height",window.screen.height+"px");

    drawCircle(100,100,100,"red");
    drawCircle(window.screen.width-100,window.screen.height-100,100,"red");


    function drawCircle(x,y,r,fill){
        canvas.append("circle").attr(
            {
                cx:x,
                cy:y,
                r:r,
                fill:fill
            }
        );
    }

})();


