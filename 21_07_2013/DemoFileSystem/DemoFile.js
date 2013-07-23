/**
 * Created with JetBrains WebStorm.
 * User: Rehan
 * Date: 7/21/13
 * Time: 1:57 PM
 * To change this template use File | Settings | File Templates.
 */

window.webkitRequestFileSystem(window.TEMPORARY, 1024*100,

function (fs){
    console.log("succss");
    console.log(fs);
}, function (e) {
        var msg = '';

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
    })
