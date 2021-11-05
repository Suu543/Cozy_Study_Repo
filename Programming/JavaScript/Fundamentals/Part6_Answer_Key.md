// Practice #1
let arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;
let sum2 = 0;

for (let i = 0; i < arr_1.length; i++) {
    sum = sum + arr_1[i] + arr_2[i];
}

for (let i = 0; i < arr_1.length; i++) {
    sum2 += arr_1[i]
    sum2 += arr_2[i];
}


console.log(sum);
console.log(sum2);

// Practice #2
let arr3 = [43, "what", 9, true, "cannot", false, "be", 3, true];
let reverse_order_arr3 = [];

for(let i = arr3.length - 1; i >= 0; i--) {
    reverse_order_arr3.push(arr3[i]);
}

console.log(reverse_order_arr3);

// Practice #3
let arr_4 = [1, 2, 3];
let arr_5 = [4, 5, 6];
let same_position = [];

for(let i = 0; i < arr_4.length; i++) {
    same_position[i] = arr_4[i] + arr_5[i];
}

console.log(same_position);

// Practice #4
let str = "helloworld";
let newStr = "";

for(let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
        newStr += 'Z'
    } else {
        newStr += str[i];
    }

    // Don't make this mistake...
    // newStr += str[i];
}

console.log(newStr);

// Practice #5
let n2 = 10;
let factorial_n2 = 1;
for (let i = 1; i <= n2; i++) {
    factorial_n2 *= i;
}

console.log(factorial_n2);

// Practice #6
let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
let marks_sum = 0;
let avgMarks = 0;

for (let i = 0; i < students.length; i++) {
    marks_sum += students[i][1];
}

avgMarks = marks_sum / students.length;

if (avgMarks < 60) {
    console.log("Average Grade: ", avgMarks);
    console.log("Grade: F")
} else if (avgMarks < 70) {
    console.log("Average Grade: ", avgMarks);
    console.log("Grade: D")
} else if (avgMarks < 80) {
    console.log("Average Grade: ", avgMarks);
    console.log("Grade: C")
} else if (avgMarks < 90) {
    console.log("Average Grade: ", avgMarks);
    console.log("Grade: B")
} else if (avgMarks < 100) {
    console.log("Average Grade: ", avgMarks);
    console.log("Grade: A")
}

