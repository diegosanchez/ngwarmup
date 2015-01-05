var app = angular.module( 'App', [] );

app.controller( 'AnotherCtrl', [ '$scope', 'ContactStore', function($scope, ContactStore) {
}]);
app.controller( 'contactCtrl', [ '$scope', 'ContactStore', function($scope, ContactStore) {
  // Creating default data
  ContactStore.save( { id: 0, name: 'yo', mail: 'diego@test.com' } );

  $scope.disable = function () {
    return ( $scope.newEntry.$invalid ) ? "disabled" : "";
  };

  $scope.deleteContact = function (id) {
    ContactStore.delete( id );
  };

  $scope.editContact = function (id) {
    $scope.newContact = angular.copy( ContactStore.get(id) );
  };

  $scope.saveContact = function () {
    ContactStore.save( $scope.newContact );
    $scope.newContact = {};
  };

  $scope.contacts = function() {
    return ContactStore.list();
  };

}]);

app.service( 'ContactStore', function() {
  var contactId = 0;
  var data = [];

  this.list = function() {
    return data;
  };

  this.save = function( contact ) {
    var toUpdate = this.get( contact.id );
    if ( toUpdate ) {
      if ( data[i].id == contact.id ) {
        data[i] = contact;
      }
    } else {
      contact.id = contactId++;  
      data.push(contact);
    }
  }


  this.get = function( id ) {
    for( i in data ) {
      if ( data[i].id == id ) {
        return data[i];
      }
    }
    return null;
  };

  this.delete = function( id ) {
    var i = this.get( id );

    if ( i ) {
      data.splice( i, 1 );
    }
  }

  console.log('Service created');
});
