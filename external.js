var p1 = document.getElementById("page1");
var p2 = document.getElementById("page2");
var p3 = document.getElementById("page3");
var p4 = document.getElementById("page4");
var p5 = document.getElementById("page5");
var p6 = document.getElementById("page6");
var p7 = document.getElementById("page7");
var page = 1;
p2.style.display = "none";
p3.style.display = "none";
p4.style.display = "none";
p5.style.display = "none";
p6.style.display = "none";
p7.style.display = "none";
document.getElementById("p1_to_p2").addEventListener("click", p1_to_p2);
document.getElementById("p2_to_p3").addEventListener("click", p2_to_p3);
document.getElementById("p3_to_p4").addEventListener("click", p3_to_p4);
document.getElementById("p4_to_p5").addEventListener("click", p4_to_p5);
document.getElementById("p5_to_p6").addEventListener("click", p5_to_p6);
document.getElementById("p5_to_p7").addEventListener("click", p5_to_p7);
document.getElementById("p7_to_p5").addEventListener("click", p7_to_p5);
document.getElementById("p6_to_p5").addEventListener("click", p6_to_p5);
document.getElementById("p5_to_p1").addEventListener("click", p5_to_p1);
function p1_to_p2(){
	p1.style.display = "none";
	p2.style.display = "inline";
	page = 2;
}
function p2_to_p3(){
	if(score[0]+score[1]+score[2]+score[3] == 0){
		alert("請至少選擇一項");
	}
	else{
		p2.style.display = "none";
		p3.style.display = "inline";
		page = 3;
	}
}
function p3_to_p4(){
	page = 4;
	p3.style.display = "none";
	p4.style.display = "inline";
	addScore();
}
function p4_to_p5(){
	page = 5;
	p4.style.display = "none";
	p5.style.display = "inline";
	addScore();
	suggestPet();
}
function p5_to_p6(){
	page = 6;
	p5.style.display = "none";
	p6.style.display = "inline";
}
function p6_to_p7(){
	page = 7;
	p6.style.display = "none";
	p7.style.display = "inline";
}
function p5_to_p7(){
	page = 7;
	p5.style.display = "none";
	p7.style.display = "inline";
}
function p6_to_p5(){
	page = 5;
	p6.style.display = "none";
	p5.style.display = "inline";
}
function p7_to_p5(){
	page = 5;
	p7.style.display = "none";
	p5.style.display = "inline";
}
function p5_to_p1(){
	page = 1;
	p5.style.display = "none";
	p1.style.display = "inline";
	reset();
}

