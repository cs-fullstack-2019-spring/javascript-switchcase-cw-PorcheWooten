//Put the start of your program in a main function.
// Create an attendance array. Ask the user if a teacher, student, or parent is checking in.
// Use a switch statement to add the teacher/student/parent to the attendance array,
// then log the option they chose. Repeat this five times.

function main()
{
for (var i = 0; i <= 5; i++)
{

    attendence = [];
    console.log(attendence);
    var personCheckingIn = prompt("Are you a teacher, student, or parent checking in");

    switch (personCheckingIn) {
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
}
}
main();

