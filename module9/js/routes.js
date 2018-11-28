(function () {

angular.module("MenuApp")
.config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
function RoutesConfig ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
        url: "/",
        templateUrl: "js/templates/home.template.html"
    })
    .state('categories', {
        url: "/categories",
        templateUrl: "js/templates/categories.template.html",
        controller: "CategoriesController as cc",
        resolve: {
            categories: ["MenuDataService", function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })
    .state('items', {});
}

})();