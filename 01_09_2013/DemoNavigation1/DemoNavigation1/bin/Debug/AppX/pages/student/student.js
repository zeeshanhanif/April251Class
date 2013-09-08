// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/student/student.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            
            var a = new WinJS.Binding.List([
            { name: "Milk", price: 2.44,color:"red" },
            { name: "Oranges", price: 1.99, color: "blue" },
            { name: "Wine", price: 8.55, color: "green" },
            { name: "Apples", price: 2.44, color: "yellow" },
            { name: "Steak", price: 1.99, color: "purple" }
            ]);
            var listview = document.getElementById('listview').winControl;
            listview.itemDataSource = a.dataSource;
            
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });

    var products = new WinJS.Binding.List([
            { name: "Milk", price: 2.44 },
            { name: "Oranges", price: 1.99 },
            { name: "Wine", price: 8.55 },
            { name: "Apples", price: 2.44 },
            { name: "Steak", price: 1.99 },
            { name: "Eggs", price: 2.44 },
            { name: "Mushrooms", price: 1.99 },
            { name: "Yogurt", price: 2.44 },
            { name: "Soup", price: 1.99 },
            { name: "Cereal", price: 2.44 },
            { name: "Pepsi", price: 1.99 }
    ]);

    WinJS.Namespace.define("ListViewDemos", {
        products: products
    });
})();
