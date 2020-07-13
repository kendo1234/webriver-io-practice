describe('Search Product - Ebay', () => {
    it('Should open the main url and verify page title', () => {
        browser.url('https://www.ebay.co.uk');
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    })


    it('Should search for a product and verify the search text value', () => {
        const searchInput = $('#gh-ac')
        const searchButton = $('#gh-btn')

        searchInput.addValue('Laptop');
        searchButton.click();

        expect(searchInput).toHaveValue('Laptop');
    })

    it('should redirect to new page and verify title', () => {
        expect(browser).toHaveTitle('Laptop | eBay');

    })
})