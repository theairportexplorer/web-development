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
        templateUrl: "js/templates/main-categories.template.html",
        controller: "CategoriesController as cc",
        resolve: {
            allCategories: ["MenuDataService", function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })
    .state('itemsList', {
        url: "/items/{itemShortName}",
        templateUrl: "js/templates/main-items.template.html",
        controller: "ItemsController as ic",
        resolve: {
            allItems: ["$stateParams", "MenuDataService", 
                function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.itemShortName);
                }
            ],
            shortName: ["$stateParams", function ($stateParams) {
                if ($stateParams.itemShortName === "") {
                    return "ALL"
                }
                return $stateParams.itemShortName
            }]
        }
    });
}

})();