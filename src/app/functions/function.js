

function myFunc(){
    alert("hello");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    var data = {
        "first" : fname,
        "last" : lname,
        "mail" : email,
        "pass":pwd
    };
//    JQuery.post('http://localhost:2356/postData',data).
$.ajax({
    type: "POST",
    url: 'http://localhost:2356/postData',
    data: data,
    success: success,
    dataType: JSON
  });
}