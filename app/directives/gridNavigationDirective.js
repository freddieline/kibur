app.directive('myEnter',function(){
	return function (scope, element, attrs){
		element.bind("keydown keypress",function (event){

			var id = document.activeElement.id;
			var maxColumns =  document.getElementById('grid1').rows[0].cells.length - 1;
			var maxRows = maxColumns;
			var numMatched = 0;
			var maxMatched = (maxColumns + 1) * (maxColumns + 1);
			var currCell;
			var c;
			var newIndex;
			var gridID = document.getElementById('gridID').innerHTML;
			var linkFocus = $("a:focus");
			var resetSound = new Audio('app/sound/reverb.mp3');
			var successSound = new Audio('app/sound/success.mp3');
			var navSound = new Audio('app/sound/click.mp3');
			var shiftSound = new Audio('app/sound/insect.mp3');

			//only allow arrow navigation if grid is focussed
			
			if (event.which == 39) {
				if(!linkFocus.length>0){
			        // Right Arrow
			       	if(scope.currentColumn==maxColumns){  			
			       		newIndex = scope.currentRow.toString() + (0).toString();
			        	c = document.getElementById(newIndex);
			       	}
			       	else{
			       		newIndex = scope.currentRow.toString() + (scope.currentColumn+1).toString();
			        	c = document.getElementById(newIndex);
			       	}
			        navSound.play();
		   		}
		    } else if (event.which == 37) { 
		        // Left Arrow
		        if(!linkFocus.length>0){
			        if(scope.currentColumn==0){	
			       		newIndex = scope.currentRow.toString() + maxColumns.toString();
			        	c = document.getElementById(newIndex);
			       	}
			       	else{
			        	newIndex = scope.currentRow.toString() + (scope.currentColumn-1).toString();
			        	c = document.getElementById(newIndex);
			    	}
			    	navSound.play();
		    	}
		    } else if (event.which == 38) { 
		        // Up Arrow
		        if(!linkFocus.length>0){
			        if(scope.currentRow == 0){  	
			        	newIndex = maxRows.toString() + scope.currentColumn.toString();
			        	c = document.getElementById(newIndex);
			       	}
			       	else{
			        	newIndex = ( scope.currentRow - 1 ).toString() + scope.currentColumn.toString();
			        	c = document.getElementById(newIndex);
			        }
			        navSound.play();
		    	}
		    } else if (event.which == 40) { 
		        // Down Arrow
		        if(!linkFocus.length>0){
			        if(scope.currentRow == maxRows){ 
			         	newIndex = (0).toString() + scope.currentColumn.toString();
			        	c = document.getElementById(newIndex);
			       	}
			       	else{
			       		newIndex = ( scope.currentRow + 1 ).toString() + scope.currentColumn.toString();
			        	c = document.getElementById(newIndex);
			        }
			        navSound.play();
			    }
		    }
			
			// w keypress
			else if(event.which == 87){
				var colourPlusOne = scope.myData[gridID].jumbled[0].rowValues[scope.currentColumn].bcolor;
				for (var x = 0; x < maxColumns; x++) {
					scope.myData[gridID].jumbled[x].rowValues[scope.currentColumn].bcolor = scope.myData[gridID].jumbled[x+1].rowValues[scope.currentColumn].bcolor
				}
				scope.myData[gridID].jumbled[maxColumns].rowValues[scope.currentColumn].bcolor = colourPlusOne;
				shiftSound.play();
				scope.numberOfMoves +=1;
			}
			// s keypress
			else if(event.which == 83){
				var colourPlusOne = scope.myData[gridID].jumbled[maxColumns].rowValues[scope.currentColumn].bcolor;
				for (var x = maxColumns; x > 0; x--) {
					scope.myData[gridID].jumbled[x].rowValues[scope.currentColumn].bcolor = scope.myData[gridID].jumbled[x-1].rowValues[scope.currentColumn].bcolor
				}
				scope.myData[gridID].jumbled[0].rowValues[scope.currentColumn].bcolor = colourPlusOne;
				shiftSound.play();
				scope.numberOfMoves +=1;
			}
			// a keypress
			else if(event.which == 65){
				var colourPlusOne = scope.myData[gridID].jumbled[scope.currentRow].rowValues[0].bcolor;
				for (var x = 0; x < maxColumns; x++) {
					scope.myData[gridID].jumbled[scope.currentRow].rowValues[x].bcolor = scope.myData[gridID].jumbled[scope.currentRow].rowValues[x+1].bcolor
				}
				scope.myData[gridID].jumbled[scope.currentRow].rowValues[maxColumns].bcolor = colourPlusOne;
				shiftSound.play();
				scope.numberOfMoves +=1;
			}
			// d keypress
			else if(event.which == 68){
				var colourPlusOne = scope.myData[gridID].jumbled[scope.currentRow].rowValues[maxColumns].bcolor;
				for (var x = maxColumns; x > 0; x--) {
					scope.myData[gridID].jumbled[scope.currentRow].rowValues[x].bcolor = scope.myData[gridID].jumbled[scope.currentRow].rowValues[x-1].bcolor;
				}
				scope.myData[gridID].jumbled[scope.currentRow].rowValues[0].bcolor = colourPlusOne;
				shiftSound.play();
				scope.numberOfMoves +=1;
			}
			// Tab
			else if (event.which == 9) {
		        event.preventDefault();
		        if(!linkFocus.length>0){
		        	console.log("reset");
		        	$('a').removeClass("selected");
					$('a').eq(0).addClass("selected");
					$('a').eq(0).focus();
		        }
		        else if (linkFocus.next().length>0){
		        	console.log("exit");
		        	$('a').eq(0).removeClass("selected");
		        	$('a').eq(1).addClass("selected");
		        	$('a').eq(1).focus();
		        }
		        else{
		        	console.log("play");
		        	$("#grid1").find('tr:eq(0)').find('td:eq(0)').focus();
		        	$('a').removeClass("selected");
		        	scope.currentRow = 0;
		        	scope.currentColumn = 0;
		        }
			}
			//reset from menu
			else if(event.which == 13){
				if(id=="reset"){
					reset();
					resetSound.play();
					scope.numberOfMoves = 0;
				}
				else if(id=="exit"){
					reset();
					scope.numberOfMoves = 0;
				}	
			}
			//esc key
			else if(event.which == 27){
				currCell = document.getElementById("exit");
				$('a').eq(0).addClass("selected");
				currCell.focus();
			}
			for(var y = 0; y < maxColumns+1; y++){
				for (var z =0; z < maxColumns+1; z++){
					if (scope.myData[gridID].jumbled[y].rowValues[z].bcolor == scope.myData[gridID].answer[y].rowValues[z].bcolor){
						numMatched ++;
					}
				}
			}
			// if puzzle is completed 	
			if(numMatched==maxMatched){
				reset();
				successSound.play();
				var local = "_"+gridID+"Result";
				//set new best score if number of moves is less than the previous or if no previous score is set
				if(parseInt(localStorage.getItem(local).replace(/\D/g,''))>scope.numberOfMoves || !(parseInt(localStorage.getItem(local).replace(/\D/g,''))>0)){
					console.log('lower');
					var resultMessage = "Best score: "+scope.numberOfMoves+" moves";
					localStorage.setItem(local, resultMessage);
					console.log(localStorage.getItem(local));
				}
				document.getElementById('container').innerHTML = "<div class='text'>Well done!<br> You completed grid "+gridID+" in "+scope.numberOfMoves+" moves"+
				"<br/><br/><ul><a href='#/'><li><span id='select'>> </span><span id='list'>Main menu</span></li></a></ul>";
				$('a').eq(0).focus();  
			}

			if(event.which == 37 || event.which == 38|| event.which == 39 || event.which == 40){
		        currCell = c;
		        scope.currentColumn = parseInt(newIndex.slice(1,2));
		        scope.currentRow = parseInt(newIndex.slice(0,1));
		   	    currCell.focus();
	    	}
	    	
			scope.$apply(function(){
				scope.$eval(attrs.myEnter);
			});
			if(event.which!=13){
				event.preventDefault();
			}

			function reset(){
					for(var y = 0; y < maxColumns+1; y++){
						for (var z =0; z < maxColumns+1; z++){
							scope.myData[gridID].jumbled[y].rowValues[z].bcolor = scope.immutable[gridID].jumbled[y].rowValues[z].bcolor;
						}
					}	
			}

		});
	};
});

