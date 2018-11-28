(function () {

angular.module('data')
.service("MenuDataService", menuDataService);

menuDataService.$inject = ["$http"];
function menuDataService ($http) {
    var mds = this;

    mds.getAllCategories = function () {
        return $http({
            url: "https://davids-restaurant.herokuapp.com/categories.json",
            responseType: "json"
        }).then( function (response) {
            var categories = response.data;
            return categories;
        });
    };

    mds.getItemsForCategory = function (categoryShortName) {
        return $http({
            url: "https://davids-restaurant.herokuapp.com/menu_items.json",
            params: { category: categoryShortName },
            responseType: "json"
        }).then( function (response) {
            var menu_items = response.data.menu_items;
            return menu_items;
        });
    };
}

})();