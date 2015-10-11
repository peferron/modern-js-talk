var jane = {
  name: 'Jane',

  sayHello: function(friends) {

    friends.forEach(function(friend) {

      console.log(this.name + ' says hello to ' + friend);
    });
  }
};

jane.sayHello(['Joe', 'David']);
// Jane says hello to Joe
// Jane says hello to David
