
// $(element).on('click',function(){
//    //action on click
// }).on('mouseup',function(){
//    //action on mouseup (just before click event)
// });

$("#hide").on("click", function(){
	console.log("WE ARE TRYNA HIDE!");

});

$("#buttonmiddle").on("click", function(){
	var marginLeft = $("#buttonright").css('margin-left');
	console.log(marginLeft);
	var numLeft = parseInt(marginLeft.substr(0, marginLeft.length-2));
	if(numLeft >= 200) {
		$("#buttonright").animate({'margin-left': '-=50px'});	
		//$("#buttonleft").animate({'margin-right': '-=50px'});

	} else {
		$("#buttonright").animate({'margin-left': '+=50px'});
		//$("#buttonleft").animate({'margin-right': '+=50px'});

	}
});


/*$('*').on('click', function(event) {
	console.log(event);
});*/

$("#buttonleft").on("click", function(){
	$("#buttonleft").offset({top: 420});
	$("#buttonleft").offset({left: 320});
})

$(".alert").on("click", function(){
	alert("Im at a loss of things to make now!");
});

$(".scew").on("click", function(){
	$(".scew").animate({'scewY': '15deg'});
});

$(".delete").on("click", function(){
	$(".delete").hide();
});

$(".dblclick").dblclick(function(){
	$(".dblclick").hide();
});


	$( ".default_morph" ).on("click", function() {
		var length = Math.floor(10+ Math.random() * 500);
		var width = Math.floor(10+ Math.random() * 500);
		 $( ".default_morph" ).width( width ).addClass( "morph" );
		 $( ".default_morph" ).height( length ).addClass( "morph" );
		var colorR = Math.floor((Math.random() * 256));
     	var colorG = Math.floor((Math.random() * 256));
     	var colorB = Math.floor((Math.random() * 256));
		$(".morph").css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
	});

	$("#offsetrandom").on("click", function(){
		var top = Math.floor(10+ Math.random() * 1000);
		var left = Math.floor(10+ Math.random() * 1000);
		console.log("hello world");
		$("#offsetrandom").offset({top: top});
		$("#offsetrandom").offset({left: left});
		 if ($("#offsetrandom").text() == "Try and Find Me!") { 
        $("#offsetrandom").text("oo! you found me! Try Again!"); 
    	} else { 
        $("#offsetrandom").text("Try and Find Me!"); 
    	};
		console.log("hello world");
	});

		$("#offsetrandomcolor").on("click", function(){
		var top = Math.floor(10+ Math.random() * 1000);
		var left = Math.floor(10+ Math.random() * 1000);
		console.log("hello world");
		$("#offsetrandomcolor").offset({top: top});
		$("#offsetrandomcolor").offset({left: left});

    	$( "#offsetrandomcolor" ).offset({top: top}).addClass( "morph" );
		$( "#offsetrandomcolor" ).offset({left: left}).addClass( "morph" );
		var colorR = Math.floor((Math.random() * 256));
     	var colorG = Math.floor((Math.random() * 256));
     	var colorB = Math.floor((Math.random() * 256));
		$(".morph").css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
		console.log("hello world");
	});


		var myAudio = document.getElementById("myAudio");
		var isPlaying = false;
	

		function togglePlay() {
		  if (isPlaying) {
		    myAudio.pause()
		    $("#danceMusic").hide();
		    $("#danceMusic2").hide();
		    $("#danceMusic3").hide();

		  } else {
		    myAudio.play();
		    $("#danceMusic").show();
		    $("#danceMusic2").show();
		    $("#danceMusic3").show();
		    
		  }
		};
		myAudio.onplaying = function() {
		  isPlaying = true;
		};
		myAudio.onpause = function() {
		  isPlaying = false;
		};
	$(".gah3").on("click", function(){
	$(".gah3").addClass('gah3scew');
});

	$(".gah4").on("click", function(){
	$(".gah4").addClass('gah4scew');
});

	$("#gah5").on("click", function(){
	$("#gah5").addClass('gah5scew');
});
	$("#gah6").on("click", function(){
	$("#gah6").addClass('gah6scew');
});
	$("#gah7").on("click", function(){
	$("#gah7").addClass('gah7scew');
});

	$("#gah8").on("click", function(){
	$("#gah8").addClass('gah8scew');
});
	$("#gah9").on("click", function(){
	$("#gah9").addClass('gah9scew');
});
	$(".gah10").on("click", function(){
	$(".gah10").addClass('gah10scew');
});

	$(".blownup").on("click", function(){
	$("body").addClass('boom');
});
	$(".menu").on("click", function(){
		$(".menu").addClass("menuopen");

});
	
		$(document).ready(function(){
    		$(".lineheight").click(function(){
      			$(".lineheight").animate({lineHeight: "-=1px"});
   		});
    	
		});

	$( ".shadow" ).click(function() {
			$(this).toggleClass("onclick");
	    });

	$(".border").on("click", function(){
	$(".border").addClass('bordergrow');
});

	$(".border2").on("click", function(){
	$(".border2").addClass('bordergrow2');
});

	$(".strobe").on("click", function(){
	$(".strobe").addClass('strobestart');
});


	$("#color").on("click", function(){
	$("#color").addClass('colorchange');
});

