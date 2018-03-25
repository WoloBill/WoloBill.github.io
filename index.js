var WB_enterSite = function(){
  document.getElementById('landingBack').style.height = '0px';
  document.getElementById('landingInfo').style.opacity = '0';
  document.getElementById('mainBack').style.height = '100vh';
};
var WB_i = 1;
var WB_navToggle = function(){
  WB_i++;
  if (WB_i == 2){
    
    document.getElementById('mainCard').style.width = "calc(100% - 340px)";
    document.getElementById('sideNav').style.width = "300px";
    WB_i++;
    console.log(300);
  }else{
    document.getElementById('mainCard').style.width = "calc(100% - 40px)";
    document.getElementById('sideNav').style.width = "0px";
    console.log(200);
    WB_i = 1;
  }
};
