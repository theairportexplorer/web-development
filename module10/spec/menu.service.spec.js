describe("Spec: MenuService", function () {

    var menuService;
    var $httpBackend;
    var apiPath;

    beforeEach(function () {
        module("common");

        inject(function ($injector) {
            menuService = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            apiPath = $injector.get("ApiPath");
        });
    });

    var validJSON = {"short_name":"L1","name":"Orange Chicken"};

    it("should return JSON", function () {
        $httpBackend.whenGET(apiPath + '/menu_items/L1.json').respond(validJSON);
        menuService.getShortName("L1").then(function (response) {
            expect(response.data).toEqual(validJSON);
        });
        $httpBackend.flush();
    });
});