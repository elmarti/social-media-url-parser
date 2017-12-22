export default class Parser {
    constructor(output, type){
        this.output = output;
        this.type = type;
    }
    fromUrl(){

    }
    fromType(){
        this.output.userId = this.output.pathname.replace("/", "");
        return this.output
    }
}