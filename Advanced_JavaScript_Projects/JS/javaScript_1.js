
//              ---- SWITCH_CASE() ----
function topSportsCars()
{
    var carOutput;

    var cars = document.getElementById( "car-id" ).value;

    var por911Text = "<b>PROS</b><br>--> Acceleration and response of" 
    + " new<br>Hybrid GTS Power Unit!<br>" 
    + "--> Simple and functional interior even<br>" 
    + "with digital instruments!<br>"
    + "--> Mind-bendingly Fast!<br>";
    var mazText = "<b>PROS</b><br>--> Spirited Performance!<br><br>" 
    + "--> Balance Involving Handling!<br><br>"
    + "--> Excellent Packaging!";

    switch( cars )
    {
        case "Porsche 911":
            carOutput = "Porsche 911" + por911Text;
        break;
        case "Mazda MX-5":
            carOutput = "Mazda MX-5" + mazText;
        break;
        case "BMW M2":
            carOutput = "BMW M2" + bmwText;
        break;
        case "Porsche 718 Boxster":
            carOutput = "Porsche 718 Boxster" + por718Text;
        break;
        case "Lotus Emira":
            carOutput = "Lotus Emira" + lotusText;
        break;
        case "Chevrolet Corvette":
            carOutput = "Cvevrolet Corvette" + corvText;
        break;
        case "Ford Mustang":
            carOutput = "Ford Mustang" + mustText;
        break;
        case "Jaguar F-Type":
            carOutput = "Jaguar F-Type" + jagText;
        break;
        case "Alpine A110 R":
            carOutput = "Alpine A110 R" + alpText;
        break;
        case "Mercedes-AMG SL":
            carOutput = "Mercedes-AMG SL" + amgText;
        default:

        
        carOutput = "Please Enter the Vehicle Name Exactly" 
        + "<br>as it is Written From the List Above";
    }

    document.getElementById( "car-id" ).innerHTML = carOutput;
}
//              ---- END_SWITCH_CASE() ----



//              ---- GET_ELEMENT_BY_CLASS_NAME() ----
// Constant varaible
const collection = document.getElementsByClassName( "example" );

for( let i = 0; i < collection.length; i++ )
{
    collection[ i ].style.backgroundColor = "red";
}
//              ---- END_GET_ELEMENT_BY_CLASS_NAME() ----



//              ---- CANVAS_IMAGE ----
function myCanvas()
{
    var copyImage = document.getElementById( "canvas" );
    var ctx = copyImage.getContext( "2d" );
    var img = document.getElementById( "truck" );

    ctx.drawImage( img, 10, 10 );
}
//              ---- END_CANVAS_IMAGE ----



//              ---- createLinearGradient()_METHOD ----
const canvas2 = document.getElementById( "myCanvas" );
const ctx = canvas2.getContext( "2d" );

// Create Gradient
const grdt = ctx.createLinearGradient( 0, 0, 170, 0 );

grdt.addColorStop( 0, "black" );
grdt.addColorStop( 0.5, "red" );
grdt.addColorStop( 1, "white" );

// Fill the Rectangle
ctx.fillStyle = grdt;
ctx.fillRect = ( 20, 20, 150, 100 );
//              ---- END_createLinearGradient()_METHOD ----