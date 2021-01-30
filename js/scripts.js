
$("#carouselButton").click(function(){
          if ($("#carouselButton").children("span").hasClass('fa-pause')) {
              $("#mycarousel").carousel('pause');
              $("#carouselButton").children("span").removeClass('fa-pause');
              $("#carouselButton").children("span").addClass('fa-play');
          }
          else if ($("#carouselButton").children("span").hasClass('fa-play')){
              $("#mycarousel").carousel('cycle');
              $("#carouselButton").children("span").removeClass('fa-play');
              $("#carouselButton").children("span").addClass('fa-pause');                    
          }
      });

$("#signinButton").click(function(){

          if($("#signinButton").children("span").hasClass('fa-sign-in')){
              $("#loginModal").modal('show');
          }
      


});


$("#reserveButton").click(function(){



  if($("#reserveButton").children("span").hasClass('button-reserve')){
              $("#reserveTable").modal('show');
          }


});



