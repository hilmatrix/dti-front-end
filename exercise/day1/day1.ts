export function day1() {
    task1();
    task2();
    task3();
    task4();
    task5();
}

function task1() {
    const length = 5;
    const width = 3;
    console.log(`Rectangle Area = ${length * width}`);
}

function task2() {
    const diameter = 5;
    console.log("Circle Circumference = " + 2*Math.PI*diameter);
    console.log(`Circle Area = ${Math.PI * diameter**2}`);
}

function task3() {
    const angleA = 80;
    const angleB = 65;
    console.log(`Angle C = ${(angleA - angleB)}`);
}

function task4() {
    const date1 = "2024-03-19";
    const date2 = "2024-03-21";
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
    console.log(`Days difference = ${dayDifference}`);
}

function task5() {
    const fullName = "Hilman Mauludin";
    const words = fullName.split(" ");
    const initials = words.map(word => word[0]).join("");
    console.log(`Initials = ${initials}`); 
}