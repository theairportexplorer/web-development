(function () {

angular.module("MenuApp")
.controller("CategoriesController", CategoriesController);

CategoriesController.$inject = ["allCategories"]
function CategoriesController (allCategories) {
    var cc = this;
    cc.categories = allCategories;
}

})();