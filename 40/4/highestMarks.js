function highestMarks(marks) {
    let highest = marks[0];
    marks.forEach(mark => {
        highest = mark > highest ? mark : highest;
    });
    console.log("Highest Marks: " + highest);
}
