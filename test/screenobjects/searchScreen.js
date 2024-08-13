class SearchScreen{

    get TextFieldSearch(){
        return $('//*[@resource-id="searchTextField"]');
    }

    get Content(){
        return $ ('//*[@resource-id="search:newsResources"]');
    }//Topics

    get TopcisTitle(){
        return $('//*[@text="Topics"]');    
    }

    get UpdateTitle(){
        return $('//*[@text="Updates"]');    
    }

}
export default new SearchScreen();