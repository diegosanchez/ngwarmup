function Mamifero(patas) {
  this.patas = patas || '2';
  this.peso = 4;

  for( var a in arguments) {
    console.log('i:', a, ' value:', arguments[a] );
  }
}

Mamifero.prototype.peso = function() {
  return this.peso;
};

Mamifero.prototype.caminar = function(quien) {
  var who = quien || '';
  console.log( who + " esta caminando" );
};

function Person(name) {
  var _name = name || '';

  function getName() {
    return _name;
  }

  function setName(n) {
    _name = n;
  }

  console.debug(this);

  Object.defineProperty( this, 'name', { 
    get: getName, 
    set: setName, 
    enumerable: true,
    configurable: false
  });

  Mamifero.apply(this, arguments);
}

Person.prototype = new Mamifero();
Person.prototype.constructor = Person;

Person.prototype.saludar = function() {
  console.log("Hi! I'm " + this.name);
};

Person.prototype.caminar = function() {
  Mamifero.prototype.caminar(this.name);
};


var o = {
  m: function() {
    var self = this;
    console.log(this === o);
    f();

    function f() {
      console.log(this === o); // "false": this is global or undefined
      console.log( 'f: ', this);
      console.log(self === o); // "true": self is the outer this value.
    }
  }
};
o.m();

