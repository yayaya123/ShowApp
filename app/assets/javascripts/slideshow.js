
  $(document).ready(function(){
    $("#slideshow").cycle({
      fx: "scrollDown", 
      //easing: "easeOutÒBounce",
      random: 1,
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