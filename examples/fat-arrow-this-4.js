var jane = {
  name: 'Jane',

  sayHello: function(friends) {
    // Here, `this` is `jane`.
    friends.forEach(friend => {
      // Reuses the surrounding `this`, which is `jane`.
      console.log(this.name + ' says hello to ' + friend);
    });
  }
};

jane.sayHello(['Joe', 'David']);
// Jane says hello to Joe
// Jane says hello to David
