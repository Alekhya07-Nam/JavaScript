var data= {
    First_Name:"",
    Last_Name:"",
    Moblie:"",
    Email:"",
    Technology:"",
    College:""
};
function firstName(data1){
    data.First_Name=data1;
}
function lastName(data1){
    data.Last_Name=data1;
}
function moblie(data1){
    data.Moblie=data1;
}
function college(data1){
    data.College=data1;
}
function email(data1){
    data.Email=data1;
}
function technology(data1){
    data.Technology=data1;
}
function submitData(event){
    event.preventDefault();
    console.log(data);
}