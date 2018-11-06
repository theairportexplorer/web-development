(function () {

angular.module('NarrowItDownApp', [])
.service('MenuSearchService', menuSearchService)
.controller('NarrowItDownController', narrowItDownController)
.directive("foundItems", foundItems);

menuSearchService.$inject = ['$http'];
function menuSearchService ($http) {
    var mss = this;

    mss.getMatchedMenuItems = function (searchTerm) {
        return $http({
            url: "https://davids-restaurant.herokuapp.com/menu_items.json",
            responseType: "json"
        }).then( function (response) {
            // console.log(response);
            menu_items = response.data.menu_items;
            var matchedItems = [];
            for (var idx = 0; idx < menu_items.length; idx++) {
                // console.log(menu_items[idx]);
                if (menu_items[idx]["name"].toLowerCase().search(searchTerm.toLowerCase()) != -1) {
                    matchedItems.push(menu_items[idx]["name"]);
                }
            }
            return matchedItems;
        });
    };
}

narrowItDownController.$inject = ['MenuSearchService'];
function narrowItDownController (MenuSearchService) {
    var nidc = this;
    nidc.searchTerm = "";
    nidc.found = [];

    nidc.getMatchedMenuItems = function () {
        var resp = MenuSearchService.getMatchedMenuItems(nidc.searchTerm);
        resp.then( function (matchedItems) {
            console.log(matchedItems);
            nidc.found = matchedItems;
        });
        // console.log(nidc.found);
    };

    nidc.onRemove = function (index) {
        console.log("Removing item at index: " + index);
        nidc.found.splice(index, 1);
    };
};

function foundItems () {
    return {
        templateUrl: "found-items.html",
        scope: {
            foundItems: "<",
            onRemove: "&",
        },
        restrict: 'E'
    };
}

})();