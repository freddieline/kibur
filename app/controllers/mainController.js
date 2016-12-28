app.controller('mainController', function($scope, $http) {
    
	$scope.currentColumn = 0;
	$scope.currentRow = 0;
	$scope.numberOfMoves = 0;
    $scope.puzzleNumber;
    $scope.myData = Object.create(Object.prototype);
    $scope.immutable = Object.create(Object.prototype);

    //play background track
    myAudio = new Audio('app/sound/Severin_Ambient_2.mp3'); 
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();

//let logo info
    $http({
        method : "GET",
        url : "/logo.json"
    }).then(function mySuccess(response) {
        $scope.logo = response.data.logo;
    }, function myError(response) {
        $scope.logo = response.statusText;
    });

//2 X 2 puzzles

    $http({
        method : "GET",
        url : "app/patterns/2X2/2X2Puzzle1.json"
    }).then(function mySuccess(response) {
        $scope._2X2Puzzle1 = response.data;
        $scope.myData["2x2_1"]=response.data;
        $scope.immutable["2x2_1"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._2X2Puzzle1 = response.statusText;
    });

//3 X 3 puzzles

    $http({
        method : "GET",
        url : "app/patterns/3X3/3X3Puzzle1.json"
    }).then(function mySuccess(response) {
        $scope._3X3Puzzle1 = response.data;
        $scope.myData["3x3_1"] = response.data;
        $scope.immutable["3x3_1"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._3X3Puzzle1 = response.statusText;
    });

    $http({
        method : "GET",
        url : "app/patterns/3X3/3X3Puzzle2.json"
    }).then(function mySuccess(response) {
        $scope._3X3Puzzle2 = response.data;
        $scope.myData["3x3_2"]=response.data;
        $scope.immutable["3x3_2"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._3X3Puzzle1 = response.statusText;
    });

       $http({
        method : "GET",
        url : "app/patterns/3X3/3X3Puzzle3.json"
    }).then(function mySuccess(response) {
        $scope._3X3Puzzle3 = response.data;
        $scope.myData["3x3_3"]=response.data;
        $scope.immutable["3x3_3"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._3X3Puzzle3 = response.statusText;
    });

       $http({
        method : "GET",
        url : "app/patterns/3X3/3X3Puzzle4.json"
    }).then(function mySuccess(response) {
        $scope._3X3Puzzle4 = response.data;
        $scope.myData["3x3_4"] = response.data;
        $scope.immutable["3x3_4"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._3X3Puzzle4 = response.statusText;
    });

           $http({
        method : "GET",
        url : "app/patterns/3X3/3X3Puzzle5.json"
    }).then(function mySuccess(response) {
        $scope._3X3Puzzle5 = response.data;
        $scope.myData["3x3_5"]=response.data;
        $scope.immutable["3x3_5"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._3X3Puzzle5 = response.statusText;
    });

//4 X 4 puzzles

       $http({
        method : "GET",
        url : "app/patterns/4X4/4X4Puzzle1.json"
    }).then(function mySuccess(response) {
        $scope._4X4Puzzle1 = response.data;
        $scope.myData["4x4_1"]=response.data;
        $scope.immutable["4x4_1"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._4X4Puzzle1 = response.statusText;
    });

       $http({
        method : "GET",
        url : "app/patterns/4X4/4X4Puzzle2.json"
    }).then(function mySuccess(response) {
        $scope._4X4Puzzle2 = response.data;
        $scope.myData["4x4_2"] = response.data;
        $scope.immutable["4x4_2"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._4X4Puzzle2 = response.statusText;
    });

       $http({
        method : "GET",
        url : "app/patterns/4X4/4X4Puzzle3.json"
    }).then(function mySuccess(response) {
        $scope._4X4Puzzle3 = response.data;
        $scope.myData["4x4_3"]=response.data;
        $scope.immutable["4x4_3"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._4X4Puzzle3 = response.statusText;
    });

    $http({
        method : "GET",
        url : "app/patterns/4X4/4X4Puzzle4.json"
    }).then(function mySuccess(response) {
        $scope._4X4Puzzle4 = response.data;
        $scope.myData["4x4_4"]=response.data;
        $scope.immutable["4x4_4"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._4X4Puzzle4 = response.statusText;
    });

    $http({
        method : "GET",
        url : "app/patterns/4X4/4X4Puzzle5.json"
    }).then(function mySuccess(response) {
        $scope._4X4Puzzle5 = response.data;
        $scope.myData["4x4_5"] = response.data;
        $scope.immutable["4x4_5"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._4X4Puzzle4 = response.statusText;
    });


//5 X 5 puzzles

    $http({
        method : "GET",
        url : "app/patterns/5X5/5X5Puzzle1.json"
    }).then(function mySuccess(response) {
        $scope._5X5Puzzle1 = response.data;
        $scope.myData["5x5_1"]=response.data;
        $scope.immutable["5x5_1"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._5X5Puzzle1 = response.statusText;
    });

    $http({
        method : "GET",
        url : "app/patterns/5X5/5X5Puzzle2.json"
    }).then(function mySuccess(response) {
        $scope._5X5Puzzle2 = response.data;
        $scope.myData["5x5_2"] = response.data;
        $scope.immutable["5x5_2"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._5X5Puzzle2 = response.statusText;
    });
    $http({
        method : "GET",
        url : "app/patterns/5X5/5X5Puzzle3.json"
    }).then(function mySuccess(response) {
        $scope._5X5Puzzle3 = response.data;
        $scope.myData["5x5_3"] = response.data;
        $scope.immutable["5x5_3"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._5X5Puzzle3 = response.statusText;
    });

    $http({
        method : "GET",
        url : "app/patterns/5X5/5X5Puzzle4.json"
    }).then(function mySuccess(response) {
        $scope._5X5Puzzle4 = response.data;
        $scope.myData["5x5_4"] = response.data;
        $scope.immutable["5x5_4"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._5X5Puzzle4 = response.statusText;
    });
    $http({
        method : "GET",
        url : "app/patterns/5X5/5X5Puzzle5.json"
    }).then(function mySuccess(response) {
        $scope._5X5Puzzle5 = response.data;
        $scope.myData["5x5_5"] = response.data;
        $scope.immutable["5x5_5"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope._5X5Puzzle5 = response.statusText;
    });



//6 X 6 puzzles


    
});


