(function () {

angular.module("MenuApp")
.component("items", {
    templateUrl: "templates/items.html",
    controller: ItemsController,
    bindings: {
        items: "<"
    }
});

function ItemsController () {
    var $ctrl = this;
}

})();