let students = [

    {
        id: 1,
        name:"mahesh",
        class: 10,
        age: 19,
        grade: "A",
        marks:"87",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },

    {
        id: 2,
        name:"mahesh",
        class: 20,
        age: 18,
        grade: "B",
        marks:"99",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 3,
        name:"mahesh",
        class: 10,
        age: 20,
        grade: "c",
        marks:"46",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 4,
        name:"mahesh",
        class: 10,
        age: 33,
        grade: "d",
        marks:"88",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 5,
        name:"mahesh",
        class: 10,
        age: 18,
        grade: "c",
        marks:"56",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 6,
        name:"mahesh",
        class: 10,
        age: 18,
        grade: "A",
        marks:"78",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 7,
        name:"mahesh",
        class: 10,
        age: 18,
        grade: "D",
        marks:"99",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 8,
        name:"mahesh",
        class: 10,
        age: 18,
        grade: "A",
        marks:"38",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 9,
        name:"mahesh",
        class: 10,
        age: 18,
        grade: "D",
        marks:"60",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 10,
        name:"mahesh",
        class: 10,
        age: 18,
        grade: "A",
        marks:"55",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 11,
        name:"mahesh",
        class: 10,
        age: 18,
        grade: "C",
        marks:"50",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 12,
        name:"mahesh",
        class: 10,
        age: 18,
        grade: "A",
        marks:"98",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 13,
        name:"mahesh",
        class: 10,
        age: 19,
        grade: "C",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 14,
        name:"mahesh",
        class: 10,
        age: 18,
        grade: "A",
        marks:"95",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 15,
        name:"mahesh",
        class: 10,
        age: 18,
        grade: "A",
        marks:"90",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 16,
        name:"mahesh",
        class: 10,
        age: 18,
        grade: "A",
        marks:"77",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 17,
        name: "mahesh",
        class: 10,
        age: 18,
        grade: "C",
        marks:"67",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 18,
        name: "mahesh",
        class: 10,
        age: 18,
        grade: "A",
        marks:"99",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 19,
        name: "mahesh",
        class: 10,
        age: 18,
        grade: "C",
        marks:"73",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
    {
        id: 20,
        name: "mahesh",
        class: 10,
        age: 18,
        grade: "C",
        marks:"89",
        adress: {
            city: "hyd",
            state: "ts"
    
        }
    },
  

]
const marks = students.find(function (item1) {
    return item1.grade = 'B';})
console.log(marks)

 const grades = students.filter(function (item) {
    return item.marks <= '70';})
console.log(grades)



