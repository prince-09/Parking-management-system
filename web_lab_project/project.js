var app=require('express');
var exp=app();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var bodyParser = require('body-parser');
var conn = mongoose.connection;
var schemaa=mongoose.Schema({
    name:String,
    email:String,
    mob:Number,
    nameofpark:String,
    hours:Number,
});

var schema=mongoose.Schema({
    name : String,
    email:String,
    mob:Number,
    password:String,
    conpass:String,
});
var scheme=mongoose.Schema({
    name : String,
    location : String,
});
var booking=mongoose.model('bookings',schemaa);
var parks=mongoose.model('parkingareas',scheme);
var nameofpark=[];
    var loctaion=[];
    var park=parks.find({});
     park.exec(function(err,result){
     if(err) throw err;
     result.forEach(function(data){
         nameofpark.push(data.name);
         loctaion.push(data.location);
         console.log(nameofpark[0]+" "+loctaion[0]);
     })
     
        console.log(result);
    })

var mail,mobnumber,name;
var profile = mongoose.model('userprofile',schema);
var profile1;
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var server=exp.listen('3000',function(){
});

exp.get('/',function(req,res){
    res.sendFile(__dirname+'/web_lab_project/first.html');
})
exp.get('/home',function(req,res){
    res.sendFile(__dirname+'/web_lab_project/phome.html');
})
exp.get('/signin',function(req,res){
    res.sendFile(__dirname+'/web_lab_project/login.html');
})
exp.get('/signup',function(req,res){
    res.sendFile(__dirname+'/web_lab_project/Register.html');
})
/*exp.post('/login', urlencodedParser,function(req,res){
    var email=req.body.email;
    var pass=req.body.password;
    console.log("dnjsj");
    
    
    
    var checkpassword=profile.findOne({email:email});
    checkpassword.exec((err,data)=>{
        if(err) throw err;
        var getPassword=data.password;
        if(pass==getPassword){
            res.sendFile(__dirname+'/web_lab_project/projecthome.html');
        }else{

        }
    })

})*/
exp.post('/logi',urlencodedParser,function(req,res){
    var name=req.body.name;
    var pass=req.body.password;
    var check=profile.findOne({name:name});
    console.log(check);
    check.exec((err,data)=>{
        if(err) throw err;
        var getpassword=data.password;
        console.log(data.password);
        if(pass==getpassword){
            name=data.name;
            mail=data.email;
            mobnumber=data.mob;
            res.sendFile(__dirname+'/web_lab_project/projecthome.html');
        }else{
            res.sendFile(__dirname+'/web_lab_project/login.html');
        }
    })
})

