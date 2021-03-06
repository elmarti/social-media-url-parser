import factory from './services/service-factory';

socialMediaURL = new class SocialMediaUrl {
  parse(input, type){
      const output = {};
      if (this.isUrl(input)) {
          const parser = factory.getParser(input);
      } else {
          if(type === undefined){
              throw new Error("Please enter a type if it's possible that the input is not a URL.")
          }
      }
  }
  isUrl(input){
      const urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
      const url = new RegExp(urlRegex, 'i');
      return input.length < 2083 && url.test(input);
  }
};

socialMediaURL = {
    parseURL: (URL) => {
        let prefix = 'http://';
        if (s.substr(0, prefix.length) !== prefix) {
            s = prefix + s;
        }
    },
    parse: function (input, type) {
        let output = {};
        //use regex to indentify is string is URL
        if (socialMediaURL.isUrl(input)) {
            let linkData = document.createElement('a');
            linkData.href = input;
            output.href = input;
            output.type = "URL";
            output.service = linkData.hostname.replace(".com", "").replace("www.", "").toUpperCase();
            output.hostname = linkData.hostname;
            output.pathname = linkData.pathname;
            switch (output.service) {
                case "FACEBOOK":
                    output.userId = output.pathname.replace("/", "");
                    break;
                case "LINKEDIN":
                    output.userId = output.pathname.replace("/in/", "");
                    break;
                case "TWITTER":
                    output.twitterHandle = "@" + output.pathname.replace("/", "");
                    output.userId = output.pathname.replace("/", "");
                    break;
                default:
                    return "ERROR";

            }
            return output;
        }
        else {
            if (!type)
                throw new Meteor.error(500, );
            else
                switch (type) {
                    case "FACEBOOK":
                        return {
                            href: "https://www.facebook.com/" + input,
                            type: "ID",
                            service: type,
                            hostname: "www.facebook.com",
                            pathname: "/" + input,
                            userId: input
                        };
                    case "LINKEDIN":
                        return {
                            href: "https://www.linkedin.com/in/" + input,
                            type: "ID",
                            service: type,
                            hostname: "www.linkedin.com",
                            pathname: "/in/" + input,
                            userId: input
                        };
                    case "TWITTER":
                        let twitterOutput = {
                            href: "https://www.twitter.com/" + input.replace("@", ""),
                            type: "ID",
                            service: type,
                            hostname: "www.twitter.com",
                            pathname: "/" + input.replace("@", ""),
                            userId: input
                        };
                        if (input.indexOf("@") === -1)
                            twitterOutput.twitterHandle = "@" + input;
                        return twitterOutput;
                }
        }
    }
};

Meteor.socialMediaURL = socialMediaURL;