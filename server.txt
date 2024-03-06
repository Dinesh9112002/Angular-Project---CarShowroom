var express = require("express");
var bodyParser=require("body-parser");
var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/carshow');
var db=mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post("/adminlog",function(req, res){
	var email=req.body.email;
	// var name = req.body.name;
	var pass= req.body.pass;
	
	var data = {
		"email":email,
		// "name": name,
		"pass":pass
	}
	console.log(pass+email);
	db.collection('adminlog').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("ADMIN data inserted Successfully");
			
	});
	//return res.redirect('login.html');
})

app.post("/login",function(req, res){
	var email=req.body.email;
	// var name = req.body.name;
	var pass= req.body.pass;
	
	var data = {
		"email":email,
		// "name": name,
		"pass":pass
	}
	console.log(pass+email);
	db.collection('user').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("USER data inserted Successfully");
			
	});
	//return res.redirect('login.html');
})

app.post("/signup",function(req, res){
	var email = req.body.email;
	var name  = req.body.name;
	var phone = req.body.phone;
   var licence= req.body.licence;
   var password= req.body.password;

   
	var data = {
		"name": name,
		"email":email,
		"phone":phone,
	    "licence":licence,
		"password":password
	}
	console.log(name+email+phone+licence+password);
	db.collection('signup').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("NEW USER data inserted Successfully");
		   
	});
})

 app.post("/add1",function(req, res){
	var carName = req.body.carName;
	var carID  = req.body.carID;
	var yom = req.body.yom;
	var price = req.body.price;

	var data = {
		
		"carName": carName,
		"carID":carID,
	   "yom":yom,
		"price":price
	}
	console.log(carName+ carID+ yom+ price);
	db.collection('add').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("NEW CAR data inserted Successfully");
		   
	});
   //return res.redirect('login.html');
})

app.post("/sellcar",function(req, res){
	var carName = req.body.carName;
	var carNumber = req.body.carNumber
	//var carID  = req.body.carID;
	var yearOfPurchase = req.body.yearOfPurchase;
	var price = req.body.price;

	var data = {
		
		"carName": carName,
		"carNumber":carNumber,
	   "yearOfPurchase":yearOfPurchase,
		"price":price
	}
	console.log(carName+ carNumber+ yearOfPurchase+ price);
	db.collection('sell').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("SELL DETAILS data inserted Successfully");
		   
	});
   //return res.redirect('login.html');
})

app.post("/book",function(req, res){
	var email = req.body.email;
	var name  = req.body.name;
	var phone = req.body.phone;
   var city= req.body.city;

   
	var data = {
		
		"name": name,
		"email":email,
		"phone":phone,
	   "city":city
	}
	console.log(name+email+phone+city);
	db.collection('book').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("NEW BOOKING data inserted Successfully");
		   
	});
})

app.post("/book2",function(req, res){
	var mail = req.body.mail;
	var name  = req.body.name;
	var phone = req.body.phone;
   var city= req.body.city;

   
	var data = {
		
		"Name": name,
		"MailID":mail,
		"Phone":phone,
	   "City":city
	}
	console.log(name+mail+phone+city);
	db.collection('book').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("NEW BOOKING data inserted Successfully");
		   
	});
})

app.post("/book3",function(req, res){
	var mail = req.body.mail;
	var name  = req.body.name;
	var phone = req.body.phone;
   var city= req.body.city;

   
	var data = {
		
		"Name": name,
		"MailID":mail,
		"Phone":phone,
	   "City":city
	}
	console.log(name+mail+phone+city);
	db.collection('book').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("NEW BOOKING data inserted Successfully");
		   
	});
})


 app.post("/book4",function(req, res){
 	var mail = req.body.mail;
 	var name  = req.body.name;
 	var phone = req.body.phone;
    var city= req.body.city;

   
	var data = {
		
 		"Name": name,
 		"MailID":mail,
 		"Phone":phone,
 	   "City":city
 	}
 	console.log(name+mail+phone+city);
 	db.collection('book').insertOne(data,function(err, collection){
 		if (err) throw err;
 		console.log("NEW BOOKING data inserted Successfully");
		   
 	});
 })

// app.post("/book4",function(req, res){
//  var mail = req.body.mail;
// 	var name  = req.body.name;
//  	var phone = req.body.phone;
//     var city= req.body.city;

   
// 	var data = {
		
// 		name:{
// 			type:String,
// 			required: true
// 		}
// 	 	"MailID":mail,
// 	 	"Phone":phone,
// 	    "City":city
// 	}
// 	console.log(name);
// 	db.collection('book').insertMany(data,function(err, collection){
// 		if (err) throw err;
// 		console.log("NEW BOOKING data inserted Successfully");
		   
// 	});
// })

app.post("/contact",function(req, res){
	var email = req.body.email;
	var firstName  = req.body.firstName;
	var lastName = req.body.LastName;
	var phone = req.body.phone;
   var message= req.body.message;

   
	var data = {
		
		"firstName": firstName,
		"lastName": lastName,
		"email":email,
		"phone":phone,
	   "message":message
	}
	console.log(firstName+lastName+email+phone+message);
	db.collection('contact').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("NEW BOOKING data inserted Successfully");
		   
	});
})

app.get('/',function(req, res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('home');
}).listen(5000)


console.log("server listening at port 4200");
