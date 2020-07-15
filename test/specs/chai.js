import { expect as chaiExpect, assert } from 'chai';
import 'chai/register-should';
//duplicates the watch tests but uses several chai assertions
describe('Watches Page', () => {

    it('should show the category carousel', () => {
        browser.url('https://www.ebay.co.uk/b/Watches-Parts-Accessories/260324/bn_1665321');
        const categoryCarousel = $('//*[@id="s0-26-9-0-1[0]-0-1[1]-0"]');
        expect(categoryCarousel).toBeDisplayed();
    });
    
    it('should show the breadcrumb title', () => {
        const breadcrumbHeading = $('#b-breadcrumb__heading');
        const breadCrumbText = breadcrumbHeading.getText();
        const tag = breadcrumbHeading.getTagName();
        chaiExpect(breadCrumbText).to.not.be.empty;
        expect(breadcrumbHeading).toHaveTextContaining('You are here');

        //3 different types of chai assertions
        chaiExpect(tag).to.equal('h2');
        tag.should.be.equal('h2');
        assert.isNotEmpty(breadCrumbText);

    });

    it('should click on the home button and verify a new URL', () => {
        const homeButton = $('#gh-la');
        homeButton.click();

        //Chai assertion example using alias expect
        const url = browser.getUrl();
        chaiExpect(url).to.include('ebay');
        expect(browser).toHaveUrl('https://www.ebay.co.uk/');
    });

});