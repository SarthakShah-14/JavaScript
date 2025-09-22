function validate_name(name1,err_name)
{
if(name1.value=="")
    {
        err_name.innerHTML="Enter name";
        name1.focus();
        return false;

    }
    else if(name1.value.length<3)
    {
        err_name.innerHTML="Min Length 3";
        name1.focus();
        return false;
    }
    else
    {
        err_name.innerHTML="";
        return true;

    }

}
function validate_email(email1,arr_email)
{
    if(email1.value.trim()=="")
    {
        err_email.innerHTML="Enter email";
        email1.focus();
        return false;
    }
    else if(email1.value.trim().length<6)
    {
        err_email.innerHTML="Min len 6";
        email1.focus();
        return false;    
    }
    else{
        err_email.innerHTML="";
        email1.focus();
        return true;

    }
}