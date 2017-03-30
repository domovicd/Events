/**
 * Created by Ucenik on 30.3.2017..
 */
/**var ja = {
    ime:"Dario",
    prezime:"Domovic",
    mjst:"Samobor",
    rzrd:"3",
    skog:"2016/2017"
};
function ss() {
    ja.ime=document.getElementById("imee").value;
    ja.prezime=document.getElementById("przi").value;
    for (var i in ja) {
        console.log(ja[i]);
    }
}
var on=new Object(ja.ime,ja.prezime);
var ona=new Object();**/

/**var bob={
    age:30
};
var susan ={
    age:30
};
console.log(bob.age);
console.log(susan.age);
var setAge=function (newAge){
    this.age=newAge;
};
bob.setAge=setAge;
susan.setAge=setAge;
bob.setAge(20);
susan.setAge(20);
console.log(bob.age);
console.log(susan.age);**/
/**function   Rectangle(height,width) {
    this.height = height;
    this.width = width;
    this.calcArea = function () {
        return this.height * this.width;
    };
    this.calcPerimeter = function () {
        return ((2 * height) + (2 * width));
    };
}
var rex=new Rectangle(7,3);
var area=rex.calcArea();
var perimeter=rex.calcPerimeter();
console.log(area);
console.log(perimeter);**/


