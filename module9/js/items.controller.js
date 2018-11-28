(function () {

angular.module("MenuApp")
.controller("ItemsController", ItemsController);

ItemsController.$inject = ["allItems"]
function ItemsController (allItems) {
    console.log(allItems);
    var ic = this;
    ic.items = allItems;
}

})();