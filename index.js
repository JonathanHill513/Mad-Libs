function createParagraph(){
    var wordOne = document.getElementById("wordOne").value;
    var wordTwo = document.getElementById("wordTwo").value;
    var wordThree = document.getElementById("wordThree").value;
    var wordFour = document.getElementById("wordFour").value;
    var wordFive = document.getElementById("wordFive").value;
    var wordSix = document.getElementById("wordSix").value;
    var wordSeven = document.getElementById("wordSeven").value;
    var wordEight = document.getElementById("wordEight").value;

    var paragraph = "<p>Today, every student has a computer small enough to fit into his " + wordOne + ". He can solve any math problem by simply pushing the computer's little " + wordTwo + ". Computers can add, multiply, divide, and " + wordThree + ". They can also " + wordFour + " better than a human. Some computers have " + wordFive + " and are " + wordSix + ". Others have screens that show all kinds of " + wordSeven + " and figures that are " + wordEight + ".</p>"

    document.getElementById("answer").innerHTML = paragraph;
}