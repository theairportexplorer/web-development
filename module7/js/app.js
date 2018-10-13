(function () {
'use strict';

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController);

ToBuyController.$ingest = ["$scope"];
function ToBuyController ($scope) {
    $scope.itemBought = function (item) {
        console.log("Item " + item + " bought!");
    };
}

AlreadyBoughtController.$ingest = ["$scope"];
function AlreadyBoughtController ($scope) {

}
})();