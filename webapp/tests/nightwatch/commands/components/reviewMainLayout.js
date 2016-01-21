exports.command = function(username, password) {
  this
    .verify.elementPresent("#appLayout")
      .verify.elementPresent("#navbarHeader")
        .verify.elementPresent("#panelSurface")
        .verify.elementPresent("#panelSurface .content-scrollable")
      .verify.elementPresent("#navbarFooter")

  return this; // allows the command to be chained.
};
