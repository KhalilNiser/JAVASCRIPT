
function validateForm()
{
    let x = document.forms[ "myForm" ][ "fstName"].value;
    x = document.forms[ "myForm" ][ "lstName"].value;
    x = document.forms[ "country" ][ "country"].value;

    if( x == "" )
    {
        alert( "Name Must Filled Out" );
        return false;
    }
}