
class MainScreen {

    get title(){
        return $('//*[@text="Now in Android"]');    
    }

    get heading(){
        return $('//*[@text="What are you interested in?"]');
    }

    get headingSubText(){
        return $('//*[@text="Updates from topics you follow will appear here. Follow some things to get started.?"]');
    }

    get carousel(){
        return $('//*[@resource-id="forYou:topicSelection"]');
    }

    get carouselHeadlinesElement(){
        return $('//*[@resource-id="forYou:topicSelection"]//android.widget.TextView[@text="Headlines"]');
    }

    get carouselPublishingElement(){
        return $('//*[@resource-id="forYou:topicSelection"]//android.widget.TextView[@text="Publishing & Distribution"]');
    }

    get carouselPublishingElement(){
        return $('//*[@resource-id="forYou:topicSelection"]//android.widget.TextView[@text="Platform & Releases"]');
    }

    get carouselTestingElement(){
        return $('//*[@resource-id="forYou:topicSelection"]//android.widget.TextView[@text="Testing"]');
    }
    get carouselChecksElements(){
        return $$('android.widget.CheckBox');
    }
    get carouselCheckElement(){
        return $('android.widget.CheckBox');
    }
    get DoneBttn(){
        return $('//android.widget.TextView[@text="Done"]');
    }

    get ForYouTab(){
        return $('//android.widget.TextView[@text="For you"]');
    }

    get SavedTab(){
        return $('//android.widget.TextView[@text="Saved"]');
    }

    get InterestTab(){
        return $('//android.widget.TextView[@text="Interests"]');
    }

    get SearchBttn(){
        return $('~Search');
    }

    get SettingBttn (){
        return $('//android.view.View[@content-desc="Settings"]');
    }

}

export default new MainScreen();