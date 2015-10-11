var jane = {
  name: 'Jane',

  sayHello: function(friends) {
    var that = this;
    friends.forEach(function(friend) {
      // Use `that` instead of `this`.
      console.log(that.name + ' says hello to ' + friend);
    });
  }
};

jane.sayHello(['Joe', 'David']);
// Jane says hello to Joe
// Jane says hello to David
