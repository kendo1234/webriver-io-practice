describe('Watches Page', () => {
    it('should show the category carousel', () => {
        browser.url('https://www.ebay.co.uk/b/Watches-Parts-Accessories/260324/bn_1665321');
        const categoryCarousel = $('//*[@id="s0-26-9-0-1[0]-0-1[1]-0"]');
        expect(categoryCarousel).toBeDisplayed();
    });
    it('should show the breadcrumb title', () => {
        const breadcrumbHeading = $('#b-breadcrumb__heading');
        expect(breadcrumbHeading).toHaveTextContaining('You are here');
    });
    it('should check the "wristwatch" category is clickable', () => {
        const wristwatchLink = $('//*[@id="s0-26-9-0-1[0]-0-1[1]-0-xCarousel-x-carousel-items"]/ul/li[1]');
        expect(wristwatchLink).toHaveLinkContaining('Wristwatches')
        expect(wristwatchLink).toBeClickable;
    });
});