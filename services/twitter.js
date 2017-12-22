import Parser from './parser';

export default class Twitter extends Parser{
    fromUrl(){
        this.output.twitterHandle = "@" + this.output.pathname.replace("/", "");
        this.output.userId = this.output.pathname.replace("/", "");
        return this.output
    }
}