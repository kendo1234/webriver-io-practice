import SearchPage from '../pages/search.page'
import resources from '../resources';

describe('Search Product - Ebay', () => {
    it('Should open the main url and verify page title', () => {
        SearchPage.open();
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    })


    it('Should search for a product and verify the search text value', () => {
        SearchPage.searchInput.addValue('Laptop')
        SearchPage.searchButton.click();
        expect(SearchPage.searchInput).toHaveValue('Laptop');
    })

    it('should redirect to new page and verify title', () => {
        expect(browser).toHaveTitle(resources.laptopTitle);

    })
})