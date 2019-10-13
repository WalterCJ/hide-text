'use strict';

var options = {
  placeholder: '*',
  showLeft: 0,
  showRight: 0,
  clamp: 0
};
/**
 * Hides the text by converting characters to asterisks or other placeholder.
 * @param {string} text - The value to conceal
 * @return {string}
 */

function hideText(text) {
  var userOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  //just in case you send me something else...
  if (!text) {
    return text;
  }

  options = Object.assign(options, userOptions);
  var start = '',
      end = '',
      hiddenText;

  if (options.showLeft > 0) {
    start = text.slice(0, options.showLeft);
  }

  if (options.showRight > 0) {
    end = text.slice(options.showRight * -1);
  }

  hiddenText = text.slice(options.showLeft, options.showRight * -1 || text.length).replace(/[a-zA-Z0-9]/g, options.placeholder);

  if (options.clamp > 0) {
    hiddenText = hiddenText.slice(0, options.clamp);
  }

  return start + hiddenText + end;
}

module.exports = hideText;
