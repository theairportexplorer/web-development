(function () {

angular.module("MenuApp")
.component("mainCategories", {
    templateUrl: "js/templates/categories.template.html",
    bindings: {
        categories: "<"
    }
});

})();