//These comments below are all apis that do not need auth
//7Timer! Weather forecastsapi url http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json
//Agify.io Predict age based on a name url 'https://api.agify.io?name=Jt' <= you can change the end of the url to somes name for differnt results
//Bored Activity suggestions url https://www.boredapi.com/api/activity
let api =  document.getElementById('api');
let val1 = document.getElementById('val1');
let val2 = document.getElementById('val2');
let val3 = document.getElementById('val3');
let name1 = document.getElementById('name1');
let outPut = document.getElementById('outPut');
let nameBtn = document.getElementById('nameBtn');


const WeatherTimer = async ()=>{
     // Placeholder name 'michael', replace with dynamic input from the user if necessary.
     // Perform an asynchronous fetch request to the Agify.io API with the placeholder name and wait for the response.
     // Then, convert the response to JSON format and wait for that operation to complete.
    //Fetching api timer
    const promise = await fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
    //Parsing data into json
    const data = await promise .json();
    //Console.logging to see what I'm grabbing
     console.log(data.init);
     //Returning data
         return data;
}

const NameApi = async()=>{
   
const promise = await fetch(`https://api.agify.io?name=${name1}`)
const data = await promise.json();
return data;

}

const BoredApi = async()=>{
    const promise = await fetch('https://www.boredapi.com/api/activity')
    const data = await promise.json();
    return data;
}

// Attach an event listener to the HTML element with the ID 'api'. This element is a dropdown (select) menu.
// The event listener triggers when the value of the dropdown changes (i.e., when a new option is selected).
document.getElementById('api').addEventListener('change', async function() {
    // Retrieve the value of the selected option in the dropdown menu. This value determines which API call to make.
    let apiValue = this.value;
    // Initialize a variable to hold the text that will eventually be displayed to the user.
    let outputText = '';
    // Start a try block to catch any errors that might occur during the API call or data processing.

        // Use a switch statement to handle different cases based on the selected API value.
        switch(apiValue) {
            // Case 1: If the selected value is '1', make an API call to the 7Timer! weather forecast service.
            case '1':
                // Perform an asynchronous fetch request to the 7Timer! API and wait for the response.
               // Then, convert the data to JSON format and wait for that operation to complete.
             const weather = await WeatherTimer();
             outputText = `Product: ${JSON.stringify(weather.product)}`; 
             outputText += `\n\nInit: ${JSON.stringify(weather.init)}`;
             outputText += `\n\nData: ${JSON.stringify(weather.dataseries[1].timepoint)}`;
                break;
            // Case 2: If the selected value is '2', make an API call to the Agify.io service to predict age based on a name.
            case '2':
                const name  = await NameApi();
                const name1 = 'Mike'
                // Construct a string displaying the predicted age for the name and store it in outputText.
                outputText = `Predicted age for ${name1}: ${name.age}`;
                break;
            // Case 3: If the selected value is '3', make an API call to the Bored API for activity suggestions.
            case '3':
                // Perform an asynchronous fetch request to the Bored API and wait for the response.
                // Then, convert the response to JSON format and wait for that operation to complete.
                // Store the activity suggestion in outputText.
                const act = await BoredApi();
                outputText = act.activity;
                break;
            // Default case: If no valid value is selected, set a default message in outputText.
            default:
                outputText = 'Please select an API to call.';
                break;
        }
    // Catch block to handle any errors that occur during the fetch request or data processing.
  
    // Find the HTML element with the ID 'outPut' and set its text content to the value of outputText,
    // displaying the result or error message to the user.
    document.getElementById('outPut').textContent = outputText;
});