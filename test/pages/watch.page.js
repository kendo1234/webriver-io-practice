import Page from './page';

class WatchPage extends Page {

    get categoryCarousel() {
        // return $('//*[@id="s0-26-9-0-1[0]-0-1[1]-0"]');
        return $$('//*[@id="s0-26-9-0-1[0]-0-1[1]-0"]')[0]; //find elements (1 element so fetch 0 in array)

        
    }

    get breadcrumbHeading() {
        return $('#b-breadcrumb__heading');
    }

    get homeButton() {
        return $('#gh-la');
    }

    get fashionLink() {
        return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];
    }

    get watchesLink() {
        return $('.hl-cat-nav__sub-cat-col a[href*="Jewellery-Watches"]');
    }



open() {
    super.open('https://www.ebay.co.uk/b/Watches-Parts-Accessories/260324/bn_1665321');
    // super.open('https://www.ebay.co.uk/');

    }
}

export default new WatchPage();

