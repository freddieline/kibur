app.directive('myMenu',function(){
	return function (scope, element, attrs){
		element.bind("keydown keypress",function (event){

			// down
			if(event.which==40){
				var next = $("a:focus").next();
				if(next.length >0){
					$("a:focus").removeClass('selected');
					$("a:focus").next().addClass('selected');
					$("a:focus").next().focus();
					
				}
				else{
					$('a').eq(0).addClass("selected");
					$('a').last().removeClass('selected');	
					$('a').eq(0).focus();
				}	
			}
			// up
			else if(event.which==38){
				var next = $("a:focus").prev();
				if(next.length >0){
					$("a:focus").removeClass('selected');
					$("a:focus").prev().addClass('selected');
					$("a:focus").prev().focus();
					
				}
				else{
					$('a').last().addClass('selected');	
					$('a').last().focus();
					$('a').eq(0).removeClass("selected");
				}

			}
			else if (event.which == 9 && !event.shiftKey) { 
			    // Tab
			    event.preventDefault();
				var next = $("a:focus").next();
				if(next.length >0){
					$("a:focus").removeClass('selected');
					$("a:focus").next().addClass('selected');
					$("a:focus").next().focus();
				}
				else{
					$('a').eq(0).addClass("selected");
					$('a').last().removeClass('selected');	
					$('a').eq(0).focus();	
				}	
			}
			
			scope.$apply(function(){
				scope.$eval(attrs.myEnter);
			});
			if(event.which!=13){
				event.preventDefault();
			}
		});
	};
});