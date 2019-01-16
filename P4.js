//Put the start of your program in a main function.
// Create an attendance array. Ask the user if a teacher, student, or parent is checking in.
// Use a switch statement to add the teacher/student/parent to the attendance array,
// then log the option they chose. Repeat this five times.

function main()
{

    attendence = [];
    console.log(attendence);
    var personCheckingIn = prompt("Are you a teacher, student, or parent checking in");

    switch (personCheckingIn)
    {
        case "teacher":
            attendence.push("teacher");
            break;
        case "student":
            attendence.push("student");
            break;
        case "parent":
            attendence.push("parent");
            break;

    }
for (var )
}
main();


// function mainThree(){
//     shirtsizes  = [];
//
//
//
//         var expr = prompt("Enter S, M, L, or XL");
//
//         switch (expr) {
//
//             case "S":
//                 shirtsizes.push("S");
//                 break;
//             case "M":
//                 shirtsizes.push("M");
//                 break;
//             case "L":
//                 shirtsizes.push("L");
//                 break;
//             case "XL":
//                 shirtsizes.push("XL");
//                 break;
//             default:
//                 console.log("ERROR");
//         }
//
//
// }
//
// mainThree();