const remote = require('electron').remote;
var x;

x= document.getElementsByClassName("close-btn")[0];
x.addEventListener('click',()=>{
  var window = remote.getCurrentWindow();
         window.close();

});
