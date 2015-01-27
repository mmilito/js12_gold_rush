


$(document).on('ready', function() {

	var flagArray =[];
  
	$(document).on('click', function(e) { 
//loop thru array to see if XY pair already exists, if not, create otherwise remove
		// var tempArray=[e.pageX,e.pageY];
		var counter=0;

		for (i=0;i<flagArray.length;i++) {
			// console.log("i =", flagArray[i]);
			// console.log(tempArray);
			if ((flagArray[i][0] >= e.pageX-20 && flagArray[i][0]<=e.pageX+20)
				 &&
			  (flagArray[i][1] <= e.pageY+40 && flagArray[i][1] >= e.pageY)) {
				
				counter++;
				flagArray[i]=[];
				}
		}

		if (counter===0) {			
				
		//store data as array in array
			flagArray.push([e.pageX,e.pageY]);
			//
			//console.log(flagArray);

			$('body').append('<div class="flag"></div>');

			$('div:last').css({
				'left': e.pageX-10,
				'top': e.pageY-34
			});
		};

	}); // end ON click

	$(document).on('click','div',function() {
		 $(this).remove();		
	

	

	}); // end ON CLICK
 
}); // bottom of page 