function calculateGrade(){
    var stname = document.getElementById("studentName").value;
    var regno = document.getElementById("regNumber").addEventListener("input", function(){
    this.value = this.value.toUpperCase();
});

    // Regex pattern
var regPattern = /^[A-Za-z]{2}[0-9]{4}$/;

if (!regPattern.test(regno)) {
    alert("Registration number must be 2 alphabets followed by 4 numbers (Example: AB1234)");
    return;
}

    var sub1 = parseFloat(document.getElementById("subject1").value);
    var sub2 = parseFloat(document.getElementById("subject2").value);
    var sub3 = parseFloat(document.getElementById("subject3").value);

     // ✅ Validation
    if (isNaN(sub1) || isNaN(sub2) || isNaN(sub3)) {
        alert("Please enter valid numeric marks only!");
        return;
    }

    // ✅ Range Validation (optional but professional)
    if (sub1 < 0 || sub1 > 100 || sub2 < 0 || sub2 > 100 || sub3 < 0 || sub3 > 100) {
        alert("Marks must be between 0 and 100!");
        return;
    }

    var obtainedMarks = sub1 + sub2 + sub3;
    var totalMarks = 300;
    var percentage = (obtainedMarks/totalMarks)*100;
    var grade = getGrade(percentage);

    var resultSection = document.getElementById("resultSection");
    resultSection.innerHTML = '';
    resultSection.innerHTML += '<p><strong>Name :</strong>' +  stname + '</p>';
    resultSection.innerHTML += '<p><strong>Registration Number :</strong>' + regno + '</p>';
    resultSection.innerHTML += '<p><strong>Total Marks :</strong>' + obtainedMarks.toFixed(2) + '</p>';
    resultSection.innerHTML += '<p><strong>Percentage :</strong> ' + percentage.toFixed(2) + '%</p>';
    resultSection.innerHTML += '<p><strong>Grade :</strong>' + grade + '</p>';
}

function getGrade(percentage){
    if(percentage >= 90) return 'A+';
    else if(percentage >= 80) return 'A';
    else if(percentage >= 70) return 'B';
    else if(percentage >= 60) return 'C';
    else if(percentage >= 50) return 'D';
    else return 'F';}