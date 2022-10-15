

let a = document.querySelector("#btn")
a.addEventListener("click", fun1)
let b = document.querySelector("#btn1")
b.addEventListener("click", fun2)
let c = document.querySelector("#btn2")
c.addEventListener("click", find)
let d = document.querySelector("#btn3")
d.addEventListener("click", filter)
let e = document.querySelector("#btn4")
e.addEventListener("click", foreacha)
let f = document.querySelector("#btn5")
f.addEventListener("click", mapbtn)

let array = []

function fun1() {

    let objects = {};
    objects.carmodel = document.querySelector("#C").value
    objects.brand = document.querySelector("#B").value
    objects.capacity = document.querySelector("#S").value
    objects.fuel = document.querySelector("#F").value
    objects.registrationyear = document.querySelector("#R").value
    array.push(objects)

}
function fun2() {
    console.log(array)
}
function find() {
    const data = array.find(function (item) {
        return item.carmodel == 'A';
    })
    console.log(data)
}
function filter() {
    const filterdata = array.filter(function (item) {
        return item.capacity > 4;
    })
    console.log(filterdata)
}
function foreacha() {
    array.forEach(function (item) {
        if (item.registrationyear > '2022-10-01') console.log(item)
    })

}
function mapbtn() {
    let mapdata = array.map(function (item) {
        return item;

    });
    let mapdata1=mapdata.filter(function(item){
        return item.model="13";
    })
console.log(mapdata1)
}