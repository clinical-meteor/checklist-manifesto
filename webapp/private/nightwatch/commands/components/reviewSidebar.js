

exports.command = function(username, password) {
  this
    .verify.elementPresent("#currentUserEmail")
    .verify.elementPresent("#aboutButton")
    .verify.elementPresent("#eulaButton")
    .verify.elementPresent("#privacyButton")
    .verify.elementPresent("#logoutButton")
    .verify.elementPresent("#connectionStatusPanel")
    
    .verify.elementPresent("#todosListPage")

  return this; // allows the command to be chained.
};
