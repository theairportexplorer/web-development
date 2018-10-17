(function () {
'use strict';

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.filter("angularDollar", angularDollarFilter)
.service("ShoppingList", ShoppingList);

angularDollarFilter.$inject = ["$filter"];
function angularDollarFilter ($filter) {
    return function (input) {
        input = input || 0;
        input = $filter('currency')(input);
        input = "$$" + input;
        return input;
    }
}

ToBuyController.$inject = ["ShoppingList", "angularDollarFilter", "$filter"];
function ToBuyController (ShoppingList, angularDollarFilter) {
    var tbc = this;
    tbc.itemName = "";
    tbc.itemPrice = "";
    tbc.ShoppingList = ShoppingList;

    tbc.getItems = function () {
        return ShoppingList.getItems();
    }

    tbc.addItem = function () {
        ShoppingList.addItem(tbc.itemName, tbc.itemPrice);
    }

    tbc.buyItem = function (idx) {
        ShoppingList.buyItem(idx);
    };

    tbc.removeItem = function (idx) {
        ShoppingList.removeItem(idx);
    }

    tbc.everythingBought = function () {
        return ShoppingList.everythingBought();
    };

    tbc.createList = function () {
        for (var n = 0; n < 10; n++ ) {
            ShoppingList.addItem("Cookies", 0.10);
        }
    }
    // For initial testing...
    // ShoppingList.addItem("Cookies", 10);
    // ShoppingList.addItem("Soap", 1);
}

AlreadyBoughtController.$inject = ["ShoppingList", "angularDollarFilter", "$filter"];
function AlreadyBoughtController (ShoppingList, angularDollarFilter, $filter) {
    var abc = this;

    abc.getBoughtItems = function () {
        return ShoppingList.getBoughtItems();
    };

    abc.somethingBought = function () {
        return ShoppingList.somethingBought();
    };

    abc.totalCost = function () {
        return ShoppingList.totalCost();
    };
}

function ShoppingList () {
    var sl = this;
    sl.items = [];

    sl.addItem = function (item, price) {
        sl.items.push({
            "item": item,
            "quantity": 1,
            "price": price,
            "bought": false
        });
    };

    sl.buyItem = function (index) {
        sl.items[index].bought = true;
    };

    sl.removeItem = function (index) {
        sl.items.splice(index, 1);
    }

    sl.getBoughtItems = function () {
        var returnList = [];
        for (var idx = 0; idx < sl.items.length; idx++ ) {
            if ( sl.items[idx].bought === true ) {
                returnList.push(sl.items[idx]);
            }
        }
        return returnList; 
    };

    sl.everythingBought = function () {
        if ( sl.items.length == 0 ) {
            return false;
        }
        for (var idx = 0; idx < sl.items.length; idx++) {
            if (sl.items[idx].bought === false) {
                return false;
            }
        }
        return true;
    };

    sl.somethingBought = function () {
        if ( sl.items.length == 0 ) {
            return true;
        }
        for (var idx = 0; idx < sl.items.length; idx++) {
            if (sl.items[idx].bought === true) {
                return true;
            }
        }
        return false;
    }

    sl.getItems = function () {
        return sl.items;
    };

    sl.totalCost = function () {
        var cost = 0;
        for (var idx = 0; idx < sl.items.length; idx++ ) {
            if ( sl.items[idx].bought === true ) {
                cost += (sl.items[idx].quantity * sl.items[idx].price);
            }
        }
        return cost;
    };
}
})();