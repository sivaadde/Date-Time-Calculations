function nthWeekdayOfMonth(weekday, n, date) {
    var month = date.getMonth();
    var date = new Date(date.getFullYear(), month, 1),
        add = (weekday - date.getDay() + 7) % 7 + (n - 1) * 7;
  
    // make sure that we stay in the same month
    do {
      date.setMonth(month);
      date.setDate(1 + add);
      add -= 7;
    } while (date.getMonth() != month);
  
    var day=date.getUTCDate();
    var mon = date.toLocaleString('default', { month: 'long' });
    var yr = date.getFullYear();
    dt = day+"-"+mon.substr(0,3)+"-"+yr;
    return dt;
  }
function a() {
      var day = document.getElementById('day').value;
      var wday = document.getElementById('wday').value;
      var months = parseInt(document.getElementById('months').value);
      var year = document.getElementById('year').value;
      var dates = [];
      if (isNaN(day)||isNaN(wday)||isNaN(months)||isNaN(year)){
        alert("Please enter all the information");
      }else{
      for (i=0;i<13;i++){
          var ndate = nthWeekdayOfMonth(wday,day,new Date(year,months));
          dates.push(ndate);
          months = months +1;
      }
    }
    for(i=0;i<dates.length;i++){
        var node = document.createElement("LI");
        var textnode = document.createTextNode(dates[i]);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
    }
  }
function reset(){
  location.reload(true);
}
function time(){
  coltym = new Date(document.getElementById('coltym').value);
  rcptym = new Date(document.getElementById('rcptym').value);
  today = new Date();
  timediff = parseInt((rcptym - coltym)/(1000*60*60));
  dur = parseInt((today - coltym)/(1000*60*60));
  durind = parseInt((today - coltym)/(1000*60*60*24));
  document.getElementById("output2").innerHTML = "<br>"+"Duration between collection and recipt is "+timediff+" hrs."+
  "<br>"+"Time since collection in hrs ="+dur+" hrs."+"<br>"+ "Time since collection in days ="+durind+" days.";
}