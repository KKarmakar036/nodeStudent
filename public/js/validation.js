$(document).ready(function(){
    $("#name_error").hide()
    $("#email_error").hide()
    $("#phone_error").hide()

    let name_err =true
    let email_err =true
    let phone_err =true

    $('#name').keyup(function(){
        full_name()
    })

    function full_name(){
        const nameValue=$('#name').val()
        const namValide=(/^[A-Za-z ]{3,20}$/)
        if(nameValue == ""){
            $("#name_error").show()
            $("#name_error").html("Required Field")
            name_err =false
            return false
        }else if(nameValue.length < 3){
            $("#name_error").show()
            $("#name_error").html("Minimum 3 character")
            name_err =false
            return false
        }else if(nameValue.length > 20){
            $("#name_error").show()
            $("#name_error").html("Maximum 20 character")
            name_err =false
            return false
        }else if(!namValide.test(nameValue)){
            $("#name_error").show()
            $("#name_error").html("Only Character")
            name_err =true
            return true
        }
        else{
            $("#name_error").hide()
            name_err =true
            return true
        }
    }

    $('#email').keyup(function(){
        email_id();
    })

    function email_id(){
        const emailValue=$('#email').val()
        const emailValide=(/^([A-Za-z0-9]+)@([a-z]{5})([/.])([a-z]{3})$/)
        if(emailValue == ""){
            $("#email_error").show()
            $("#email_error").html("Required Field")
            email_err =false
            return false
        }else if(!emailValide.test(emailValue)){
            $("#email_error").show()
            $("#email_error").html("Enter Your Cruct Email (A-Za-z0-9 @ a-z . a-z)")
            email_err =true
            return true
        }
        else{
            $("#email_error").hide()
            email_err =true
            return true
        }
    }
    

    $('#phone').keyup(function(){
        phone_number();
    })

    function phone_number(){
        const phoneValue=$('#phone').val()
        const phoneValide=(/^[0-9]{10}$/)
        if(phoneValue == ""){
            $("#phone_error").show()
            $("#phone_error").html("Required Field")
            phone_err =false
            return false
        }else if(!phoneValide.test(phoneValue)){
            $("#phone_error").show()
            $("#phone_error").html("Enter Your 10 Digite Number")
            phone_err =true
            return true
        }
        else{
            $("#phone_error").hide()
            phone_err =true
            return true
        }
    }
})