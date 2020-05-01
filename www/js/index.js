
//function that runs onload
window.onload = function() {
    this.document.addEventListener('deviceready', init, false);
    init();     //delete to run in emulator or mobile app
}

//global variables
var output;

//function that instaniates buttons and assigns them their functions
function init() {
    document.getElementById('btnRegister').addEventListener('click', registerCourse, true);
    document.getElementById('btnDisplay').addEventListener('click', displayList, true);
    document.getElementById('btnClear').addEventListener('click', clearList, true);
}

/** registerCourse()
 * makes objects from inout tags.
 * sets the object values to webstorage using store.js library
 * clears the values of the inputs\
 * Added: if/else statements to add basic validation 
 */
function registerCourse(){

    if (document.getElementById('courseid').value == "" || null ) {
        alert("Please input a valid course ID.");
    } else if (document.getElementById('date').value == "") {
        alert("Please input a valid registration date.");
    } else
        var courseID = document.getElementById('courseid');
        var regDate = document.getElementById('date');

        store.set(courseID.value, regDate.value);

        output = "Thank you for registering for <br><br> "+ courseID.value + " on " + regDate.value ;  
        document.getElementById('showInfo').innerHTML = output;

        courseID.value = "";
        regDate.value = "";
}

/** displayList()
 * clears output 
 * loops through webstorage for key/value pairs and places them in output via anon function
 * set <div id=showInfo> .innerHTML to output
 */
function displayList(){
    output = "These are the courses for which you registered and their registration dates: <br><br>";
    store.each(function(val, key) {
       output += key + " registered on " + val +"<br>" ;
       document.getElementById('showInfo').innerHTML = output;
    });
}

/**clearList()
 * calls clearAll() from store.js to clear the storage
 * sets output to required text (as per the video example for the assignment)
 * set <div id=showInfo> .innerHTML to output
 */
function clearList() {
    store.clearAll();
    output = "All course registration are removed.";
    document.getElementById('showInfo').innerHTML = output;
}