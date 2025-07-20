const student ={
    name: "Arushi",
    age: 14,
    subjects: ["Artificial Intelligence", "Computer science"],
};

const studentJSON=JSON.stringify(student);
console.log("JSON Format:", studentJSON);

const studentObj =JSON.parse(studentJSON);
console.log("JavaScript Object:", studentObj.name);