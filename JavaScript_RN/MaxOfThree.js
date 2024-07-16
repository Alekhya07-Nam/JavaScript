var a=parseInt(window.prompt("Enter a value"));
var b=parseInt(window.prompt("Enter b value"));
var c=parseInt(window.prompt("Enter c value"));
if(a>b && a>c){
    document.write(a);
}
else if(b>a && b>c){
    document.write(b);
}
else{
    document.write(c);
}
document.write("<br>")
var a=[1,2,3,4,5,6,7,8,9]
a.map(i => {
    document.write(i);
})