var submitButton = document.getElementsByTagName("input")[1];
submitButton.addEventListener("click", external);
function external(e){
var password = document.getElementsByTagName("input")[0].value;
var input = document.getElementsByTagName("textarea")[0];
if (password != ""){
input.value = "Your password has been successfully submitted.";
}
e.preventDefault();
}