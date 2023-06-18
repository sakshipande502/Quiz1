var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Which one of the following is used to represent the supporting many-one relationships of a weak entity set in an entity-relationship diagram?",
    "options": [
    {
    "a": "Rectangles with Double/Bold border",
    "b": "Diamonds with Double/Bold border",
    "c": "ovals that contain underliined identifiers",
    "d": "ovals with Double/Bold border",
    }
    ],
    "answer": "Diamonds with Double/Bold border",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which of the following is NOT a superkey in a relational schema with attributes V,W,X,Y,Z and primary key VY?",
    "options": [
    {
    "a": " VXYZ",
    "b": "VWXZ",
    "c": "VWXY",
    "d":"VWXYZ"
    }
    ],
    "answer": "VWXZ",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "A B-Tree used as an index for a large database table has four levels including the root node. If a new key is inserted in this index, then the maximum number of nodes that could be newly created in the process are:",
    "options": [
    {
    "a": "5",
    "b": "4",
    "c": "3",
    "d":"2",
    }
    ],
    "answer": "5",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Amongst the ACID properties of a transaction, the 'Durability' property requires that the changes made to the database by a successful transaction persist",
    "options": [
    {
    "a": "Except in case of an operating system",
    "b": "Except in case of a Disk crash",
    "c":"Except in case of a power failure",
    "d":"Always,even if there is a failure of any kind",

    }
    ],
    "answer": "Always,even i there is a failure of any kind",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which level of locking provides the highest degree of concurrency in a relational database?",
    "options": [
    {
    "a": "Page",
    "b": "Table",
    "c": "Row",
    "d": "Page,table and row locking allow the same degree of concurrency",
    }
    ],
    "answer": "Row",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which normal form is considered adequate for normal relational database design?",
    "options": [
    {
    "a": "2NF",
    "b": "5NF",
    "c": "4NF",
    "d":"3NF",
    }
    ],
    "answer": "3NF",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "A file is organized so that the ordering of data records is the same as or close to the ordering of data entries in some index. Then that index is called    ",
    "options": [
    {
    "a": "Dense",
    "b": "Sparse",
    "c": "Clustered",
    "d":"Unclustered",
    }
    ],
    "answer": "Clustered",
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
    "question": "Consider a B+- tree in which the maximum number of keys in a node is 5. What is the minimum number of keys in any non-root node?",
    "options": [
    {
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4"
    }
    ],
    "answer": "2",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "A clustering index is defined on the fields which are of type? ",
    "options": [
    {
    "a": "non key and ordering",
    "b": "non-key and non-ordering",
    "c": "key and ordering",
    "d": "key and non-ordering",
    }
    ],
    "answer": "non-key and ordering",
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