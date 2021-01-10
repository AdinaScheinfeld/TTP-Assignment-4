
//changing text if submitted and alert for incorrect password
document.getElementById('submit')
    .addEventListener('click', function(event){

        if(document.getElementById("password").value == 12345678){
            document.getElementById('message').innerHTML = 
                "<h1>Thank you for submitting the form<h1>";
        }   
        else{
            alert("Your password is incorrect");
        }
});



