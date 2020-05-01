window.onload = function() {
    this.document.addEventListener('deviceready', init, false);
    init();     //delete to run in emulator or mobile app
}

function init() {
    document.getElementById('btnRegister').addEventListener('click', registerCourse, true);
    document.getElementById('btnDisplay').addEventListener('click', displayList, true);
    document.getElementById('btnClear').addEventListener('click', clearList, true);
}

function registerCourse(){

}

function displayList(){

}

function clearList() {

}