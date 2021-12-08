class Question {
    constructor(text, option1, option2, option3, option4, rightAnswer) {
        this.text = text;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;

        this.rightAnswer = rightAnswer;
    }
}

let question1 = "Which of the following language is platform dependent?";
var q1_o1 = "C";
var q1_o2 = "Java";
var q1_o3 = "Python";
var q1_o4 = "Kotlin";
var q1_rightAnswer = "C";

let question2 = "Which language uses '#' to comment?";
var q2_o1 = "C";
var q2_o2 = "Java";
var q2_o3 = "Python";
var q2_o4 = "Kotlin";
var q2_rightAnswer = "Python";

let question3 = "How Single line comment is done in C?";
var q3_o1 = "/* */";
var q3_o2 = "##";
var q3_o3 = "//";
var q3_o4 = "\\\\";
var q3_rightAnswer = "//";

let question4 = "Which of the following Data Structure has a push() and pop() operation?";
var q4_o1 = "Graph";
var q4_o2 = "Map";
var q4_o3 = "Stack";
var q4_o4 = "Queue";
var q4_rightAnswer = "Stack";

let question5 = "What is the time complexity of BFS in graphs?";
var q5_o1 = "O(VE)";
var q5_o2 = "O(V)";
var q5_o3 = "O(V^3)";
var q5_o4 = "O(V+E)";
var q5_rightAnswer = "O(V+E)";

var q1 = new Question(question1, q1_o1, q1_o2, q1_o3, q1_o4, q1_rightAnswer);
var q2 = new Question(question2, q2_o1, q2_o2, q2_o3, q2_o4, q2_rightAnswer);
var q3 = new Question(question3, q3_o1, q3_o2, q3_o3, q3_o4, q3_rightAnswer);
var q4 = new Question(question4, q4_o1, q4_o2, q4_o3, q4_o4, q4_rightAnswer);
var q5 = new Question(question5, q5_o1, q5_o2, q5_o3, q5_o4, q5_rightAnswer);

var questions = [q1, q2, q3, q4,q5];