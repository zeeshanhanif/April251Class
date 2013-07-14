(function () {

    function init() {
        //alert("The device is ready!");
        draw();
    }

    function draw() {
        var svg = d3.select("body")
                    .append("svg")
                    .attr({
                        width: "100%",
                        height: "100%"
                    });
        svg.append("rect")
            .attr({
                x: 50,
                y: 50,
                width: 100,
                height: 100,
                fill: "red"
            });
    }

    window.app = window.app ||  {};
    app.init = init;
    
})();