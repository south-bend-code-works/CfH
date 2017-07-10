(function() {
  $(document).ready(init);

function init() {
  // alert('it is working');
  $('.bed').click(check);
}

function check(){
  $(this).toggleClass("red");
}

})();
