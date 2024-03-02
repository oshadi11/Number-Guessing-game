let noOfInputs =0;
let num = Math.floor(Math.random()*11);
function sumbit(params) {
    let inputNum = document.getElementById("numInput").value;
    noOfInputs++
if(noOfInputs<4){
    if(inputNum == num){
        document.getElementById("h3txt").innerHTML = "Great! You Won";
        document.getElementById("h3txt2").innerHTML = ""; 
    }else{
        document.getElementById("h3txt").innerHTML = "Try Again";
        if(inputNum>num){
            document.getElementById("h3txt2").innerHTML = "less than "+inputNum; 
        }else if(inputNum<num){
            document.getElementById("h3txt2").innerHTML = "more than "+inputNum;  
        }
    }
}else{
    document.getElementById("h3txt").innerHTML = "You lose the game";
    document.getElementById("h3txt2").innerHTML = "";

}
}