(function () {
"use strict";

angular.module("public")
.controller("MyInfoController", MyInfoController);

MyInfoController.$inject = ["UserInformationService"];
function MyInfoController (UserInformationService) {
    var mic = this;

    mic.UserInformation = UserInformationService;
}

})();