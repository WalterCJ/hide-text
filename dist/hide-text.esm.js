var options = {
  placeholder: '*',
  showLeft: 0,
  showRight: 0,
  trim: 0
};
/**
 * Hides the text by converting characters to asterisks or other placeholder.
 * @param {string} text - The value to conceal
 * @return {string}
 */

function hideText(text) {
  var userOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  //just in case you send me something else...
  if (typeof text !== 'string') {
    throw new Error("".concat(text, " is not a string"));
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

  hiddenText = text.slice(options.showLeft, options.showRight * -1 || text.length).replace(/[\S+]/g, options.placeholder);

  if (options.trim > 0) {
    hiddenText = hiddenText.slice(0, options.trim);
  }

  return start + hiddenText + end;
}

export default hideText;
