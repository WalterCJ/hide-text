const hideText = require('./hide');

describe('Hidetext', () => {
  test('Should return a hidden string using defaults', () => {
    expect(hideText('test1!')).toBe('******');
  });
  test('Should throw a error if is not a string', () => {
    expect(() => hideText(1)).toThrow();
    expect(() => hideText(undefined)).toThrow();
    expect(() => hideText(null)).toThrow();
  });
  test('Should return a hidden string with a different placeholder', () => {
    expect(
      hideText('this is a random text!', { placeholder: '@', showLeft: 0, showRight: 0, trim: 0 })
    ).toEqual('@@@@ @@ @ @@@@@@ @@@@@');
  });
  test('Should return a hidden string but showing the left side', () => {
    expect(
      hideText('this is a random text!', { placeholder: '*', showLeft: 7, showRight: 0, trim: 0 })
    ).toBe('this is * ****** *****');
  });
  test('Should return a hidden string but showing the right side', () => {
    expect(
      hideText('another text!', { placeholder: '#', showLeft: 0, showRight: 5, trim: 0 })
    ).toBe('####### text!');
  });

  test('Should return a hidden string trimming to 9 characters', () => {
    expect(
      hideText('this is a random text!', { placeholder: '#', showLeft: 0, showRight: 0, trim: 9 })
    ).toEqual('#### ## #');
  });
});
