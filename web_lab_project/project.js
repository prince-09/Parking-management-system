var app=require('express');
var exp=app();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var bodyParser = require('body-parser');
var conn = mongoose.connection;
var schema=mongoose.Schema({
    name : String,
    email:String,
    mob:Number,
    password:String,
    conpass:String,
});
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
            res.sendFile(__dirname+'/web_lab_project/projecthome.html');
        }else{
            res.sendFile(__dirname+'/web_lab_project/login.html');
        }
    })
})
exp.get('/book',function(req,res){
    res.sendFile(__dirname+'/web_lab_project/bookaslot.html');
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
        res.sendFile(__dirname+'/web_lab_project/projecthome.html')
    }else{
        res.send("registratin failed,password didnt match!!");
    }
    
   });