if (Meteor.users.find().count() === 0) {

  var users = [{
      email: "admin@gmail.com",
      username: "admin",
      name: "System Administrator",
      password: "admin321$"
    },
    {
      email: "janedoe@gmail.com",
      username: "janedoe",
      name: "Jane Doe",
      password: "janedoe123"
    },
    {
      email: "johndoe@gmail.com",
      username: "johndoe",
      name: "John Doe",
      password: "johndoe123"
    }
  ];

  users.forEach(function(user) {
    console.log('----------------------------')
    console.log('newUser: ', user);

    var id = Accounts.createUser({
      email: user.email,
      password: user.password,
      profile: {
        active: true,
        name: user.name,
        waveSignalOn: false
      },
      username: user.username
    });
  });

  console.log("Users created: " + Meteor.users.find().count());
}
