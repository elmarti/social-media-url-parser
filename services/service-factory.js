import Facebook from './facebook';
import LinkedIn from './linkedin';
import Twitter from './twitter';


export default class ServiceFactory {
    getParser(input, type){
        const output = {};
        if(type === undefined){
            const linkData = document.createElement('a');
            linkData.href = input;
            output.href = input;
            output.type = "URL";
            output.service = linkData.hostname.replace(".com", "").replace("www.", "").toUpperCase();
            output.hostname = linkData.hostname;
            output.pathname = linkData.pathname;
            switch (output.service) {
                case "FACEBOOK":
                    const facebook = new Facebook(output);
                    return facebook.fromUrl();
                case "LINKEDIN":
                    const linkedIn = new LinkedIn(output);
                    return linkedIn.fromUrl();
                case "TWITTER":
                    const twitter = new Twitter(output);
                    return twitter.fromUrl();
                default:
                    return "ERROR";

            }
        } else {
            if(type === undefined){
                throw new Error("Input provided is not a URL, please provide a type");
            }


        }
    }
}