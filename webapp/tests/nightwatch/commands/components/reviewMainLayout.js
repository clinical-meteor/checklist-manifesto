exports.command = function(username, password) {
  this
    .verify.elementPresent("#listPanelHeader")
    .verify.elementPresent("#listPanelFooter")

    .verify.elementPresent("#contentContainer")
    // .verify.elementPresent("#scrollableContent")
    // .verify.elementPresent("#contentOverlay")

  return this; // allows the command to be chained.
};
