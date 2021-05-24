class GoogleSearch{
    constructor(){
        this.searchTextBox = $("input[title='Search']");
        this.searchButton = element(by.xpath("*//div[3]/center/input[1]"));
        this.searchTextBoxAfterSearch = element(by.xpath('//*[@id="tsf"]/div[1]/div[1]/div[2]/div/div[2]/input'));
    }
}

export default GoogleSearch;
