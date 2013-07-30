(function () {

    function init() {
        navigator.notification.alert("The device is ready!");
        $("#submit").bind("click", function () {
            submitForm();
        });
    }

    function submitForm() {
        
        accessFileSystem();
    }

    function accessFileSystem() {
        window.requestFileSystem(LocalFileSystem.TEMPORARY, 1024 * 100, onSuccessFunction, onErrorFunction);
    }

    function onSuccessFunction(fs) {
        console.log("success");
        fs.root.getFile("sample.txt", { create: true }, processEntry, onFileError);
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
        
        writer.write("my data test");
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