var courselist = [
    {code: "ACIT 1620", class: "Fundamental Web Technologies"},
    {code: "MATH 1310", class: "Technical Math for IT"},
    {code: "ACIT 1515", class: "Scripting for IT" }];


var coursec;
do {
    coursec = prompt("Please enter a course code");
} while (coursec.length !== 4 || isNaN(Number(coursec))) 
var printed = false
for (let x in courselist) {
    if (courselist[x].code.includes(coursec)) {
        console.log(`Yes, I am taking this course: ${courselist[x].code} - ${courselist[x].class}`);
        printed =true
}
}
if (printed == false){
    let coursePrefix = "ABCD";
    courseFN = coursePrefix + coursec;
    courselist.push(courseFN);
    courselist[courselist.length-1] ={
        code:coursec,
        class:null,
};
    console.log("Success");
}
