var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var bodyParser = require('body-parser');
var conn = mongoose.connection;
var schema=mongoose.Schema({
    name : String,
    email:String,
    mob:String
});
var profile = mongoose.model('userprofile',schema);
var profile1;
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at %s:%s Port", host, port)
  });
  app.get('/form', function (req, res) {
    var html='';
    html +="<body>";
    html += "<form action='/thank'  method='post' name='form1'>";
    html += "Name:</p><input type= 'text' name='name'>";
    html += "Email:</p><input type='text' name='email'>";
    html += "address:</p><input type='text' name='address'>";
    html += "Mobile number:</p><input type='text' name='mobilno'>";
    html += "<input type='submit' value='submit'>";
    html += "<INPUT type='reset'  value='reset'>";
    html += "</form>";
    html += "</body>";
    
    res.send(html);
  });
 /* app.post('/thank', urlencodedParser, function (req, res){
    var reply='';
    reply += "Your name is" + req.body.name;
   
    reply += "Your E-mail id is" + req.body.email;
  
    reply += "Your address is" + req.body.address;
    reply += "Your mobile number is" + req.body.mobilno;
    profile1=new profile({
        name:req.body.name,
        email:req.body.email,
        mob:req.body.mobilno,
    });
  
    //console.log(profile1);
    profile1.save();
    res.send(reply);
   });*/
   app.post('/thank', urlencodedParser, function (req, res){
    var reply='';
    reply += "<head>"+
    "<style>"+
      
"body{"+
  "background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0, 0, 0, 0.829)),url("+"https://github.com/prince-09/files/blob/master/web_lab_project/projectimage1.jpg?raw=true"+");"+

   " background-size: cover;"+
   " background-position: center;}"+
"ul{float: right;list-style-type: none;margin-top: 25px;}ul li{display: inline-block;}ul li a{text-decoration: none;color: #fff;padding: 5px 20px;border: 1px solid transparent;transition: 0.6s ease;}"+
"ul li a:hover{background-color: #fff;color: #000;}ul li a.active{background-color: #fff;color: #000;}.logo img{float: left;width : 70px;height: 70px;margin-top: 25px;border-radius: 4px;}"+
".about{ margin-top: 150px;border: 2pt solid white;background-color: white;width: 900px;border-radius: 20px;margin-right: 250px;}.Title{padding: 20px;color: blue;font-size: 35px;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}"+
".desc{"+
    "padding: 25px;"+
    "color: black;"+
    "font-size: 20px;"+
    "font-family: 'Courier New', Courier, monospace;}"+
"#con{"+
    "padding-top: 100px;margin-left: 200px;font-size: 30px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;color: floralwhite;}"+
".form{"+
    "margin-top: -300px;"+
    "border: 1px solid white;"+
    "padding: 10px;"+
    "background-color: white;"+
    "margin-left: 100px;"+
    "width: 500px;"+
    "height: 300px;"+
    
"}"+
"#locimg{width: 200px;height: 200px;}#nameedit{margin-left: 100px;background-color:rgba(0, 0, 0, 0);color:white;border: none;outline:none;border-bottom: 1px solid black;margin-top: 30px;padding: 3px;}"+
"#mailedit{margin-left: 90px;margin-top: 40px;background-color:rgba(0, 0, 0, 0);color:white;border: none;outline:none;border-bottom: 1px solid black;padding: 3px;}#mobedit{margin-left: 30px;margin-top: 40px;margin-bottom: 50px;background-color:rgba(0, 0, 0, 0);color:white;border: none;outline:none;border-bottom: 1px solid black;padding: 3px;"+
"}.tag{margin-left: 100px;}#loc{margin-left: 350px;font-size: 20px;color: bisque;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;}#locimg{margin-left: 700px;width: 300px;height: 300px;}#submit{margin-left: 200px;width: 100px;height: 30px;color:black;background-color: blue}.content{padding-left: 40px;}.item{padding-top: 10px;}#profile{font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;color:skyblue;margin-left: 40px;}#tble{margin-left: 90px;color: white;}</style></head>"+
"<body><div class="+"logo"+"><img src="+"https://github.com/prince-09/files/blob/master/web_lab_project/projectImage.jpg?raw=true"+" ></div><ul><li><a href="+"/main"+">Home</a></li><li><a href="+"/book"+">Book a Parking slot</a></li>"+
                "<li><a href="+"/"+">Sign Out</a></li>"+
                "<li><a href="+"/nearsearch"+">See Nearby Parking Slots</a></li>"+
                "<li><a class="+"active"+"  href="+"/profile"+">Profile</a></li>"+
                "<li><a href="+"/contact"+">Contact</a></li>"+
                "<li><a href="+"/about"+">About</a></li>"+
            "</ul><br><br><br><br><br><br><br>"+
            "<h1 id="+"profile"+">Profile</h1>"+
            "<table id="+"tble"+">"+
"<th></th><tr class="+"item"+"><td>Name</td><td class="+"content"+">"+req.body.name+"</td></tr><tr class="+"item"+"><td>E mail</td><td class="+"content"+">prfjdn@ssl.shh</td></tr><tr class="+"item"+"><td>"+
"mobile number</td><td class="+"content"+">556564565665</td></tr><tr class="+"item"+"><td>Type of vehicle</td><td class="+"content"+">Two wheeler</td></tr><tr class="+"item"+"><td>Address</td><td class="+"content"+">]kjhhhkvvkkkhbkhhvjgcg bhj</td></tr></table></body>";

    
  
    //console.log(profile1);
    
    res.send(reply);
   });
  