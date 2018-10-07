(function () {
'use strict';

angular.module("LunchCheck", [])
.controller(LunchCheckController, function ($scope) {
    $scope.lunchCheckMessage = "";
    $scope.lunchMenu = "";

    $scope.calculateLunchCheck = function () {
        
    };
});

LunchCheckController["$ingestor"] = ["$scope"]
})();