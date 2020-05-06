var app = new Vue({
  el: '#app',
  data: {
    gwlist: getQueryVariable("s")
  }
})

function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

function getGWList() {
  var search = document.getElementById("searchText").value;
  console.log(search);
  const url='http://gwapi.easynight.cn:9001/api/v1/search/' + search;

  const http = new XMLHttpRequest();
  //http.setRequestHeader('Content-Type', 'application/json');
  // http.setRequestHeader('Access-Control-Allow-Origin', '*');

  http.open("GET", url);
  http.send();

  http.onreadystatechange=function(){
    if (this.readyState==4 && this.status==200) {
      console.log(http.responseText);
      obj = JSON.parse(http.responseText);
      document.getElementById("result_title1").innerHTML = obj[0].name;
      document.getElementById("memo").innerHTML = obj[0].crcode;
      document.getElementById("memo").innerHTML = obj[0].age;
    }
  }
  
  return false;
}