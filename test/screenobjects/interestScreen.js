class InterestScreen {

    get InterestElements(){
        return $$('//*[@resource-id="interests:topics"]//android.widget.TextView');
    }

}

export default new InterestScreen();