//declare a variable getGrade
function getGrade(marks) {
    // Use if statement to check whether the marks entered is between 0 and 100
    if (marks < 0 || marks > 100) {
       console.log("Kindly enter marks between 0 and 100.");
       } else {
          let grades;
          if (marks > 79) {
                return "The student's grade is: A"; //if marks is greater than 79 print A
            } else if (marks >= 60 && marks <= 79) {     
              return "The student's grade is: B";   //if marks is between 60 and 79 print B
          } else if (marks >= 50 && marks <= 59) {
            return "The student's grade is: C";  //if marks is between 50 and 59 print C
           } else if (marks >= 40 && marks <= 49) {
            return "The student's grade is: D";  //if marks is between 40 and 49 print D
          } else {
               return "The student's grade is: E";  //if marks is less than 40 print E
             }
      }
     }

     console.log(getGrade(80))
     console.log(getGrade(60))
     console.log(getGrade(50))
     console.log(getGrade(40))
     console.log(getGrade(30))
     console.log(getGrade(110))
     console.log(getGrade(-1))