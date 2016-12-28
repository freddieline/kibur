app.controller('menuController', function($scope, $http) {
    
    setTimeout(function(){ 
	    $('a').eq(0).addClass("selected");
	    $('a').last().removeClass('selected');  
	    $('a').eq(0).focus();  
	},200);

	$("html").click(function() {
		 $('a').eq(0).focus();  
	    $('a').removeClass('selected');  
	    $('a').eq(0).addClass("selected");
	   
	});

    //get results

    $scope._2x2_1Result = localStorage.getItem("_2x2_1Result");

    $scope._3x3_1Result = localStorage.getItem("_3x3_1Result");
    $scope._3x3_2Result = localStorage.getItem("_3x3_2Result");
    $scope._3x3_3Result = localStorage.getItem("_3x3_3Result");
    $scope._3x3_4Result = localStorage.getItem("_3x3_4Result");
    $scope._3x3_5Result = localStorage.getItem("_3x3_5Result");

    $scope._4x4_1Result = localStorage.getItem("_4x4_1Result");
    $scope._4x4_2Result = localStorage.getItem("_4x4_2Result");
    $scope._4x4_3Result = localStorage.getItem("_4x4_3Result");
    $scope._4x4_4Result = localStorage.getItem("_4x4_4Result");
    $scope._4x4_5Result = localStorage.getItem("_4x4_5Result");

    $scope._5x5_1Result = localStorage.getItem("_5x5_1Result");
    $scope._5x5_2Result = localStorage.getItem("_5x5_2Result");
    $scope._5x5_3Result = localStorage.getItem("_5x5_3Result");
    $scope._5x5_4Result = localStorage.getItem("_5x5_4Result");
    $scope._5x5_5Result = localStorage.getItem("_5x5_5Result");

    $scope._6x6_1Result = localStorage.getItem("_6x6_1Result");
    $scope._6x6_2Result = localStorage.getItem("_6x6_2Result");
    $scope._6x6_3Result = localStorage.getItem("_6x6_3Result");
    $scope._6x6_4Result = localStorage.getItem("_6x6_4Result");
    $scope._6x6_5Result = localStorage.getItem("_6x6_5Result");

});
