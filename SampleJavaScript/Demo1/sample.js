function submit(username,password){
//alert("function" + username + password)	
/*document.write("the username entered is :"+username) 
document.write("the password typed is "+password)*/
document.getElementById("display").innerHTML=username;
var x=5;
var y=7;
console.log(x,y);
var z=x*y;
console.log(z);

document.getElementById("result").innerHTML=z;



var person={name:"John",age:28 ,weight:201};
document.getElementById("testing").innerHTML = person.name+"is"+person.age + "years old";
 }

function wish(){
	var greeting;
	var time=new Date().getHours();
	debugger;
	if (time < 10)
	{
		greeting="Good Morning";
	}else if (time <20){
		greeting="Good Afternoon"
	}else
	{
		greeting="Good Night"
	}
	document.getElementById("wish").innerHTML=greeting;
}