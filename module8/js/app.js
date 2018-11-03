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
            console.log(response);
            return response.data.menu_items;
        });
    };
}

narrowItDownController.$inject = ['MenuSearchService'];
function narrowItDownController (MenuSearchService) {
    var nidc = this;
    nidc.searchTerm = "";
    nidc.found = {};

    nidc.getMatchedMenuItems = function () {
        nidc.found = MenuSearchService.getMatchedMenuItems(nidc.searchTerm);
    };
};

function foundItems () {
    return {
        foundItems: "",
        onRemove: "",
    };
}

})();