Tinytest.add('facebook', function(test, dest) {
    if (Meteor.isClient) {
        let validUrl = socialMediaURL.parse("http://www.facebook.com/testUser", "LINKEDIN");
        let validId = socialMediaURL.parse("testUser", "FACEBOOK");
        test.equal(validId.hostname, validUrl.hostname);
        test.equal(validId.service, validUrl.service);
        test.equal(validId.href, validUrl.href);
        test.equal(validId.pathname, validUrl.pathname);
    }

});
Tinytest.add('linkedin', function(test, dest) {
    if (Meteor.isClient) {
        let validUrl = socialMediaURL.parse("http://www.linkedin.com/in/testUser", "TWITTER");
        let validId = socialMediaURL.parse("testUser", "LINKEDIN");
        test.equal(validId.hostname, validUrl.hostname);
        test.equal(validId.service, validUrl.service);
        test.equal(validId.href, validUrl.href);
        test.equal(validId.pathname, validUrl.pathname);
    }

});
Tinytest.add('twitter', function(test, dest) {
    if (Meteor.isClient) {
        let validUrl = socialMediaURL.parse("http://www.twitter.com/testUser", "FACEBOOK");
        let validId = socialMediaURL.parse("testUser", "TWITTER");
        test.equal(validId.hostname, validUrl.hostname);
        test.equal(validId.service, validUrl.service);
        test.equal(validId.href, validUrl.href);
        test.equal(validId.pathname, validUrl.pathname);
    }

});

Tinytest.add('isValidUrl', function(test, dest) {
    if (Meteor.isClient) {
        let stackURL = "http://stackoverflow.com/questions/1547899/which-characters-make-a-url-invalid";
        let minusScheme = "stackoverflow.com/questions/1547899/which-characters-make-a-url-invalid";
        let dave = "dave";
        let result = true;
        if (result) result = socialMediaURL.isUrl(stackURL);
        if (result) result = !socialMediaURL.isUrl(minusScheme);
        if (result) result = !socialMediaURL.isUrl(dave);
        test.equal(result, true);
    }
})