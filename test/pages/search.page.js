import Page from './page';

class SearchPage extends Page {
   
get searchInput() {
    return $('#gh-ac');
}

get searchButton() {
    return $('#gh-btn');
}

    open() {
        super.open('https://www.ebay.co.uk')
    }

}

export default new SearchPage();