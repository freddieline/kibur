app.config(function($routeProvider) {
    $routeProvider
    .when("/puzzles", {
        templateUrl : "app/partials/puzzles.htm",
        controller : "menuController"
    })
    .when("/controls", {
        templateUrl : "app/partials/controls.htm",
        controller : "menuController"
    })
    .when("/credits", {
        templateUrl : "app/partials/credits.htm",
        controller : "menuController"
    })

    //Puzzle folders 
    .when("/2X2Puzzles", {
        templateUrl : "app/partials/2X2Puzzles.htm",
        controller : "menuController"
    })
    .when("/3X3Puzzles", {
        templateUrl : "app/partials/3X3Puzzles.htm",
        controller : "menuController"
    })
    .when("/4X4Puzzles", {
        templateUrl : "app/partials/4X4Puzzles.htm",
        controller : "menuController"
    })
    .when("/5X5Puzzles", {
        templateUrl : "app/partials/5X5Puzzles.htm",
        controller : "menuController"
    })
    .when("/6X6Puzzles", {
        templateUrl : "app/partials/6X6Puzzles.htm",
        controller : "menuController"
    })

    // 2 X 2 puzzles
    .when("/2X2Puzzle1", {
        templateUrl : "app/partials/2X2/2By2Puzzle1.htm",
        controller : "gameController"
    })

    // 3 X 3 puzzles
    .when("/3X3Puzzle1", {
        templateUrl : "app/partials/3X3/3By3Puzzle1.htm",
        controller : "gameController"
    })
    .when("/3X3Puzzle2", {
        templateUrl : "app/partials/3X3/3By3Puzzle2.htm",
        controller : "gameController" 
    })
    .when("/3X3Puzzle3", {
        templateUrl : "app/partials/3X3/3By3Puzzle3.htm",
        controller : "gameController"
    })
    .when("/3X3Puzzle4", {
        templateUrl : "app/partials/3X3/3By3Puzzle4.htm",
        controller : "gameController"
    })
    .when("/3X3Puzzle5", {
        templateUrl : "app/partials/3X3/3By3Puzzle5.htm",
        controller : "gameController"
    })

    // 4 X 4 puzzles
    .when("/4X4Puzzle1", {
        templateUrl : "app/partials/4X4/4By4Puzzle1.htm",
        controller : "gameController" 
    })
    .when("/4X4Puzzle2", {
        templateUrl : "app/partials/4X4/4By4Puzzle2.htm",
        controller : "gameController"
    })
    .when("/4X4Puzzle3", {
        templateUrl : "app/partials/4X4/4By4Puzzle3.htm" ,
        controller : "gameController"
    })
    .when("/4X4Puzzle4", {
        templateUrl : "app/partials/4X4/4By4Puzzle4.htm",
        controller : "gameController"
    })
    .when("/4X4Puzzle5", {
        templateUrl : "app/partials/4X4/4By4Puzzle5.htm",
        controller : "gameController"
    })

    // 5 X 5 puzzles
    .when("/5X5Puzzle1", {
        templateUrl : "app/partials/5X5/5By5Puzzle1.htm",
        controller : "gameController"
    })
    .when("/5X5Puzzle2", {
        templateUrl : "app/partials/5X5/5By5Puzzle2.htm" ,
        controller : "gameController"
    })
    .when("/5X5Puzzle3", {
        templateUrl : "app/partials/5X5/5By5Puzzle3.htm",
        controller : "gameController"
    })
    .when("/5X5Puzzle4", {
        templateUrl : "app/partials/5X5/5By5Puzzle4.htm" ,
        controller : "gameController"
    })
    .when("/5X5Puzzle5", {
        templateUrl : "app/partials/5X5/5By5Puzzle5.htm",
        controller : "gameController"
    })

    // 5 X 5 puzzles
    .when("/6X6Puzzle1", {
        templateUrl : "app/partials/6X6/6By6Puzzle1.htm",
        controller : "gameController"
    })
    .when("/6X6Puzzle2", {
        templateUrl : "app/partials/6X6/5By5Puzzle2.htm" ,
        controller : "gameController"
    })
    .when("/6X6Puzzle3", {
        templateUrl : "app/partials/6X6/6By6Puzzle3.htm",
        controller : "gameController"
    })
    .when("/6X6Puzzle4", {
        templateUrl : "app/partials/6X6/6By6Puzzle4.htm" ,
        controller : "gameController"
    })
    .when("/6X6Puzzle5", {
        templateUrl : "app/partials/6X6/6By6Puzzle5.htm",
        controller : "gameController"
    })

    .otherwise({
        templateUrl : "app/partials/main.htm",
        controller : "menuController"
    });
});
