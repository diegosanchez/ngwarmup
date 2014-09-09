var app = angular.module( 'contacts', [] );

app.controller( 'contactCtrl', [ '$scope', function($scope) {
  $scope.saveContact = function () {
    alert('Save');
  };

}]);