/*
$("#buttonleft").on("click", function(){
	console.log("WE ARE TRYING TO ROTATE")

	var transformUp = $ ("#buttonleft").css('transform-origin');

	var transformRight = parseInt(transformUp.substr(0, transformUp.length-1));

	if (transformRight >= 40, 0) {
		$("#buttonleft").animate({'transform-origin': '0%, 40%'});
	} else {
		$("#buttonleft").animate({'transform-origin': '40%, 0%'});
	}


});



$( document.body ).click(function() {
  $( "p:hidden:first" ).fadeIn( "slow" );
});

$(function() {
  			$("#random_color").click(function() {
	    		$("p").each(function(index) {
	      			var colorR = Math.floor((Math.random() * 256));
	      			var colorG = Math.floor((Math.random() * 256));
	      			var colorB = Math.floor((Math.random() * 256));
	      			$(this).css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    			});
  			});
		});


*/

$(function(){
	var ink, d, x, y;
	$(".ripplelink").click(function(e){
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }
         
    ink = $(this).find(".ink");
    ink.removeClass("animate");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});
});



$(".buttonleft").click(function(){
	$(this).toggleClass(".buttonrightanimate");
});

$("#addnewbutton").on("click", function(){
	$("#newbutton").css("visibility", "visible" );
});


$( "#newbutton2" ).toggle(
  function() {
    $( "#newbutton2").css( "visibility", "visible" );
  }, function() {
    $( "#newbutton2" ).css( "visibility", "hidden" );
  }
);

$( document ).on( "click", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
});

if ($("#log").text() == "pageX: 494, pageY:2412") { 
        $("#box1").css("width", "400px"); 
    	}


$( "#box2" ).click(function() {
	$( this ).animate({ marginLeft: "0.4in"}, 1500 );
});
$( "#box3" ).click(function() {
	$( this ).animate({ height: "40%"}, 20 );
});



$(document).ready(function(){
	$("#box4").click(function(){
			$(".My_Emotions").animate({wordSpacing: "+=15px"});
	
});
});

$(document).ready(function(){
	$("#box5").click(function(){
			$(".My_Emotions2").css({"text-align": "right"});
	
});
});

$(document).ready(function(){
	$("#box6").click(function(){
			$(".My_Emotions3").css({"text-decoration": "overline"});
	
});
});

$(document).ready(function(){
	$("#box7").click(function(){
			$(".My_Emotions4").css({"text-transform": "uppercase"});
	
});
});
$(document).ready(function(){
	$("#box8").click(function(){
			$(".My_Emotions5").css({"text-indent": "50px"});
	
});
});
$(document).ready(function(){
	$("#box9").click(function(){
			$(".My_Emotions6").css({"direction": "rtl"});
	
});
});
$(document).ready(function(){
	$("#box10").click(function(){
			$(".My_Emotions7").css({"white-space": "nowrap"});
	
});
});

$(document).ready(function(){
	$("#box11").click(function(){
			$("#box11").css({"background-image": "linear-gradient(blue,green)"});
	
});
});

$(document).ready(function(){
	$(".My_Emotions8").click(function(){
			$(".My_Emotions8").css({"transform": "rotateX(150deg)"});
	
});
});

$( "#waho1" ).click(function() {
  $( "#block1" )
    .animate({
      width: "90%"
    }, {
      queue: false,
      duration: 3000
    })
    .animate({ fontSize: "24px" }, 1500 )
    .animate({ borderRightWidth: "15px" }, 1500 );
});
 
$( "#waho2" ).click(function() {
  $( "#block2" )
    .animate({ width: "90%" }, 1000 )
    .animate({ fontSize: "24px" }, 1000 )
    .animate({ borderLeftWidth: "15px" }, 1000 );
});
 
$( "#waho3" ).click(function() {
  $( "#waho1" ).add( "#waho2" ).click();
});
 
$( "#waho4" ).click(function() {
  $( "div" ).css({
    width: "",
    fontSize: "",
    borderWidth: ""
  });
});



	$ (document).ready(function(){
		$(".scroll2").on('click', function(){
			$("HTML, BODY").animate({
				scrollTop:0
			},500);	
		});
		
	});

