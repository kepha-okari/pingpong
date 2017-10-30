


	$("#menu-toggle").click(function(e) {
	    e.preventDefault();
	    console.log("click");
	    $("#wrapper").toggleClass("toggled");
	 });

$(document).ready(function() {
	$("form#ping").submit(function(e){

		var loopLimit = $("input#text-area").val();// to pick the limit from the input box

		var provitionalTotal = 0;                 //initialize the total

		var convertedLimit = parseInt(loopLimit);


		for (var i =1; i <=convertedLimit; i++) {

			if(i%3===0 && i%5!==0){                 // display number divisible only 3
				$(".verb").append(provitionalTotal);

			} else if(i%3!==0 && i%5===0) {         // display number divisible only 5
				$(".verb").append(provitionalTotal);

			} else if(i%15===0 ) {                 // display number divisible by 15
				$(".verb").append(provitionalTotal);

			} else {							// display numericals
				$(".verb").append(provitionalTotal);
			}
			
		}

		$("#showResult").show();
		e.preventDefault();
	});

  });

/*
 $(document).ready(function() {
        $("#blanks form").submit(function(event) {
          var person1Input = $("input#person1").val();
          var person2Input = $("input#person2").val();
          var animalInput= $("input#animal").val();
          var exclamationInput = $("input#exclamation").val();
          var verbInput = $("input#verb").val();
          var nounInput = $("input#noun").val();
          $(".person1").append(person1Input);
          $(".person2").append(person2Input);
          $(".animal").append(animalInput);
          $(".exclamation").append(exclamationInput);
          $(".verb").append(verbInput);
          $(".noun").append(nounInput);

          $("#story").show();

          event.preventDefault();
        });
      });
*/