//your JS code here. If required.
function backspace(){
    let myinput = document.getElementById("display");
    let ans = myinput.value.substring(0,myinput.value.length-1);
    console.log(ans);
    // document.getElementById("display").value = ans;
    console.log(myinput);
    myinput.value = ans;
}