$( "#myVideo" ).click(function() {
  $( "#myVideo" ).get(0).play();
});

$( ".text" ).click(function() {
$('.text').fonteo({ direction: 'left' })

});


$( ".box" ).click(function() {
$('.box').transition({x:210}, 500, "linear");
});

$( ".box2" ).click(function() {
$('.box2').transition({x:210}, 500, "linear");
$('.box2').transition({ rotate: '45deg' });

});

$( ".box3" ).click(function() {
$('.box3').transition({
  perspective: '100px',
  rotate3d: '1,1,0,180deg'
});

});


$( ".box4" ).click(function() {

$('.box4').transition({
  perspective: '100px',
  rotateX: '180deg'
});

});


$( ".box5" ).click(function() {

$('.box5').transition({
  perspective: '100px',
  rotateY: '180deg'
});

});

$( ".box6" ).click(function() {

$('.box6')
  .transition({ x: -40 })
  .transition({ y: 40 })
  .transition({ x: 0 })
  .transition({ y: 0 });

});



$( ".box6" ).click(function() {

$('.box6')
  .transition({ x: -40 })
  .transition({ y: 40 })
  .transition({ x: 0 })
  .transition({ y: 0 });

});


$( ".box7" ).click(function() {
$('.box7').css({ transform: 'scale(0.2)' });

});

$( ".box8" ).click(function() {
$('.box8').transition({ scale: 0, delay: 500 });


});



$( ".text2" ).click(function() {
$('.text2')
  .transition({ x: 40 })
  .transition({ y: 0 })
  .transition({ x: 40 })
  .transition({ y: 0 });

});

$( ".text3" ).click(function() {
$('.text3')
  .transition({ x: 40 })
  .transition({ y: 0 })
  .transition({ x: 40 })
  .transition({ y: 0 });
  $('.text3').css({ transform: 'scale(0.0)' });

});

$( ".fancy_title" ).click(function() {
$('.fancy_title').textillate({ in: { effect: 'rollIn' } });

});



$( ".tilt" ).click(function() {
$('.tilt').textillate({ 
  out: { effect: 'foldUnfold', sync: true },
  loop: true
});
});

$( ".tilt2" ).click(function() {
$('.tilt2').textillate({ 
  in: { effect: 'fadeInLeftBig', sync: true },
  loop: true
});
});
$( ".tilt3" ).click(function() {
$('.tilt3').textillate({ 
  in: { effect: 'bounceIn', },
  in: { effect: 'rollOut', },
  loop: false
});
});
$( ".tilt4" ).click(function() {
$('.tilt4').textillate({ 
  in: { effect: 'rotateInDownRight', },
  loop: false
});
});
$( ".tilt5" ).click(function() {
$('.tilt5').textillate({ 
  in: { effect: 'flipoutX', },
  loop: false
});
});
			
$( ".box9" ).click(function() {
$('.box9').addClass('animated wobble');

});	

$( ".box10" ).click(function() {
$('.box10').addClass('animated rubberBand');

});	

$( ".box111" ).click(function() {
  $( ".box11" )
  	.show("slow")
    .animate({ "left": "+=200" }, 2000 )
    .queue(function() {
      $( this ).addClass( "newcolor" ).dequeue();
    })
    .animate({ "left": "-=200" }, 500 )
    .queue(function() {
      $( this ).removeClass( "newcolor" ).dequeue();
    })
    .slideUp();
});

$( ".box12" ).click(function() {
$('.box12').addClass( "animated bounceOutRight");

});

$( ".box13" ).click(function() {
$('.box13').addClass( "animated rotateOutDownRight");
});

$( ".box14" ).click(function() {
$('.box14').addClass( "animated rollOut");
});

$( ".box15click" ).click(function() {

$('.box15').show("slow").addClass( "animated zoomIn");
});

$( ".box16" ).click(function() {

$('.box16').addClass( "animated jello");
});

$( ".box17" ).click(function() {

$('.box17').addClass( "animated headShake");
});

$( ".box18" ).click(function() {

$("HTML, BODY").addClass( "animated headShake");
});

$( ".box19" ).click(function() {

$("HTML, BODY").addClass( "animated zoomOut");
});

$( ".box21" ).click(function() {

$("HTML, BODY").addClass( "animated swing");
});

$( ".box20" ).click(function() {

$("HTML, BODY").addClass( "animated rubberBand");
});




/*.animate({'margin-top': '-=50px'}, {queue: false})*/
/*height: "40%"
borderWidth: "10px"*/