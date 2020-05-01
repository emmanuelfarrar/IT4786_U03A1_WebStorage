window.onload = function() {
    this.document.addEventListener('deviceready', init, false);
    init();     //delete to run in emulator or mobile app
}

function init() {
    document.getElementById('btnRegister').addEventListener('click', registerCourse, true);
    document.getElementById('btnDisplay').addEventListener('click', displayRegisteredCourses, true);
    document.getElementById('btnClea').addEventListener('click', clearRegisteredCourses, true);
}

function registerCourse(){

}

function displayRegisteredCourses(){

}

function clearRegisteredCourses() {
    
}