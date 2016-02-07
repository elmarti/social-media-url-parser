	socialMediaURL = { 
		parse : function(input, type){
			let output = {};
			//use regex to indentify is string is URL
			if(socialMediaURL.regXP.test(input)){
				let linkData = document.createElement('a');
				linkData.href=input;
				output.type = "URL";
				output.service = linkData.hostname.replace(".com", "").toUpperCase();
				output.hostname = linkData.hostname;
				output.pathname = linkData.pathname;
				
				switch(output.service){
					case "FACEBOOK":
					output.userId = output.pathname.replace("/","");
					break;
					case "LINKEDIN":
					output.linkedinStyle = output.pathname;
					output.userId =  output.pathname.replace("/in/","");
					break;
					case "TWITTER":
					output.twitterHandle = "@" + output.pathname.replace("/","");
					output.userId = output.pathname.replace("/","");
					break;

				}
				return output;
			}
			else
			{
				if(!type)
					throw new Meteor.error(500, "Please enter a type if it's possible that it is not a URL.");
				else
					 switch(type){
						case "FACEBOOK":
						return "https://www.facebook.com/"+ input;
						case "LINKEDIN":
						return "https://www.linkedin.com/in/"+ input;
						break;
						case "TWITTER":
						input.replace("@","");
						return "https://www.twitter.com/" + input; 
					}
				}
			},
		}
		socialMediaURL.regXP = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; 