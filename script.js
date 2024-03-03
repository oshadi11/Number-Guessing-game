let noOfInputs =0;
let num = Math.floor(Math.random()*11);
function newGame() {
    noOfInputs =0;
    num = Math.floor(Math.random()*11);
    document.getElementById("h3txt").innerHTML = "";
    document.getElementById("h3txt2").innerHTML = "";
    document.getElementById("numInput").value = "";
    console.log(num);
}

function sumbit() {
    let inputNum = document.getElementById("numInput").value;
if(inputNum!=""){
    console.log(num);
if(0<=inputNum && inputNum<=10){
    noOfInputs++
if(noOfInputs<4){
    if(inputNum == num){
        document.getElementById("h3txt").innerHTML = "Great! You Won";
        document.getElementById("h3txt2").innerHTML = ""; 
    }else{
        document.getElementById("h3txt").innerHTML = "Try Again..";
        console.log(inputNum);
        if(inputNum>num){
            document.getElementById("h3txt2").innerHTML = "less than "+inputNum; 
        }else if(inputNum<num){
            document.getElementById("h3txt2").innerHTML = "more than "+inputNum;  
        }
    }
}else{
    document.getElementById("h3txt").innerHTML = "You lose the game";
    document.getElementById("h3txt2").innerHTML = "The Number was "+num;

}
}else{
    document.getElementById("h3txt").innerHTML = "Please Enter a valid number";
    document.getElementById("h3txt2").innerHTML = ""; 
}
}else{
    document.getElementById("h3txt").innerHTML = "Enter a number";
    document.getElementById("h3txt2").innerHTML = "";  
}
}