export const waitAndClick = (el, timeout) => {

    el.waitForDisplayed({timeout});
    el.click();
    

}