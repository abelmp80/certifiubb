(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict


function postModal(uri,data_array){

    var modal = '<div class="modal in" id = "modal_post_smart"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-body" id = "modal_post_smart-body"></div><div class="modal-footer"><button type="button" class="btn btn-xs btn-white no-radius btn-info" data-dismiss="modal" ><label class="pull-right"> Cerrar</label></button></div></div></div></div>';
    var data = data_array;

    $('body').append(modal);

        $.ajax({
            url: uri,
            type: "POST",
            data: data,
            processData: true,  
            async :false,            
            cache: false,
            success: function (response) {

                    $('#modal_post_smart-body').html(response);
                    $('#modal_post_smart').modal('show');
                
            }
        }
    );
    
}

function getModal(uri,data_array){

    var modal = '<div class="modal in" id = "modal_post_smart"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-body" id = "modal_post_smart-body"></div><div class="modal-footer"><button type="button" class="btn btn-xs btn-white no-radius btn-info" data-dismiss="modal" ><label class="pull-right"> Cerrar</label></button></div></div></div></div>';
    var data = data_array;

    $('body').append(modal);

        $.ajax({
            url: uri,
            type: "GET",
            data: data,
            processData: true,  
            async :false,            
            cache: false,
            success: function (response) {

                    $('#modal_post_smart-body').html(response);
                    $('#modal_post_smart').modal('show');
                
            }
        }
    );
    
}

function notificar(titulo, mensaje, tipo) {
  var cuerpo = {title: '<b>'+titulo+'</b><br>', message: mensaje};
  var tipo = {type:tipo};
  $.notify(cuerpo,tipo);
}

function notificarModal(titulo, mensaje, tipo) {
  var cuerpo = {title: '<b>'+titulo+'</b><br>', message: mensaje};
  var tipo = {type:tipo,z_index: 2000};
  $.notify(cuerpo,tipo);
}