describe('Contact store', function() {
  beforeEach(module('App'));
 
  describe('ContactStore', function(){
 
    it('should have not data', inject(function(ContactStore) {
      expect(ContactStore.list().length).toBe(0);
    }));

    it('should add data ', inject(function(ContactStore) {
      ContactStore.save( { id: null, name: 'x', mail: 'x@test.com' } );
      expect(ContactStore.list().length).toBe(1);
    }));
  });
});
