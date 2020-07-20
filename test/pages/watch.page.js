import Page from './page';

class WatchPage extends Page {

    get categoryCarousel() {
        return $('//*[@id="s0-26-9-0-1[0]-0-1[1]-0"]');
    }

    get breadcrumbHeading() {
        return $('#b-breadcrumb__heading');
    }

    get homeButton() {
        return $('#gh-la');
    }



open() {
    super.open('https://www.ebay.co.uk/b/Watches-Parts-Accessories/260324/bn_1665321');
    }
}

export default new WatchPage();

