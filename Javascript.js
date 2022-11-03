var indicator =1;



function default_theme(form) {
    if (indicator==1) document.getElementById("default_theme").id = "default_theme";
    else if (indicator== 2)
    document.getElementById("christmas_theme").id ="default_theme";
    else if (indicator== 3)
    document.getElementById("ocean_theme").id ="default_theme";
    else if (indicator== 4)
    document.getElementById("fall_theme").id ="default_theme";
    else if (indicator== 5)
    document.getElementById("easter_theme").id ="default_theme";
    else if (indicator== 6)
    document.getElementById("summer_theme").id ="default_theme";
    else document.getElementById("spring_theme").id ="default_theme";
    indicator =1;
}

function christmas_theme(form) {
    if (indicator==1) document.getElementById("default_theme").id = "christmas_theme";
    else if (indicator== 2)
    document.getElementById("christmas_theme").id ="christmas_theme";
    else if (indicator== 3)
    document.getElementById("ocean_theme").id ="christmas_theme";
    else if (indicator== 4)
    document.getElementById("fall_theme").id ="christmas_theme";
    else if (indicator== 5)
    document.getElementById("easter_theme").id ="christmas_theme";
    else if (indicator== 6)
    document.getElementById("summer_theme").id ="christmas_theme";
    else document.getElementById("spring_theme").id ="christmas_theme";
    indicator =2;
    
}
function ocean_theme(form) {
    if (indicator==1) document.getElementById("default_theme").id = "ocean_theme";
    else if (indicator== 2)
    document.getElementById("christmas_theme").id ="ocean_theme";
    else if (indicator== 3)
    document.getElementById("ocean_theme").id ="ocean_theme";
    else if (indicator== 4)
    document.getElementById("fall_theme").id ="ocean_theme";
    else if (indicator== 5)
    document.getElementById("easter_theme").id ="ocean_theme";
    else if (indicator== 6)
    document.getElementById("summer_theme").id ="ocean_theme";
    else document.getElementById("spring_theme").id ="ocean_theme";
    indicator =3;
  }

  function fall_theme(form) {
    if (indicator==1) document.getElementById("default_theme").id = "fall_theme";
    else if (indicator== 2)
    document.getElementById("christmas_theme").id ="fall_theme";
    else if (indicator== 3)
    document.getElementById("ocean_theme").id ="fall_theme";
    else if (indicator== 4)
    document.getElementById("fall_theme").id ="fall_theme";
    else if (indicator== 5)
    document.getElementById("easter_theme").id ="fall_theme";
    else if (indicator== 6)
    document.getElementById("summer_theme").id ="fall_theme";
    else document.getElementById("spring_theme").id ="fall_theme";
    indicator =4;
  }

  function easter_theme(form) {
    if (indicator==1) document.getElementById("default_theme").id = "easter_theme";
    else if (indicator== 2)
    document.getElementById("christmas_theme").id ="easter_theme";
    else if (indicator== 3)
    document.getElementById("ocean_theme").id ="easter_theme";
    else if (indicator== 4)
    document.getElementById("fall_theme").id ="easter_theme";
    else if (indicator== 5)
    document.getElementById("easter_theme").id ="easter_theme";
    else if (indicator== 6)
    document.getElementById("summer_theme").id ="easter_theme";
    else document.getElementById("spring_theme").id ="easter_theme";
    indicator =5;
  }

  function summer_theme(form) {
    if (indicator==1) document.getElementById("default_theme").id = "summer_theme";
    else if (indicator== 2)
    document.getElementById("christmas_theme").id ="summer_theme";
    else if (indicator== 3)
    document.getElementById("ocean_theme").id ="summer_theme";
    else if (indicator== 4)
    document.getElementById("fall_theme").id ="summer_theme";
    else if (indicator== 5)
    document.getElementById("easter_theme").id ="summer_theme";
    else if (indicator== 6)
    document.getElementById("summer_theme").id ="summer_theme";
    else document.getElementById("spring_theme").id ="summer_theme";
    indicator =6;
  }

  function spring_theme(form) {
    if (indicator==1) document.getElementById("default_theme").id = "spring_theme";
    else if (indicator== 2)
    document.getElementById("christmas_theme").id ="spring_theme";
    else if (indicator== 3)
    document.getElementById("ocean_theme").id ="spring_theme";
    else if (indicator== 4)
    document.getElementById("fall_theme").id ="spring_theme";
    else if (indicator== 5)
    document.getElementById("easter_theme").id ="spring_theme";
    else if (indicator== 6)
    document.getElementById("summer_theme").id ="spring_theme";
    else document.getElementById("spring_theme").id ="spring_theme";
    indicator =7;
  }


  

function logIn() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

if(username >= 100 && username <= 999 && password == "wonderful") {
        console.log("Congratulations! You have successfully loged in.")
        alert("Congratulations! You have successfully loged in.");
}

else if(username < 100 || username > 999 && password != "wonderful") {
        console.log("Incorrect Username and Password!")
        alert("Incorrect Username and Password!");
}

else if(username < 100 || username > 999 && password == "wonderful"){
    console.log("Incorrect Username")
    alert("Incorrect Username");
}

else if(username >= 100 && username <= 999 && password != "wonderful"){
    console.log("Incorrect Password!")
    alert("Incorrect Password!");

}


}
