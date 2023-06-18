var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Two matrices M1 and M2 are to be stored in arrays A and B respectively. Each array can be stored either in row-major or column-major order in contiguous memory locations. The time complexity of an algorithm to compute M1 X M2 will be",
    "options": [
    {
    "a": "Best if A is in row-major and B is in column-major order",
    "b": "Best if both are in row-major order",
    "c": "Best if both are in column-major order",
    "d": "Independent of the storage scheme",
    }
    ],
    "answer": "Independent o the storage scheme",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Let A be a two dimensional array declared as follows:A : array [ 1... 10] [1... 15] of integer;  Assuming that each integer takes one memory locations the array is stored in row-major order and the first element of the array is stored at location 100, what is the address of the element A[i] [j]?",

    "options": [
    {
    "a": "15i+j+84",
    "b": "15j+i+84",
    "c": "10i+j+89",
    "d":"10j+i+89"
    }
    ],
    "answer": "15j+i+84",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "The result evaluating the postfix expression  10 5 + 60 6/*8- is",
    "options": [
    {
    "a": "284",
    "b": "213",
    "c": "142",
    "d":"71",
    }
    ],
    "answer": "142",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "A function f defined on stacks of integers satisfies the following properties. f(∅) = 0 and f (push (S, i)) = max (f(S), 0) + i for all stacks S and integers i. If a stack S contains the integers 2, -3, 2, -1, 2 in order from bottom to top, what is f(S)?",
    "options": [
    {
    "a": "6",
    "b": "4",
    "c":"3",
    "d":"2",

    }
    ],
    "answer": "3",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "The best data structure to check whether an arithmetic expression has balanced parentheses is a",
    "options": [
    {
    "a": "queue",
    "b": "stack",
    "c": "tree",
    "d": "list",
    }
    ],
    "answer": "stack",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which of the following is essential for converting an infix expression to the postfix form efficiently?",
    "options": [
    {
    "a": "AN operator stack",
    "b": "An operand stack",
    "c": "An operand stack and an operator stack",
    "d":"A parse tree",
    }
    ],
    "answer": "An operator stack",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Suppose we are given n keys, m has table slots, and two simple uniform hash functions h1 and h2. Further suppose our hashing scheme uses h1 for the odd keys and h2 for the even keys. What is the expected number of keys in a slot?",
    "options": [
    {
    "a": "m/n",
    "b": "n/m",
    "c": "2n/m",
    "d":"n/2m",
    }
    ],
    "answer": "n/m",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "A hash table contains 10 buckets and uses linear probing to resolve collisions. The key values are integers and the hash function used is key % 10. If the values 43, 165, 62, 123, 142 are inserted in the table, in what location would the key value 142 be inserted?",
    "options": [
    {
    "a": "2",
    "b": "3",
    "c": "4",
    "d": "6",
    }
    ],
    "answer": "6",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "An advantage of chained hash table (external hashing) over the open addressing scheme is",
    "options": [
    {
    "a": "Worst case complexity o search operations is less",
    "b": "Space used is less",
    "c": "Deletion is easier",
    "d": "None of the above"
    }
    ],
    "answer": "Deletion is easier",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "The height of a tree is the length of the longest root-to-leaf path in it. The maximum and minimum number of nodes in a binary tree of height 5 are",
    "options": [
    {
    "a": "63 and 6,respectively",
    "b": "64 and 5,repectively",
    "c": "32 and 6,respectively",
    "d": "31 and 5,respectively",
    }
    ],
    "answer": "63 and 6,respectively ",
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