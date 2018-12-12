(function () {
"use strict";

angular.module("public")
.controller("SignUpController", SignUpController);

SignUpController.$inject = ["UserInformationService"];
function SignUpController (UserInformationService) {
    var suc = this;

    suc.UserInfo = UserInformationService;

    suc.submit = function () {
        suc.UserInfo.completed = true;
    };
}
})();