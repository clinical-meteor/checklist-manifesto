exports.command = function(pageId) {

  this
    .frame(null)
    .waitForElementVisible(pageId, 3000)

  return this; // allows the command to be chained.
};
