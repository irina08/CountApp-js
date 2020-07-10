const selectorCnt = require ('../data/selectors.json').counter;
const expectedDCF = require ('../data/expected.json').defaultCounterFunctionality;
const inputNumber = require ('./../helpers/inputNumber');


before(() => {
    browser.url('');
})

describe('DEFAULT COUNTER FUNCTIONALITY', function () {

    it('TC-040 Subtract 1 gives -1', function () {
        browser.url('');
        const button = $$(selectorCnt.blackBtn)[0];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC040);
    })

    it('TC-041 Add 3 gives 2', function () {
        const button = $$(selectorCnt.blackBtn)[5];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC041);
    })

  it('TC-042 LLF accept 1', function () {
    inputNumber('left', expectedDCF.inputMin);
    const result = $(selectorCnt.error).isDisplayed();
    expect(result).toEqual(false);
  })


});