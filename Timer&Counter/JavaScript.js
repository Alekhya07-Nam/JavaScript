document.getElementsByClassName("hours")[0].innerHTML=0;
document.getElementsByClassName("minutes")[0].innerHTML=0;
document.getElementsByClassName("seconds")[0].innerHTML=0;
let k;
let l;
let hrs;
let mins;
let seco;
function inputingTimer(){
     hrs=window.parseInt(prompt("Enter Hours:"));
     mins=window.parseInt(prompt("Enter Minutes:"));
     seco=window.parseInt(prompt("Enter Seconds: "));
}
function startingTimer(){
    var hoursdiv= document.getElementsByClassName("hours")[0];
    var minutesdiv=document.getElementsByClassName("minutes")[0];
    var secondsdiv=document.getElementsByClassName("seconds")[0];
    hoursdiv.style.boxShadow="0px 0px 4px 4px lightgreen";
    minutesdiv.style.boxShadow="0px 0px 4px 4px lightgreen";
    secondsdiv.style.boxShadow="0px 0px 4px 4px lightgreen";
    function fun1(secs){
        var sec=document.getElementsByClassName("seconds")[0].innerHTML;
        var sec=parseInt(sec);
        if(sec!=60){
            sec+=1;
            secondsdiv.innerHTML=sec;
            console.log(":)");
            if(sec==60){
                var min=document.getElementsByClassName("minutes")[0].innerHTML;
                var min=parseInt(min);
                min+=1;
                console.log(min);
                minutesdiv.innerHTML=min;
                if(min==60){
                    var hr=document.getElementsByClassName("hours")[0].innerHTML;
                    hr=parseInt(hr);
                    hr+=1;
                    hoursdiv.innerHTML=hr;
                    minutesdiv.innerHTML=0;
                }
                secondsdiv.innerHTML=0;
            }
        }
        if (hr == hrs && min == mins && sec == seco) {
            console.log("Timer complete");
            clearInterval(k);
        }
    }
    k=setInterval(fun1,100);
}


function resetingTimer(){
    var hoursdiv= document.getElementsByClassName("hours")[0];
    var minutesdiv=document.getElementsByClassName("minutes")[0];
    var secondsdiv=document.getElementsByClassName("seconds")[0];
    hoursdiv.style.boxShadow="0px 0px 4px 4px #FDFA72";
    minutesdiv.style.boxShadow="0px 0px 4px 4px #FDFA72";
    secondsdiv.style.boxShadow="0px 0px 4px 4px #FDFA72";
    clearInterval(k);
    console.log("hi");
    hoursdiv.innerHTML=0;
    minutesdiv.innerHTML=0;
    secondsdiv.innerHTML=0;
}

function stopingTimer(){
    var hoursdiv= document.getElementsByClassName("hours")[0];
    var minutesdiv=document.getElementsByClassName("minutes")[0];
    var secondsdiv=document.getElementsByClassName("seconds")[0];
    hoursdiv.style.boxShadow="0px 0px 4px 4px #F77E7E";
    minutesdiv.style.boxShadow="0px 0px 4px 4px #F77E7E";
    secondsdiv.style.boxShadow="0px 0px 4px 4px #F77E7E";
    clearInterval(k);
}

function inputCounter(){
    var hr=window.prompt("Enter Hours:");
    var min=window.prompt("Enter Minutes:");
    var sec=window.prompt("Enter Seconds: ");
    var hoursdiv=document.getElementsByClassName("hours")[1];
    hoursdiv.innerHTML=hr;
    var minutesdiv=document.getElementsByClassName("minutes")[1];
    minutesdiv.innerHTML=min;
    var secondsdiv=document.getElementsByClassName("seconds")[1];
    secondsdiv.innerHTML=sec;
}

function startingCounter(){
    var hoursdiv= document.getElementsByClassName("hours")[1];
    var minutesdiv=document.getElementsByClassName("minutes")[1];
    var secondsdiv=document.getElementsByClassName("seconds")[1];
    hoursdiv.style.boxShadow="0px 0px 4px 4px lightgreen";
    minutesdiv.style.boxShadow="0px 0px 4px 4px lightgreen";
    secondsdiv.style.boxShadow="0px 0px 4px 4px lightgreen";
    function fun2(){
        var sec=document.getElementsByClassName("seconds")[1].innerHTML;
        var min=document.getElementsByClassName("minutes")[1].innerHTML;
        var min=parseInt(min);
        var sec=parseInt(sec);
        var hr=document.getElementsByClassName("hours")[1].innerHTML;
                    hr=parseInt(hr);
        if(sec===0 && min>0){
            sec=60;
            min-=1;
            minutesdiv.innerHTML=min;
        }
        if(sec===0 && hr>0){
            sec=60;
            hr-=1
            min=59;
            minutesdiv.innerHTML=min;
            hoursdiv.innerHTML=hr;
        }
        if(sec==0 && min==0){
            sec=60;
            secondsdiv.innerHTML=sec;
        }
        if(sec>0){
            sec-=1;
            secondsdiv.innerHTML=sec;
            if(sec==0){
                var min=document.getElementsByClassName("minutes")[1].innerHTML;
                var min=parseInt(min);
                if(min>0){
                min-=1;
                minutesdiv.innerHTML=min;
                }
                if(min===0){
                    var hr=document.getElementsByClassName("hours")[1].innerHTML;
                    hr=parseInt(hr);
                    if(hr>0){
                        hr-=1;
                        hoursdiv.innerHTML=hr;
                        min=60;
                        minutesdiv.innerHTML=min;
                    }
                }
                if(hr==0 && min===0 && sec==0){   
                    console.log(hr);
                    console.log(min);
                    console.log(sec);
                    clearInterval(l);   
                }
                if(hr!=0 || min!=0){
                secondsdiv.innerHTML=60;
                }
            }
        }
    }
    l=setInterval(fun2,100);
}

function resetingCounter(){
    var hoursdiv= document.getElementsByClassName("hours")[1];
    var minutesdiv=document.getElementsByClassName("minutes")[1];
    var secondsdiv=document.getElementsByClassName("seconds")[1];
    hoursdiv.style.boxShadow="0px 0px 4px 4px #FDFA72";
    minutesdiv.style.boxShadow="0px 0px 4px 4px #FDFA72";
    secondsdiv.style.boxShadow="0px 0px 4px 4px #FDFA72";
    clearInterval(l);
    hoursdiv.innerHTML=0;
    minutesdiv.innerHTML=0;
    secondsdiv.innerHTML=0;
}

function stoptingCounter(){
    var hoursdiv= document.getElementsByClassName("hours")[1];
    var minutesdiv=document.getElementsByClassName("minutes")[1];
    var secondsdiv=document.getElementsByClassName("seconds")[1];
    hoursdiv.style.boxShadow="0px 0px 4px 4px #F77E7E";
    minutesdiv.style.boxShadow="0px 0px 4px 4px #F77E7E";
    secondsdiv.style.boxShadow="0px 0px 4px 4px #F77E7E";
    clearInterval(l);
}