var invalid = "Invalid input";

function formsubmit(formNum){
  switch (formNum) {
    case 1:
      console.log('works!');
      $(function(){
        action =  parseFloat($('#param1').val()) + parseFloat($('#param2').val()) + parseFloat($('#param3').val());
        console.log(action);

        if(action>0 | action<0 | action==0){
            $('#outDisp').text(action);
        }
        else {
            $('#outDisp').text(invalid);
        }

      });
      break;
    default:

  }
}
