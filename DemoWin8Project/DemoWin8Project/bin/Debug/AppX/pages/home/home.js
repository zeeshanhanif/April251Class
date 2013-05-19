(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            studentInfo.addEventListener("click", function () {
                WinJS.Navigation.navigate("/pages/studentInfo/studentInfo.html", {name:"hello",age:23});
            });

        }
    });
})();
