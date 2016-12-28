app.controller('gameController', function($scope, $http) {

	setTimeout(function(){ 
		$('a').removeClass("selected");
		var currCell = $("#grid1").find('tr:eq(0)').find('td:eq(0)');
		currCell.focus();
	},200);

	return function (scope, element, attrs){
		element.bind("keydown keypress",function (event){
			scope.$apply(function(){
			scope.$eval(attrs.myEnter);
			});
			if(event.which!=13){
				event.preventDefault();
			}
		});
	};



});