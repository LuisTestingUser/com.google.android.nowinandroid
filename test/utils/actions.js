class actions {

    async findElement(selector) {
        const element = await $(selector)
        return element
    }
    
    async waitForElement(selector) {
        const element = await this.findElement(selector)
        return element.waitForDisplayed({ timeout: 300000 })
    }

    async elementDisplyed(selector) {
        const element = await $(selector)
        await this.waitForElement(selector)
        return element.isDisplayed()
    }
    
    async scrollHorizontalBack() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
       
    }

    async  isElementPresentAndNotEmpty(selector) {
        const element = $(selector);
        const isPresent = await element.isExisting();
        if (!isPresent) {
          return false;
        }
        const text = await element.getText();
        return text.trim() !== '';
      }

    async ScrollVertically () {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Virtual Machine as a core Android Primitive")');
    }
}

export default new actions();
