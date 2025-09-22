function validate_name(name1,err_name)
{
if(name1.value=="")
    {
        err_name.innerHtml="Enter name";
        name1.focus();
        return false;

    }
    else if(name1.value.length<3)
    {
        
    }

}