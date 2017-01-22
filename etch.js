$(document).ready(function(){

var resolution = 32; 
//var newresolution;
var backgroundcolor;
var originalColor;

    

 
$('button#change').click(function(){
  //alert($('#resolution').val());
/*   newresolution= prompt('New resolution');
        if(newresolution != "") {
        resolution = newresolution;*/
        $('#gridWrapper').empty();
        var Nres = $('#resolution').val();
        if(Nres != "") {
        resolution = Nres;
    }
        init();
        //console.log(resolution);
});
 
//console.log(newresolution);    

    
function getColor() {
    backgroundcolor="black";
    originalColor= "white";
    var newBackgroundColor = $('#pColor').val();
    backgroundcolor=newBackgroundColor;
    var newOriginalColor = $('#oColor').val();
    originalColor = newOriginalColor;

/*    if(Nres != "") {
        resolution = Nres;
    }*/
    }
        //console.log(resolution);

    
    
    //console.log(newBackgroundColor);
    

 
    
function init(){  
    //console.log(resolution);
    
var size =(920 / resolution);
var count = (920 / size) * (920/size); // *1.5;
getColor();
 for(var i = 0; i < count; i++) {
    var div =$("<div class='gridBlock'></div>");     
        $('#gridWrapper').append(div);
        }
$('.gridBlock').width(size);
$('.gridBlock').height(size);
$('.gridBlock').css('background-color', originalColor);
    
    $('#gridWrapper div').mouseenter(function(){
    $(this).css('background-color', backgroundcolor);
    //console.log('entered the void');
  
    
});


    }

    
    
   

init(); 
//console.log(resolution);




//console.log(newresolution);

   
    
});





  