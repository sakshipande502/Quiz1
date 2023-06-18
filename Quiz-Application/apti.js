/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "A box contains five balls of same size and shape. Three of them are green coloured balls and two of them are orange coloured balls. Balls are drawn from the box one at a time. If a green ball is drawn, it is not replaced. If an orange ball is drawn, it is replaced with another orange ball.First ball is drawn. What is the probability of getting an orange ball in the next draw?",
    "options": [
    {
    "a": "1/2",
    "b": "2/25",
    "c": "19/50",
    "d": "23/50",
    }
    ],
    "answer": "&lt;23/50&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "In a recently conducted national entrance test, boys constituted 65% of those who appeared for the test. Girls constituted the remaining candidates and they accounted for 60% of the qualified candidates.Which one of the following is the correct logical inference based on the information provided in the above passage?",

    "options": [
    {
    "a": " Equal number of boys and girls qualified",
    "b": "Equal number of boys and girls appeared for the test",
    "c": "The number of boys who appeared for the test is less than the number of girls who appered",
    "d":"The number of boys who qualified the test is less than the number of girls who qualified"
    }
    ],
    "answer": "The number of boys who qualified the test is less than the number of girls who qualified",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Let r be a root of the equation x2 + 2x + 6 = 0. Then the value of the expression (r + 2) (r + 3) (r + 4) (r + 5) is",
    "options": [
    {
    "a": "51",
    "b": "-51",
    "c": "126",
    "d":"-126",
    }
    ],
    "answer": "-126",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "If θ is the angle, in degrees, between the longest diagonal of the cube and any one of the edges of the cube, then cosθ = _______",
    "options": [
    {
    "a": "1/ √3",
    "b": "1/2",
    "c":"1/ √2",
    "d":" √3/2",

    }
    ],
    "answer": "1/ √3",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "The ratio of boys to girls in a class is 7 to 3. Among the options below, an acceptable value for the total number of students in the class is :",
    "options": [
    {
    "a": "37",
    "b": "50",
    "c": "21",
    "d": "73",
    }
    ],
    "answer": "50",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Two cars start at the same time from the same location and go in the same direction. The speed of the first car is 50 Km/h and the speed of the second car is 60 Km/h. The number of hours it takes for the distance between the two cars to be 20 km is _______.",
    "options": [
    {
    "a": "3",
    "b": "2",
    "c": "1",
    "d":"6",
    }
    ],
    "answer": "2",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Ten freiends planned to share equally the cost of buying a gift for their teacher. When two of them decided not to contribute, each of the other friends had to pay Rs 150 more. The cost of the gift was Rs. ___________.",
    "options": [
    {
    "a": "666",
    "b": "12000",
    "c": "6000",
    "d":"3000",
    }
    ],
    "answer": "6000",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "What is the missing number in the following sequence?   2,12,60,240,720,1440,___,0",
    "options": [
    {
    "a": "2880",
    "b": "1440",
    "c": "720",
    "d": " 0",
    }
    ],
    "answer": "1440",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What would be the smallest natural number which when divided either by 20  or 42 by 76 or by  leaves a remainder of 7 in each case?",
    "options": [
    {
    "a": "3047",
    "b": "6047",
    "c": "7987",
    "d": "63847"
    }
    ],
    "answer": "7987",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Among 150 faculty members in an institute, 55 are connected with each other through Facebook® and 85 are connected through WhatsApp®. 30 faculty members do not have Facebook® or whatsApp®  accounts. The number of faculty members connected only through Facebook® accounts is",
    "options": [
    {
    "a": "35",
    "b": "45",
    "c": "65",
    "d": "90",
    }
    ],
    "answer": "35",
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
