(function () {

    function init() {
        navigator.notification.alert("The device is ready!");

        //drawGroundComplete();
        //draw();
        accessFileSystem();
    }


    function draw() {
        var svg = d3.select("body")
                   .append("svg")
                   .attr({
                       id: "mainSVG",
                       "width": 200,
                       "height": 200
                   });

        svg.append("rect")
            .attr({
                "width": 200,
                "height": 200,
                "x" : 0,
                "y": 0,
                "fill" : "red"
            });
    }

    function accessFileSystem() {
        window.requestFileSystem(LocalFileSystem.TEMPORARY, 1024*100, onSuccessFunction, onErrorFunction);
    }

    function onSuccessFunction(fs) {
        console.log(fs);
        console.log("success");
        onGetFileSystemSuccess(fs);
        fs.root.getFile("sample.txt", { create: true},
processEntry, onFileError);

    }

    function processEntry(theEntry) {
        var fi = "";
        fi += '<p><b>Name</b>: ' + theEntry.name + '</p>';
        fi += '<p><b>Full Path</b>: ' + theEntry.fullPath + '</p>';
        fi += '<p><b>URI</b>: ' + theEntry.toURI() + '</p>';
        if (theEntry.isFile == true) {
            fi += '<p>The entry is a file</p>';
        } else {
            fi += '<p>The entry is a directory</p>';
        }
        //Update the page content with information about the file
        $('#fileInfo').html(fi);
        fileWirter(theEntry);
        //Display the directory entries page
        
    }

    function onFileError() {
    }

    function fileWirter(theFile) {
        theFile.createWriter(onCreateWriterSuccess, onFileError);
    }

    function onCreateWriterSuccess(writer) {
        writer.onwritestart = function (e) {
            console.log("Write start");
        };
        writer.onwriteend = function (e) {
            console.log("Write end");
        };
        writer.onwrite = function (e) {
            console.log("Write completed ");
        };
        writer.onerror = function (e) {
            console.log("Write error: " + e.toString());
        };
        writer.write("File created by Example 18-1: ");
    }


    function onGetFileSystemSuccess(fs) {
        alert("Accessing " + fs.name + " storage (" +
        fs.root.fullPath + ")");
        //Create a directory reader we'll use to list the files in
        //the directory
        var dr = fs.root.createReader();
        // Get a list of all the entries in the directory
        dr.readEntries(onDirReaderSuccess, onFileError);
    }

    function onDirReaderSuccess(dirEntries) {
        var i, fl, len;
        len = dirEntries.length;
        if(len > 0) {
            fl = '<ul >';
            for( i = 0; i < len; i++) {
                if(dirEntries[i].isDirectory == true) {
                    fl += '<li>Directory : ' + dirEntries[i].name + '</li>';
                } else {
                    fl += '<li>File : s' + dirEntries[i].name + '</li>';
                }
            }
            fl += "</ul>";
        } else {
            fl = "<p>No entries found</p>";
        }
        //Update the page content with our directory list
        $('#dirEntries').html(fl);
        //Display the directory entries page
        //$.mobile.changePage("#dirList", "slide", false, true);
    }

    function onFileError(e) {
        console.log("error " + e);
    }


    function onErrorFunction(e) {
        switch (e.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
                msg = 'QUOTA_EXCEEDED_ERR';
                break;
            case FileError.NOT_FOUND_ERR:
                msg = 'NOT_FOUND_ERR';
                break;
            case FileError.SECURITY_ERR:
                msg = 'SECURITY_ERR';
                break;
            case FileError.INVALID_MODIFICATION_ERR:
                msg = 'INVALID_MODIFICATION_ERR';
                break;
            case FileError.INVALID_STATE_ERR:
                msg = 'INVALID_STATE_ERR';
                break;
            default:
                msg = 'Unknown Error';
                break;
        };

        console.log('Error: ' + msg);
    }

    function drawGroundComplete() {
        var half = {
            width: 400,
            height: 400
        }

        var svg = d3.select("body")
                    .append("svg")
                    .attr({
                        id: "mainSVG",
                        "width": half.width * 2,
                        "height": half.height
                    });


        function drawBaseRect(svg, side) {

            var baseRect = svg.append('g')
                    .attr({
                        x: function () {
                            return half.width * side
                        },
                        y: 0,
                        width: half.width,
                        height: half.height,
                        fill: "green",
                        transform: function () {
                            var xPos = half.width * side;
                            var yPos = 0;
                            return "translate(" + xPos + " " + yPos + ")";
                        }
                    }).style({
                        stroke: "#fff",
                        "stroke-width": "3px"
                    });

            baseRect.append('rect')
                    .attr({
                        x: 0,
                        y: 0,
                        width: half.width,
                        height: half.height,
                        fill: "green"
                    }).style({
                        stroke: "#fff",
                        "stroke-width": "3px"
                    });

            return baseRect;

        }

        var baseRect0 = drawBaseRect(svg, 0);
        var baseRect1 = drawBaseRect(svg, 1);


        function drawCenterArc(baseRect, side) {

            //side = side==1 ? 1-1 : 1-0;
            side = 1 - side;

            var radius = half.width / 5;

            var arc = d3.svg.arc()
                    .innerRadius(0)
                    .outerRadius(radius)
                    .startAngle(0 + (side * 3.14)) //converting from degs to radians
                    .endAngle(3.14 + (side * 3.14)) //just radians

            baseRect.append("path")
                    .attr({
                        d: arc,
                        transform: function () {
                            var xPos = side * (half.width);
                            var yPos = half.height / 2;
                            return "translate(" + xPos + "," + yPos + ")";
                        }
                    });
        }

        drawCenterArc(baseRect0, 0);
        drawCenterArc(baseRect1, 1);


        function drawD(baseRect, side) {

            var scale = 1.5;

            var height = half.height / scale;
            var width = (half.width / 2) / scale;

            baseRect.append('rect')
                    .attr({
                        x: function () {
                            return (half.width - width) * side;
                        },
                        y: function () {
                            return height / 4;
                        },
                        width: width,
                        height: height
                        //fill : "red"
                    }).style({
                        stroke: "#fff",
                        "stroke-width": "3px"
                    });

            return baseRect;
        }

        drawD(baseRect0, 0);
        drawD(baseRect1, 1);


        function drawGoal(baseRect, side) {

            var height = half.height / 3;
            var width = (half.width / 3) / 2;

            baseRect.append('rect')
                    .attr({
                        x: function () {
                            return (half.width - width) * side;
                        },
                        y: function () {
                            return height;
                        },
                        width: width,
                        height: half.height / 3,
                        //fill : "red"
                    }).style({
                        stroke: "#fff",
                        "stroke-width": "3px"
                    });

            return baseRect;
        }

        drawGoal(baseRect0, 0);
        drawGoal(baseRect1, 1);
    }

    window.app = window.app || {};
    app.init = init;

})();