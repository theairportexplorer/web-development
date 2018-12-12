(function () {
"use strict";

angular.module('common')
.service('UserInformationService', UserInformationService);

function UserInformationService () {
    var uis = this;

    uis.firstName = "";
    uis.lastName = "";
    uis.email = "";
    uis.phoneNumber = "";
    uis.favoriteItem = "";

    uis.completed = false;
}

})();