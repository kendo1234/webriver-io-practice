import { expect as chaiExpect } from 'chai';
import WatchPage from '../pages/watch.page';



describe('Watches Page', () => {

    before(() => {
        WatchPage.open();
    });

    after(() => {
        browser.url('https://ebay.com');
    });

    afterEach(() => {
        browser.refresh();
    });

    it('should show the category carousel', () => {
        expect(WatchPage.categoryCarousel).toBeDisplayed();
    });
    
    it('should show the breadcrumb title', () => {
        expect(WatchPage.breadcrumbHeading).toHaveTextContaining('You are here');
    });

    it('should click on the home button and verify a new URL', () => {

        WatchPage.homeButton.click();

        //Chai assertion example using alias expect
        const url = browser.getUrl();
        chaiExpect(url).to.include('ebay');
        expect(browser).toHaveUrl('https://www.ebay.co.uk/');
    });


});