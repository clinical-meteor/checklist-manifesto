// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Lists.find().count() === 0) {
    var data = [
      {name: "Meteor Principles",
       items: ["Data on the Wire",
         "One Language",
         "Database Everywhere",
         "Latency Compensation",
         "Full Stack Reactivity",
         "Embrace the Ecosystem",
         "Simplicity Equals Productivity"
       ]
      },
      {name: "Languages",
       items: ["Lisp",
         "C",
         "C++",
         "Python",
         "Ruby",
         "JavaScript",
         "Scala",
         "Erlang",
         "6502 Assembly"
         ]
      },
      {name: "Favorite Scientists",
       items: [
         "Nikola Tesla",
         "Marie Curie",
         "Grace Hopper",
         "Claude Shannon",
         "Carl Friedrich Gauss",
         "Ada Lovelace"
       ]
      }
    ];
    var timestamp = (new Date()).getTime();

    data.forEach(function(list){
      var list_id = Lists.insert({name: list.name,
        incompleteCount: list.items.length});

      if(list.items){
        list.items.forEach(function(text){
          // add a new task
          Todos.insert({
            listId: list_id,
            public: true,
            text: text,
            createdAt: new Date(timestamp)}
          );

          // ensure unique timestamp.
          timestamp += 1;
        });
      }
    });
  }
});
