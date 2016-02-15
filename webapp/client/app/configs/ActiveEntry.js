Meteor.startup(function (){
  ActiveEntry.configure({
    passwordSignupFields: 'EMAIL_ONLY',
    logo: {
      url: "appIcon-transparent-medium-teal.png",
      displayed: true
    },
    signIn: {
      displayFullName: true,
      destination: "/"
    },
    signUp: {
      destination: "/"
    },
    themeColors: {
      primary: ""
    }
  });
});
