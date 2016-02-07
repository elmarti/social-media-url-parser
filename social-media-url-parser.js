	socialMediaURL = {
		parse: function(input, type) {
			let output = {};
			//use regex to indentify is string is URL
			if (socialMediaURL.regXP.test(input)) {
				let linkData = document.createElement('a');

				linkData.href = input;
				console.log(linkData);
				output.href = input;
				output.type = "URL";
				output.service = linkData.hostname.replace(".com", "").replace("www.", "").toUpperCase();
				output.hostname = linkData.hostname;
				output.pathname = linkData.pathname;
				console.log(output);
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
					throw new Meteor.error(500, "Please enter a type if it's possible that it is not a URL.");
				else
					switch (type) {
						case "FACEBOOK":
							return {
								href: "https://www.facebook.com/" + input,
								type: "ID",
								service: type,
								hostname: "facebook.com",
								pathname: "/" + input,
								userId: input
							};
						case "LINKEDIN":
							return {
								href: "https://www.linkedin.com/in/" + input,
								type: "ID",
								service: type,
								hostname: "linkedin.com",
								pathname: "/in/" + input,
								userId: input
							};
						case "TWITTER":
							let twitterOutput = {
								href: "https://www.twitter.com/" + input.replace("@", ""),
								type: "ID",
								service: type,
								hostname: "twitter.com",
								pathname: "/" + input.replace("@", ""),
								userId: input
							};
							if (input.indexOf("@") === -1)
								twitterOutput.twitterHandle = "@" + input;
							return twitterOutput;
					}
			}
		},
	}
	socialMediaURL.regXP = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;