var newTargetNumber = {
    targetNumber: Math.floor(Math.random() * 120) + 19,
    counter: 0
}


var wins = newFunction();
var losses = 0;


var imgSuffix = 0;
var rupees = [9, 3, 6, 12];


for (var i = 0; i < rupees.length; i++) {
    
    var gemImage = $('<div class="col gem"> <img src="assets/images/rupee' + imgSuffix++ + '.png" data-value=' + rupees[i] + ' /></div>')
    $(".gem-wrapper").append(gemImage);

    function shuffle(rupees) {
        for (let t = rupees.length - 1; t > 0; t--) {
            const l = Math.floor(Math.random() * (t + 1));
            [rupees[t], rupees[l]] = [rupees[l], rupees[t]];
        }
        return rupees;
    }

}




$(".gem img").on("click", function () {
    
    var gemValue = $(this).attr("data-value");
    
    gemValue = parseInt(gemValue);
    newTargetNumber.counter += gemValue;
    
    $(".counter").text("Your Count: " + newTargetNumber.counter);
    
    if (newTargetNumber.counter === newTargetNumber.targetNumber) {
        
        wins++;
        shuffle(rupees);
        
        $(".wins").text("Your Wins: " + wins);
        
        newTargetNumber.targetNumber = Math.floor(Math.random() * 120) + 19;
        newTargetNumber.counter = 0;
        
        $("#number-to-guess").text(newTargetNumber.targetNumber);
        $(".counter").text("Your Count: " + newTargetNumber.counter);
        
        alert("You Win!\n\nPlay again?")
    } else if (newTargetNumber.counter > newTargetNumber.targetNumber) {
        
        losses++;
        
        shuffle(rupees);
        
        $(".losses").text("Your Losses: " + losses);
        
        newTargetNumber.targetNumber = Math.floor(Math.random() * 120) + 19;
        newTargetNumber.counter = 0;
        
        $("#number-to-guess").text(newTargetNumber.targetNumber);
        $(".counter").text("Your Count: " + newTargetNumber.counter);
        
        alert("You lose! Try again!");
    }

})

function newFunction() {
    $("#number-to-guess").text(newTargetNumber.targetNumber);
    var wins = 0;
    return wins;
}