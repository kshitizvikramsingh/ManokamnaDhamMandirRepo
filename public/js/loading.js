console.log("loading icon")
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
           document.getElementById('interactive');
           document.getElementById('loadIcon').style.visibility="hidden";
    }
  }