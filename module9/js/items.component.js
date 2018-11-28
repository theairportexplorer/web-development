(function () {

angular.module("MenuApp")
.component("menuItems", {
    templateUrl: "js/templates/items.template.html",
    bindings: {
        items: "<"
    }
});

})();