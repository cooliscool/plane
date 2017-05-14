var invalid = "Invalid input";
var error = "Unknown error";

newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'jsFunctions/1firstWeight.js';
document.getElementsByTagName('head')[0].appendChild(newScript);


function formsubmit(formNum){
  switch (formNum) {
    case 1:
      console.log('works!');

      //Load the custom function -- Use this only if the files are run offline
      // in a local folder
      // Otherwise use jQuery loader with callback, which is commented out.

      $(function(){
        //Load the custom function
        $.getScript( "jsFunctions/1firstWeight.js" )
          .done(function( script, textStatus ) {

            p1 = parseFloat($('#param1').val());
            p2 = parseFloat($('#param2').val());
            p3 = parseFloat($('#param3').val());

            action = p1 + p2 + p3;

            if(action>0 | action<0 | action==0){
                output = firstWeight(p1, p2, p3);
                $('#outDisp').html(output);
            }
            else {
                $('#outDisp').text(invalid);
            }

          })
          .fail(function( jqxhr, settings, exception ) {
            $('#outDisp').text(error);
        });



      });
      break;

      case 2:

      console.log('case2');
      break;
    default:

  }
}
