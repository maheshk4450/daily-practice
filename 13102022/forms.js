let array = []
let a = document.querySelector("#btn");
a.addEventListener("click", submit);
let b = document.querySelector("#btn1");
b.addEventListener("click", play);
let c = document.querySelector("#btn2");
c.addEventListener("click", finds);
let d = document.querySelector("#btn3");
d.addEventListener("click", filters);
let e = document.querySelector("#btn4");
e.addEventListener("click", foreachh);
let f = document.querySelector("#btn5");
f.addEventListener("click", mapbtn);
function submit() {
    let object = {};
    object.roll = document.querySelector("#R").value;
    object.name = document.querySelector("#N").value;
    object.age = document.querySelector("#A").value;
    object.email = document.querySelector("#E").value;
    object.grade = document.querySelector("#G").value;
    object.mark = document.querySelector("#M").value;

    array.push(object);
}

function play() {
    console.log(array)

}
function finds() {
    const data = array.find(function (item1) {
        return item1.grade == 'B';
    })
    console.log(data)

}
function filters() {
    const filterdata = array.filter(function (item2) {
        return item2.mark >= 80;
    })
    console.log(filterdata)

}
function foreachh() {
    array.forEach(function (item3) {
        if (item3.mark <= 50)
            console.log(item3);



    })
}
function mapbtn() {
    let mapdata = array.map(function (item) {
        return item;

    })
    console.log(mapdata)


}
