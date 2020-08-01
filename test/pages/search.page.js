import Page from './page';

class SearchPage extends Page {
   
get searchInput() {
    return $('#gh-ac');
}

get searchButton() {
    return $('#gh-btn');
}

    open() {
        super.open('/')
    }

}

export default new SearchPage();