exp.get('/nearsearch',function(req,res){
    res.sendFile(__dirname+'/web_lab_project/nearbyslots.html');
})
exp.get('/main',function(req,res){
    res.sendFile(__dirname+'/web_lab_project/projecthome.html');
})
exp.get('/contact',function(req,res){
    res.sendFile(__dirname+'/web_lab_project/contact.html');
})
exp.get('/about',function(req,res){
    res.sendFile(__dirname+'/web_lab_project/about.html');
})
exp.post('/bookin',urlencodedParser,function(req,res){
    var book=new booking({
        name:req.body.name,
        email:req.body.email,
        mob:req.body.mobno,
        nameofpark:req.body.park,
        hours:req.body.hour,
    });
    book.save();
    res.sendFile(__dirname+'/web_lab_project/projecthome.html')
})
exp.post('/main', urlencodedParser, function (req, res){
    profile1=new profile({
        name:req.body.name,
        email:req.body.email,
        mob:req.body.mobno,
        password:req.body.password,
        conpass:req.body.conpass
    });
    if(profile1.password==profile1.conpass){
        profile1.save();
        name=req.body.name;
        mail=req.body.email;
        mobnumber=req.body.mobno;
        res.sendFile(__dirname+'/web_lab_project/projecthome.html')
    }else{
        res.send("registratin failed,password didnt match!!");
    }
    
   });
   exp.get('/book',function(req,res){
    
    console.log(nameofpark[0]+" "+loctaion[0]);
    var reply='';
    reply+="<html><head><style>body{background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url("+"https://github.com/prince-09/files/blob/master/web_lab_project/projectimage1.jpg?raw=true"+");background-size: cover;background-position: center;}"+
    "ul{float: right;list-style-type: none;margin-top: 25px;}ul li{display: inline-block;}ul li a{text-decoration: none;color: #fff;padding: 5px 20px;border: 1px solid transparent;transition: 0.6s ease;}ul li a:hover{background-color: #fff;color: #000;}ul li a.active{background-color: #fff;color: #000;}.logo img{float: left;width : 70px;height: 70px;margin-top: 25px;border-radius: 4px;}"+
    ".about{ margin-top: 150px;border: 2pt solid white;background-color: white;width: 900px;border-radius: 20px;margin-right: 250px;}.Title{padding: 20px;color: blue;font-size: 35px;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}.desc{padding: 25px;color: black;font-size: 20px;font-family: 'Courier New', Courier, monospace;}"+
    ".form{margin-left: 455px;padding: 15px;border: 1px solid white;border-radius: 20px;width: 450px;}.edit{margin-left: 20px;color: white;}#btn{margin-top: 40px;margin-left: 130px;width: 100px;height: 30px;;} #fill{margin-top: 120px;margin-left: -500px;color: whitesmoke;font-size: 15px;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif}#name{ margin-left: 120px;padding: 3px; background-color:rgba(0, 0, 0, 0);color:white;border: none;outline:none;border-bottom: 1px solid white;}"+
    "#mob{margin-left: 110px;padding: 3px;margin-top: 30px; background-color:rgba(0, 0, 0, 0);color:white;border: none;outline:none;border-bottom: 1px solid white;}#mail{margin-left: 110px;padding: 3px;margin-top: 20px; background-color:rgba(0, 0, 0, 0);color:white;border: none;outline:none;border-bottom: 1px solid white;}#nameofparks{width: 160px;}#loc{margin-left: 15px;padding: 3px;margin-top: 30px; background-color:rgba(0, 0, 0, 0);color:white;border: none;outline:none;border-bottom: 1px solid white;}"+
    "#hours{margin-left: 50px;padding: 3px;margin-top: 30px; background-color:rgba(0, 0, 0, 0);color:white;border: none;outline:none;border-bottom: 1px solid white;}ul li a.active{background-color: #fff;color: #000;}</style><script>var nameofparks="+nameofpark+";var location="+loctaion+";var sum=0;function tic(){var s=document.getElementById("+"nameofparks"+").value;var loc=document.getElementById('loc');for(var i=0;i<nameofparks.length;i++){if(nameofparks[i]==s){loc.value=location[i];}}}</script></head>"+
    "<body><div class="+"logo"+"><img src="+"https://github.com/prince-09/files/blob/master/web_lab_project/projectImage.jpg?raw=true"+" ></div><ul><li><a href="+"/main"+">Home</a></li><li><a class="+"active"+" href="+"/book"+">Book a Parking slot</a></li><li><a href="/">Sign Out</a></li><li><a href="+"/nearsearch"+">See Nearby Parking Slots</a></li><li><a href="+"/profile"+">Profile</a></li><li><a href="+"/contact"+">Contact</a></li><li><a href="+"/about"+">About</a></li><h4 id="+"fill"+">Fill the details of your booking</h4></ul><br><br><br><br><br><br><br><br><br><br><br><br>"+
    "<form class="+"form"+" action="+"/bookin"+" method="+"POST"+"><br><label class="+"edit"+">Name : </label><input type="+"text"+" id="+"name"+" name="+"name"+"><br><label class="+"edit"+">  Mobile : </label> <input type="+"tel"+" id="+"mob"+" name="+"mobno"+"><br><label class="+"edit"+"> E Mail : </label><input type="+"email"+" id="+"mail"+" name="+"email"+"><br><br><label class="+"edit"+">Name of Parking location : </label><select onclick="+"tic()"+" id="+"nameofparks"+" name="+"park"+"><option value="+nameofpark[0]+">"+nameofpark[0]+"</option><option value="+nameofpark[1]+">"+nameofpark[1]+"</option><option value="+nameofpark[2]+">"+nameofpark[2]+"</option></select><br><label class="+"edit"+"> Location of Parking lot : </label><input type="+"text"+" id="+"loc"+"><br><label class="+"edit"+"> Number of Hours : <input type="+"tel"+" id="+"hours"+" name="+"hour"+"><br><input type="+"submit"+" value="+"Submit"+" id="+"btn"+"></form></body></html>";
    res.send(reply);

   });
   exp.get('/profile',function(req,res){
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
"}.tag{margin-left: 100px;}#loc{margin-left: 350px;font-size: 20px;color: bisque;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;}#locimg{margin-left: 700px;width: 300px;height: 300px;}#submit{margin-left: 200px;width: 100px;height: 30px;color:black;background-color: blue}.content{padding-left: 150px;}.item{ height: 50px;font-size: 20px;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}#profile{font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;color:skyblue;margin-left: 40px;}#tble{margin-left: 90px;color: white;}</style></head>"+
"<body><div class="+"logo"+"><img src="+"https://github.com/prince-09/files/blob/master/web_lab_project/projectImage.jpg?raw=true"+" ></div><ul><li><a href="+"/main"+">Home</a></li><li><a href="+"/book"+">Book a Parking slot</a></li>"+
                "<li><a href="+"/"+">Sign Out</a></li>"+
                "<li><a href="+"/nearsearch"+">See Nearby Parking Slots</a></li>"+
                "<li><a class="+"active"+"  href="+"/profile"+">Profile</a></li>"+
                "<li><a href="+"/contact"+">Contact</a></li>"+
                "<li><a href="+"/about"+">About</a></li>"+
            "</ul><br><br><br><br><br><br><br>"+
            "<h1 id="+"profile"+">Profile</h1>"+
            "<table id="+"tble"+">"+
"<th></th><tr class="+"item"+"><td>Name</td><td class="+"content"+">"+name+"</td></tr><tr class="+"item"+"><td>E mail</td><td class="+"content"+">"+mail+"</td></tr><tr class="+"item"+"><td>"+
"mobile number</td><td class="+"content"+">"+mobnumber+"</td></tr><tr class="+"item"+"><td>Type of vehicle</td><td class="+"content"+">Two wheeler</td></tr><tr class="+"item"+"><td>Address</td><td class="+"content"+">]kjhhhkvvkkkhbkhhvjgcg bhj</td></tr></table></body>";
    //console.log(profile1)   
    res.send(reply);
   })