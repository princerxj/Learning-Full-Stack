//this keyword is used to refer to an object which is executing the piece of code
const student = {
    name : "shradha",
    age : 23,
    eng : 89,
    maths : 98,
    phy : 97,
    getAvg() {
        let avg = (this.eng + this.maths + this.phy) / 3;
        console.log(`${this.name} got an average marks of ${avg}`);
    }
}