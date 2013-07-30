(function () {

    var fileData = null;

    function init() {
        navigator.notification.alert("The device is ready!");
        $("#submit").bind("click", function () {
            $.ajax({
                url: "http://d2o0t5hpnwv4c1.cloudfront.net/601_node/preview.jpg",
                //url: "http://blog.vjeux.com/2011/javascript/jquery-binary-ajax.html",
                type: "GET",
                responseType:"blob"
            }).done(function (response) {
                console.log(">>>> data >>>");
                console.log(response.length);
                var blob = new Blob([response], { type: 'image/png' });
                var url = window.URL.createObjectURL(blob);
                console.log(response);
                $("#myimage").attr("src", url);
                fileData = response;
                accessFileSystem();
            });
        });
    }

    function accessFileSystem() {
        window.requestFileSystem(LocalFileSystem.TEMPORARY, 1024 * 500, onSuccessFunction, onErrorFunction);
    }

    function onSuccessFunction(fs) {
        console.log("success");
        fs.root.getFile("myimage.jpg", { create: true }, processEntry, onFileError);
    }

    function onFileError(error) {
        console.log("Error === " + error);
    }

    function processEntry(theEntry) {
        console.log(theEntry.fullPath);
        fileWirter(theEntry);
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

        //writer.write(fileData);
        for (var i = 0, len = fileData.length; i < len; ++i) {
            var c = fileData.charCodeAt(i);
            //String.fromCharCode(c & 0xff);
            var byte = c & 0xff;  // byte at offset i
            writer.write(byte);
        }
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


    window.app = window.app || {};
    app.init = init;

})();