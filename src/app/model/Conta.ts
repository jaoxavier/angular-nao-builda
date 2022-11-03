export { Conta };

class Conta{
    private firstName: string | undefined;
    private lastName: string | undefined;
    private CNH: string | undefined;

    constructor(name: string,  lname: string,  CNH: string){
        this.firstName = name;
        this.lastName = lname;
        this.CNH = CNH;
    }

    public getName(){
        return this.firstName;
    }
}