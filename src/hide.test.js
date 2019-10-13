const hideText = require('./hide');

describe('Hidetext', () => {
  test('basic case', () => {
    expect(hideText('test')).toEqual('****');
  });
});
