var rs = require("readline-sync");
var score = 0;
var level = 1;
var roundscore = 0;
var temp=0;

//First Level
var levelOne = [
  {
    question: "How many league titles have Manchester United won?",
    options: ["13", "17", "20", "23"],
    answer: 3
  },
  {
    question: "Who is Manchester United's all time highest goalscorer?",
    options: ["Wayne Rooney", "Ryan Giggs", "Denis Law", "Bobby Charlton"],
    answer: 1
  },
  {
    question: "Who is Manchester United's all-time most expesive player?",
    options: ["Harry Maguire", "Jadon Sancho", "Romelu Lukaku", "Paul Pogba"],
    answer: 4
  }];

//Second Level
var levelTwo = [
  {
    question: "Before being called Manchester United, the club was known by what name?",
    options: ["Newton United", "Stretford Reds", "Newton Reds", "Newton Heath"],
    answer: 4
  },
  {
    question: "Which players holds the record for the most appearances",
    options: ["Ryan Giggs", "Bryan Robson", "Paul Scholes", "Bobby Charlton"],
    answer: 1
  },
  {
    question: "The players who progressed to Manchester United's first team under Matt Busby were known as",
    options: ["Busby kids", "Busby fledglings", "Busby boys", "Busby babes"],
    answer: 4
  }]



//Third Level
var levelThree = [

  {
    question: "When was Manchester United formed",
    options: ["1878", "1890", "1872", "1887"],
    answer: 1
  },
  {
    question: "Which player holds distinction of being Manchester United's longest serving captain?",
    options: ["Ryan Giggs", "Bryan Robson", "Roy Keane", "Bobby Charlton"],
    answer: 2
  },
  {
    question: "Who were Manchester United's opponents in the first game at Old Trafford?",
    options: ["Liverpool", "Chelsea", "Bristol City", "Arsenal"],
    answer: 1
  }];

function start() {
  console.log("WELCOME TO THE QUIZ ABOUT MANCHESTER UNTIED \n");

  var userName = rs.question("Are you ready to test your knowledge? \n\nLET'S GO!!!!!!!\n\nEnter your name:")

  console.log("Okay " + userName + ", here are the rules:\n")
  console.log(" * The quiz will have 3 levels with 3 questions each! *");
  console.log(" * Each right answer will earn you one point *");
  console.log(" * Wrong answer or skipping the question will not reward you with points *");
  console.log(" * Two questions must atleast be right in each level to qualify for the subsequent level\n");

  console.log("-----------------------\n");
  rs.keyInPause(" LET'S GO! ");
  askQues(levelOne);
}

function askQues(questions) {
  for (var i = 0; i < questions.length; i++) 
  {
    var currentQues = questions[i];
    checkAns(currentQues.question, currentQues.options, currentQues.answer);
  }
  
  roundscore= score - temp;
  temp = temp + roundscore;
  levelCheck(roundscore);
  level++;
}

function checkAns(questions, options, answers) {
  var userAns = rs.keyInSelect(options, questions, { cancel: 'Skip' })

  if (userAns == -1) {
    console.log("No points for skipping!")
  }
  else if (userAns + 1 == answers) {
    console.log("That's right!");
    score++;
  }
  else {
    console.log("Oops, that's incorrect!");
  }
console.log( "-----------------------\n" );
console.log( " SCORE: " + score + "/9");
}


function levelCheck(rscore)
{
  if( level==1 && rscore >1 )
  {
    console.log("This round score is", rscore)
    level++;
    console.log("\nCongratulations, you have advanced to the next level")
    console.log("\n---------------------------------")
    rs.keyInPause("\n\n LET'S BEGIN LEVEL 2?")
    askQues(levelTwo);
  }

  if( level==2 && rscore >1 )
  {
    console.log("This round score is", rscore)
    level++;
    console.log("\nCongratulations, you have advanced to the next level")
    console.log("\n---------------------------------")
    rs.keyInPause("\n\n LET'S BEGIN LEVEL 3?")
    askQues(levelThree);
  }

  if( level==3)
  {
   console.log("This round score is", rscore) 
   console.log("Congratulations, you have successfully completed the quiz")
   reset(); 
  }

     
  
  else
  {
    console.log("This round score is", rscore)
    console.log("Oops! You need a higher score to qualify for the next level!");

    reset();
  }
}

function reset()
{
  score=0;
  temp=0;
  roundscore=0;
  level=1;
  rs.keyInPause(" >> Start again?");
  console.clear();
  start();
}


start();









