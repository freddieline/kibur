if (typeof(Storage) !== "undefined") {
    

    // set initial value for 2x2
    if(!localStorage._2x2_1Result){
    	localStorage.setItem("_2x2_1Result", "Not completed");
    }

    // set initial value for 3x3
    if(!localStorage._3x3_1Result){
    	localStorage.setItem("_3x3_1Result", "Not completed");
    }
    if(!localStorage._3x3_2Result){
    	localStorage.setItem("_3x3_2Result", "Not completed");
    }
    if(!localStorage._3x3_3Result){
    	localStorage.setItem("_3x3_3Result", "Not completed");
    }
    if(!localStorage._3x3_4Result){
    	localStorage.setItem("_3x3_4Result", "Not completed");
    }
    if(!localStorage._3x3_5Result){
    	localStorage.setItem("_3x3_5Result", "Not completed");
	}

    // set initial value for 4x4
    if(!localStorage._4x4_1Result){
    	localStorage.setItem("_4x4_1Result", "Not completed");
    }
    if(!localStorage._4x4_2Result){
    	localStorage.setItem("_4x4_2Result", "Not completed");
    }
    if(!localStorage._4x4_3Result){
    	localStorage.setItem("_4x4_3Result", "Not completed");
    }
    if(!localStorage._4x4_4Result){
    	localStorage.setItem("_4x4_4Result", "Not completed");
    }
    if(!localStorage._4x4_5Result){
    	localStorage.setItem("_4x4_5Result", "Not completed");
	}

    // set initial value for 5x5
    if(!localStorage._5x5_1Result){
    	localStorage.setItem("_5x5_1Result", "Not completed");
    }
    if(!localStorage._5x5_2Result){
    	localStorage.setItem("_5x5_2Result", "Not completed");
    }
    if(!localStorage._5x5_3Result){
    	localStorage.setItem("_5x5_3Result", "Not completed");
    }
    if(!localStorage._5x5_4Result){
    	localStorage.setItem("_5x5_4Result", "Not completed");
    }
    if(!localStorage._5x5_5Result){
    	localStorage.setItem("_5x5_5Result", "Not completed");
	}

	// set initial value for 6x6
    if(!localStorage._6x6_1Result){
    	localStorage.setItem("_6x6_1Result", "Not completed");
    }
    if(!localStorage._6x6_2Result){
    	localStorage.setItem("_6x6_2Result", "Not completed");
    }
    if(!localStorage._6x6_3Result){
    	localStorage.setItem("_6x6_3Result", "Not completed");
    }
    if(!localStorage._6x6_4Result){
    	localStorage.setItem("_6x6_4Result", "Not completed");
    }
    if(!localStorage._6x6_5Result){
    	localStorage.setItem("_6x6_5Result", "Not completed");
	}
   	
    
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}