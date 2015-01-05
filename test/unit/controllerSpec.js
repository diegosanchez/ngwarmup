describe('Contact controllers', function() {
  beforeEach(module('App'));
 
  describe('contactCtrl', function(){
 
    it('should return list of contacts ', inject(function($controller) {
      var scope = {};
      var ctrl = $controller('contactCtrl', { $scope: scope });
 
      expect(scope.contacts().length).toBe(1);
      
    }));
  });
});
