import GoogleSearch from '../pages/GoogleSearch';
import { Then } from "cucumber";

// GoogleSearch page instance
const googleSearch = new GoogleSearch();


Then(/^I clear search textbox$/, () => {
    return googleSearch.searchTextBoxAfterSearch.clear();
});

Then('I validate {string} page', function (string, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

