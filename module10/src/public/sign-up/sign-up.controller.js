(function () {
"use strict";

angular.module("public")
.controller("SignUpController", SignUpController);

SignUpController.$inject = ["UserInformationService", "MenuService"];
function SignUpController (UserInformationService, MenuService) {
    var suc = this;

    suc.UserInfo = UserInformationService;
    suc.firstName = "";
    suc.lastName = "";
    suc.email = "";
    suc.phoneNumber = "";
    suc.favoriteItem = "";
    suc.completed = false;
    suc.invalidShortName = false;

    suc.submit = function () {
        suc.fetchMenuItemShortName();
        if (suc.invalidShortName === false) {
            suc.UserInfo.firstName = suc.firstName;
            suc.UserInfo.lastName = suc.lastName;
            suc.UserInfo.email = suc.email;
            suc.UserInfo.phoneNumber = suc.phoneNumber;
            suc.UserInfo.favoriteItem = suc.favoriteItem;
            suc.UserInfo.completed = true;
            suc.completed = true;
        } else {
            suc.UserInfo.completed = false;
        }
    };

    suc.fetchMenuItemShortName = function () {
        var result = MenuService.getShortName(suc.favoriteItem);
        result.then( function () {
            suc.invalidShortName = false;
        }, function () {
            suc.invalidShortName = true;
        });
    };
}
})();