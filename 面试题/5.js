function obj(name) {
    if (name) {

        return {
            name: name
        }
    }

    // if (name) {
    //     this.name = name;
    // }
    // return this;

}

obj.prototype.name = 'name2';
var a = obj("name1");
var b = new obj();
console.log(a.name)
console.log(b.name)
