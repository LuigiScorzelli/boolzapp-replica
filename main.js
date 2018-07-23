$(document).ready(function(){

 // inserisco un messaggio e rispondo con ok
  $('#user').keypress(function(e){

    if(e.which == 13){
      var message = $('#user').val();
      // console.log(message);
      if(message.length > 0){
        $('.main-modal').append('<div class="posted">' +
          message +
          '<span class="main-date">17:00</span>' + '</div>' + '<div class="clear"></div>'
        )

      }
      $('#user').val(' ');
      setTimeout(risposta, 1000);
    }

  });


  // seleziono la input dove cercare un contatto
  // var contatti = $('.contact-name h3').text();
  var p = $('.contact-name').children();
  console.log(p)

  for(var i = 0; i < p.length; i++){

    var b = $(p[i]).text();
    var array_contact = [];
    array_contact.push(b);

      console.log(array_contact)
  }

    $('#filter').click(function(){

    //   devo leggere il valore inserito dall'utente
        $('#filter').keyup(function(){
          var insert_user = $('#filter').val();
            console.log(insert_user);
            // if(array_contact.includes(insert_user)){
                // alert('ok')
              // }
            })
            // seleziono i nomi dei contatti
      })

})

function risposta(){

  $('.main-modal').append('<div class="received">' +
    'ok' +
    '<span class="main-date">17:00</span>' + '</div>' + '<div class="clear"></div>'
  )
}
