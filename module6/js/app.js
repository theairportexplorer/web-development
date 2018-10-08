(function () {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$ingest = ["$scope"];
function LunchCheckController ($scope) {
    $scope.lunchCheckMessage = "";
    $scope.lunchMenu = "";

    $scope.calculateLunchCheck = function () {
        if ($scope.lunchMenu == "") {
            $scope.lunchCheckMessage = "Please enter data first";
            return;
        }
        var rawArray = $scope.lunchMenu.replace(/\s/g,'').split(',');
        var lunchMenuItems = [];
        rawArray.reduce( (accumulator, currentValue) => {
            if (currentValue != "") {
                accumulator.push(currentValue);
            }
            return accumulator;
        }, lunchMenuItems);
        // console.log(lunchMenuItems);
        if (lunchMenuItems.length == 0) {
            $scope.lunchCheckMessage = "No items found";
        } else if (lunchMenuItems.length <= 3 && lunchMenuItems.length > 0) {
            $scope.lunchCheckMessage = "Enjoy!";
        } else {
            $scope.lunchCheckMessage = "Too Much!";
        }
    };
}
})();