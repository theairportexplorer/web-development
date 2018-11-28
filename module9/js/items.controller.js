(function () {

angular.module("MenuApp")
.controller("ItemsController", ItemsController);

ItemsController.$inject = ["allItems", "shortName"]
function ItemsController (allItems, shortName) {
    var ic = this;
    ic.items = allItems;
    ic.shortName = shortName;
}

})();