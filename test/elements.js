const selectorGen = require ('../data/selectors.json').general;
const expectedGen = require ('./../data/expected.json').general;
const selectorCnt = require ('../data/selectors.json').counter;
const expectedCnt = require ('./../data/expected.json').counter;

describe('Complex Counter App', function () {
    describe('Getting to the page', function () {
        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('');
            const title = browser.getTitle();
            expect(title).toEqual('Complex Counter App');
        })
    });

    describe('Elements exist', function () {
        it('TC-002 Header', function () {
            const actual = $(selectorGen.header).isDisplayed();
            expect(actual).toEqual(true);
        })

      it('TC-003 Total Result', function () {
        const actual = $(selectorGen.totalResult).isDisplayed();
        expect(actual).toEqual(true);
      })
      it('TC-004 Add Name Field', function () {
        const actual = $(selectorGen.addNameField).isDisplayed();
        expect(actual).toEqual(true);
      })


  });

});
