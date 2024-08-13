import actions from "../utils/actions.js";
import mainScreen from "../screenobjects/mainScreen.js"
import searchScreen from "../screenobjects/searchScreen.js";
import savedScreen from "../screenobjects/savedScreen.js";
describe('Application Test', () => {

    it ('Verify main screen elements and its state', async () => {

        actions.elementDisplyed(mainScreen.title);
         expect (mainScreen.title).toHaveText("Now in Android");

        actions.elementDisplyed(mainScreen.heading);
        expect (mainScreen.title).toHaveText("What are you interested in?");

        actions.elementDisplyed(mainScreen.headingSubText);
        expect (mainScreen.title).toHaveText("Updates from topics you follow will appear here. Follow some things to get started.");

        actions.elementDisplyed(mainScreen.DoneBttn);
        expect (mainScreen.DoneBttn.toBeDisabled());

        actions.elementDisplyed(mainScreen.SearchBttn);
        expect (mainScreen.SearchBttn.toBeClickable());

        actions.elementDisplyed(mainScreen.SettingBttn);
        expect (mainScreen.SearchBttn.toBeClickable());


        actions.elementDisplyed(mainScreen.ForYouTab);
        expect (mainScreen.ForYouTab.toBeClickable());

        actions.elementDisplyed(mainScreen.SavedTab);
        expect (mainScreen.SavedTab.toBeClickable());

        actions.elementDisplyed(mainScreen.InterestTab);
        expect (mainScreen.InterestTab.toBeClickable());

        actions.elementDisplyed(mainScreen.carousel);

    });

    it ('Verify Carousel is Scrollable and moved to Android TV', async () => {

        await $('android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).setAsHorizontalList().scrollTextIntoView("Android TV")')
        actions.scrollHorizontalBack();

    });


    it('Click on the 3 First Elements Displayed and click on the Done button and verify element no longer visible', async ()=> {
        
        for (let i = 0; i < 3 ; i++) {
             await mainScreen.carouselChecksElements[i].click();
            }
 
         (await mainScreen.DoneBttn).click();
 
         expect(await mainScreen.DoneBttn.isDisplayed()).toBe(false);
 
     });
 

     it ('Scroll Vertically into Articles List', async ()=> {
        
        actions.ScrollVertically();
        (await mainScreen.carouselCheckElement).click();
        await driver.pause(10000);

        
     });


     it ('Move to Interest Section and verify list of elements', async()=> {
        await( mainScreen.InterestTab).click();
       
        const expectedList = ["Accessibility","Android Auto","Android Studio & Tools","Android TV"
            ,"Architecture","Camera & Media","Compose","Data Storage","Games"];
          
        const actualList = [];

        const textList = await $$('//*[@resource-id="interests:topics"]//android.widget.TextView');

          for (const element of textList){
            actualList.push( await element.getText());
            console.log(actualList)
            
          }

          await expect(actualList).toEqual(expectedList);

        });

     it ('Move  to Saved Section and Enter to An Article', async()=> {
        (await mainScreen.SavedTab).click();
        await  expect (savedScreen.elementSaved).toBeDisplayed();

        (await savedScreen.elementSaved).click();
        await driver.pause(5000);

       await driver.switchContext('WEBVIEW_chrome');
        await driver.pause(5000);

        await driver.switchContext('NATIVE_APP');
        await driver.back();


     });

     
    xit ('Nagivate to Search Screen, check content and back', async () => {
        (await mainScreen.SearchBttn).click();
        actions.elementDisplyed(searchScreen.TextFieldSearch);
        (await searchScreen.TextFieldSearch).click();
        (await searchScreen.TextFieldSearch).addValue("Test");
        expect (searchScreen.TopcisTitle.toBeDisplayed());
        await driver.back();
    });



  
})
