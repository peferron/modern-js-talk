var jane = {
  name: 'Jane',

  sayHello: function(friends) {
    // Here, `this` is `jane`.
    friends.forEach(function(friend) {
      // But here, `this` is undefined (in strict mode).
      console.log(this.name + ' says hello to ' + friend);
    });
  }
};
