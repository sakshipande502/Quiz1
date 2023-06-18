/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Let R be the set of all binary relations on the set {1,2,3}. Suppose a relation is chosen from R at random. The probability that the chosen relation is reflexive (round off to 3 decimal places) is ____.",
    "options": [
    {
    "a": "0.125",
    "b": "0.150",
    "c": "0.175",
    "d": "0.200",
    }
    ],
    "answer": "0.125",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Let G be a group of 35 elements. Then the largest possible size of a subgroup of G other than G itself is _____.",

    "options": [
    {
    "a": " 7",
    "b": "9",
    "c": "1",
    "d":"0"
    }
    ],
    "answer": "7",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Let 𝑅 be the relation on the set of positive integers such that aR if and only if 𝑎 and 𝑏 are distinct and have a common divisor other than 1. Which one of the following statements about 𝑅 is true?",
    "options": [
    {
    "a": "R is symmetric and reflexive but not transitive",
    "b": "R is reflexive but not symmetric and not transitive",
    "c": "R is transitive but not reflexive and not symmetric",
    "d":"R is symmetric but not reflexive and not symmetric",
    }
    ],
    "answer": "R is symmetric but not reflexive and not symmetric",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Let S be a set of n elements. The number of ordered pairs in the largest and the smallest equivalence relations on S is _______.",
    "options": [
    {
    "a": "n and n",
    "b": "n2 and n",
    "c":"n2 and 0",
    "d":"n and 1",

    }
    ],
    "answer": "n2 and n",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "The set {1,2,4,7,8,11,13,14} is a group under multiplication modulo 15. The inverse of 4 and 7 are respectively:",
    "options": [
    {
    "a": "3 and 13",
    "b": "2 and 11",
    "c": "4 and 13",
    "d": "8 and 14",
    }
    ],
    "answer": "4 and 13",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "The number of functions from an m element set to an n element set is ________.",
    "options": [
    {
    "a": "m+n",
    "b": "m^n",
    "c": "n^m",
    "d":"m*n",
    }
    ],
    "answer": "n^m",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "If two fair coins are flipped and at least one of the outcomes is known to be a head, what is the probability that both outcomes are heads?",
    "options": [
    {
    "a": "1/3",
    "b": "1/4",
    "c": "1/2",
    "d":"2/3",
    }
    ],
    "answer": "1/3",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Suppose there are two coins. The first coin gives heads with probability 5/8 when tossed, while the second coin gives heads with probability 1/4. On e of the two coins is picked up at random with equal probability and tossed. What is the probability of obtaining heads?",
    "options": [
    {
    "a": "7/8",
    "b": "1/2",
    "c": "7/16",
    "d": " 5/32",
    }
    ],
    "answer": "7/16",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Consider a simple undirected unweighted graph with at least three vertices. If A is the adjacency matrix of the graph, then the number of 3-cycles in the graph is given by the trace of",
    "options": [
    {
    "a": "a3",
    "b": "a3 divided by 2",
    "c": "a3 divided by 3",
    "d": "a3 divided by 6"
    }
    ],
    "answer": "a3 divided by 6",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "What is the converse of the following assertion?     I stay only if you go",
    "options": [
    {
    "a": "I stay if you go",
    "b": "If I stay then you go",
    "c": "If you do not then I do not stay",
    "d": "If i do not stay I do not stay",
    }
    ],
    "answer": "If I stay then you go ",
    "score": 0,
    "status": ""
    }
   
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });