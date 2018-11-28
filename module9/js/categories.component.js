(function () {

angular.module("MenuApp")
.component("categories", {
    templateUrl: "templates/categories.html",
    controller: CategoriesController,
    bindings: {
        categories: "<"
    }
});

function CategoriesController () {
    var $ctrl = this;
}

})();