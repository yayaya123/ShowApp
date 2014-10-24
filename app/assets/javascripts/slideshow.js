
  $(document).ready(function(){
    $("#slideshow").cycle({
      fx: "scrollDown", 
      //easing: "easeOutÒBounce",
      //random: 1,
      delay: -200,
      timeout: 1000,
      speed:200
      
    });
  }); 

  $(document).ready(function(){
    $("#test").cycle({
      fx: "fade",
      //easing: "easeOutÒBounce", //utilise le plugin easing.js
      speed: 1200
      
    });
  }); 

  $(document).ready(function(){
  $("button").click(function(){
    $("#slideshow").animate({
      left:'250px',
      opacity:'0.8',
      //height:'150px',
      //width:'150px'
    });
  });
});

    $(document).ready(function(){
  $("#slideshow").mouseenter(function(){
    $("#slideshow").animate({
      left:'50px',
      opacity:'1',
      //height:'150px',
      //width:'150px'
    });
  });
});