describe('homeCtrl Tests', function(){
    var vm,
        stateMock,
        intervalMock;

    // load the controller's module
    stateMock = jasmine.createSpyObj('$state spy', ['go']);

    beforeEach(function ()  {

        module('novel.controllers');
    });


    beforeEach(inject(function($rootScope, $controller) {
        // scope = $rootScope.$new();
        vm = $controller('homeCtrl', {'$state': stateMock});
    }));

    // tests start here
    it('should have enabled friends to be true', function(){
        expect(vm.title).toEqual("Lista de Novels");
    });

    it('should teste a function test', function () {
      var texto = "oi";
      expect(vm.teste(texto)).toEqual(texto);
    })
});
