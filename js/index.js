$(document).ready(function() {    
    var apiKey = "9edf42b04060dc39681a9e5dc362e507" // Enter your API Key here        
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    //var state_obj = state_info['CO']
    //var url =`https://api.darksky.net/forecast/-apikey-/-latitude-,-longitude-`;

    
    Object.keys(state_info).forEach(function(state) {
        var latitude = state_info[state].lat.toString();
        var longitude = state_info[state].lng.toString();

        var url ='https://api.forecast.io/forecast/9edf42b04060dc39681a9e5dc362e507/' + latitude + ',' + longitude;



    $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                
                console.log(data)
                var temperature = data.currently.temperature;
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                // var temperature = 

                console.log(temperature)


                //TODO 
                // Default color gray
                // Create a series of if else blocks to set the color for the state based on the temperature
                // Less than equal to 10 should be blue
                // Between 11 and 30 should be cyan
                // Between 31 and 50 should be green
                // Between 51 and 80 should be orange
                // Greater than 80 should be red

                var color = "#808080";

                if (temperature<=10){
                    color = "#6495ED"
                  }
                  else if (temperature>10 && temperature <=20){
                    color = "#7FFFD4"
                  }
                  else if (temperature>20 && temperature <=30){
                    color = "#0000FF"
                  }
                  else if (temperature>30 && temperature <=40){
                    color = "#008B8B"
                  }
                  else if (temperature>40 && temperature <=50){
                    color = "#00BFFF"
                  }
                  else if (temperature>50 && temperature <=60){
                    color = "#F08080"
                  }
                  else if (temperature>60 && temperature <=70){
                    color = "CD5C5C"
                  }
                  else if (temperature>70 && temperature <=80){
                    color = "#8B0000"
                  }
                  else if (temperature>80 && temperature <=90){
                    color = "#B22222"
                  }
                  else if (temperature>90){
                    color = "#FF0000"
                  }

                

                $('#' + state).css('fill', color);


    });
    
    });
});