var score = [0, 0, 0, 0]; //小型狗 中型狗 大型狗 貓
var scoreTem = [0, 0, 0, 0];
var smallDog = document.getElementsByClassName('smallDog');
var middleDog = document.getElementsByClassName('middleDog');
var bigDog = document.getElementsByClassName('bigDog');
var dog = document.getElementsByClassName('dog');
var cat = document.getElementsByClassName('cat');
var btnGroup1 = document.getElementsByClassName('btnGroup1');
var btnGroup2 = document.getElementsByClassName('btnGroup2');
for(var i = 0; i < smallDog.length; i++) smallDog[i].addEventListener('click', addScoreTem.bind(null, smallDog[i], 0));
for(var i = 0; i < middleDog.length; i++) middleDog[i].addEventListener('click', addScoreTem.bind(null, middleDog[i], 1));
for(var i = 0; i < bigDog.length; i++) bigDog[i].addEventListener('click', addScoreTem.bind(null, bigDog[i], 2));
for(var i = 0; i < cat.length; i++) cat[i].addEventListener('click', addScoreTem.bind(null, cat[i], 3));
for(var i = 0; i < dog.length; i++) dog[i].addEventListener('click', addScoreTem.bind(null, dog[i], 4));
function addScoreTem(e, num){
	if(page == 2){
		if(e.style.border != "5px solid darkgrey"){ //haven't been clicked
			e.style.backgroundColor = "whitesmoke";
			e.style.border = "5px solid darkgrey";
			if(num == 4){
				score[0]++;
				score[1]++;
				score[2]++;
			}
			else score[num]++;
		}
		else{
			e.style.backgroundColor = "bisque";
			e.style.border = null;
			if(num == 4){
				score[0]--;
				score[1]--;
				score[2]--;
			}
			else score[num]--;
		}
	}
	else if(page == 3){
		var btns = document.getElementsByClassName('p3');
		for(var j = 0; j < btns.length; j++){
			btns[j].style.backgroundColor = "bisque";
			btns[j].style.border = null;
			scoreTem = [0, 0, 0, 0];
		}
		e.style.backgroundColor = "whitesmoke";
		e.style.border = "5px solid darkgrey";
		scoreTem[num]++;
	}
	else if(page == 4){
		var num1, num2;
		if(e.style.border != "5px solid darkgrey"){ //the btn hasn't been clicked
			e.style.backgroundColor = "whitesmoke";
			e.style.border = "5px solid darkgrey";
		}
		else{
			e.style.backgroundColor = "bisque";
			e.style.border = null;
		}
		var clickedBtns = 0;
		for(var i = 0; i < btnGroup1.length; i++){
			if(btnGroup1[i].style.border == "5px solid darkgrey"){
				clickedBtns++;
				num1 = (i+3)%4;
			}
		}
		if(clickedBtns > 1){ //more than one btn in a line was clicked
			for(var j = 0; j < btnGroup1.length; j++){
				btnGroup1[j].style.backgroundColor = "bisque";
				btnGroup1[j].style.border = null;
			}
			e.style.backgroundColor = "whitesmoke";
			e.style.border = "5px solid darkgrey";
			num1 = num;
		}
		clickedBtns = 0;
		for(var i = 0; i < btnGroup2.length; i++){
			if(btnGroup2[i].style.border == "5px solid darkgrey"){
				clickedBtns++;
				num2 = (i+3)%4;
			}
		}
		if(clickedBtns > 1){ //more than one btn in a line was clicked
			for(var j = 0; j < btnGroup2.length; j++){
				btnGroup2[j].style.backgroundColor = "bisque";
				btnGroup2[j].style.border = null;
			}
			e.style.backgroundColor = "whitesmoke";
			e.style.border = "5px solid darkgrey";
			num2 = num;
		}
		scoreTem = [0, 0, 0, 0];
		scoreTem[num1]++;
		scoreTem[num2]++;
	}
}
function addScore(){
	for(var i = 0; i < 4; i++){
		score[i] += scoreTem[i];
	}
	console.log("addScore: " + score);
}
function suggestPet(){
	var sug = 0;
	for(var i = 1; i < 4; i++){
		if(score[i] > score[sug]){ sug = i; }
	}
	switch(sug){
		case 0:
			document.getElementById("suggestPetLabel").innerHTML = "小型犬";
			break;
		case 1:
			document.getElementById("suggestPetLabel").innerHTML = "中型犬";
			break;
		case 2:
			document.getElementById("suggestPetLabel").innerHTML = "大型犬";
			break;
		case 3:
			document.getElementById("suggestPetLabel").innerHTML = "貓咪";
			break;
	}
}
function reset(){
	score = [0, 0, 0, 0];
	scoreTem = [0, 0, 0, 0];
	for(var i = 0; i < smallDog.length; i++){
		smallDog[i].style.backgroundColor = "bisque";
		smallDog[i].style.border = null;
	}
	for(var i = 0; i < middleDog.length; i++){
		middleDog[i].style.backgroundColor = "bisque";
		middleDog[i].style.border = null;
	}
	for(var i = 0; i < bigDog.length; i++){
		bigDog[i].style.backgroundColor = "bisque";
		bigDog[i].style.border = null;
	}
	for(var i = 0; i < cat.length; i++){
		cat[i].style.backgroundColor = "bisque";
		cat[i].style.border = null;
	}
	for(var i = 0; i < dog.length; i++){
		dog[i].style.backgroundColor = "bisque";
		dog[i].style.border = null;
	}
}