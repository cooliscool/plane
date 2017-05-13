
function formsubmit(formNum){
  switch (formNum) {
    case 1:
      console.log('works!');
      $(function(){
        action =  parseFloat($('#param1').val()) + parseFloat($('#param2').val()) + parseFloat($('#param3').val());
        console.log(action);
        $('#outDisp').text(action);
      });
      break;
    default:

  }
}
