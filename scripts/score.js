var scoreText = document.getElementById("score_heading");
var homeButton = document.getElementById("head_to_home");
var score = localStorage.getItem("score");
var noOfQuestions = localStorage.getItem("noOfQuestions");

scoreText.innerHTML = "Your Score is " + score + "/" + noOfQuestions;
console.log(score);
homeButton.onclick = () => {
    location.href = "index.html";
}