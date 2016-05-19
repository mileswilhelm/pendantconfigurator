
	$(window).load(function(){
		if(document.cookie.indexOf("visited") < 0){ // cookie doesnt exist, show tutorial
			var now = new Date();
			now.setTime(now.getTime() + 1000*60*60*24*365);
			var poop = "visited=yes; expires=" + now.toUTCString();
			$('#startModal').modal('show');
			document.cookie = poop;
		}
    });

	$(document).ready(function () {

    $('#submitform').validate({ // initialize the plugin
        ignore: [],
		rules: {
            customerName: {
                required: true,
				minlength: 3
            },
            companyName: {
                required: false
            },
			customerPhone: {
                required: true,
                digits: true,
				minlength: 9,
            },
            customerEmail: {
                required: true,
                email: true
            },
			pendantSlotInfo: {
				required: true
			}
        }
    });

});

$(".tutorialReplay").click(function () {
	$('#startModal').modal('show');
});

$(".wiringDiagram").click(function () {
	$(this).children("img").clone().appendTo($("#diagramEnhancer"));
	$('#diagramZoom').modal('show');
});

$('#diagramZoom').on('hidden.bs.modal', function (e) {
	$("#diagramEnhancer img").remove();
})

$(".mobileProducts").click(function () {
	$('.products.col-md-6').css("display","block");
	$('.products.col-md-6').css("opacity","1");
});

$('.mobileClose').click(function() {
	$('.products.col-md-6').removeAttr('style');
});




			$('div.scroller').droppable( {
				hoverClass: "scrollTest",
				accept: ".dragDropItem",
				over: function(event, ui){
					$("div.col-md-5.products").scrollTo({top:2000, left:700}, 2000);
				},
				out: function(event, ui) {
					$("div.col-md-5.products").stop();
			//    // stop on unhover
				}
			});
			
			$('div.scroller.up').droppable( {
				hoverClass: "scrollTest",
				accept: ".dragDropItem",
				over: function(event, ui){
					$("div.col-md-5.products").scrollTo({top:0, left:700}, 2000);
				},
				out: function(event, ui) {
					$("div.col-md-5.products").stop();
			//    // stop on unhover
				}
			});

		

			var jsonPendantInfo = [
			/*Slot One   */  {"partNumber":"", "btnDesc":""},
			/*Slot Two   */  {"partNumber":"", "btnDesc":""},
			/*Slot Three */  {"partNumber":"", "btnDesc":""},
			/*Slot Four  */  {"partNumber":"", "btnDesc":""},
			/*Slot Five  */  {"partNumber":"", "btnDesc":""},
			/*Slot Six   */  {"partNumber":"", "btnDesc":""},
			/*Slot Seven */  {"partNumber":"", "btnDesc":""},
			/*Slot Eight */  {"partNumber":"", "btnDesc":""},
			/*Slot Nine  */  {"partNumber":"", "btnDesc":""},
			/*Slot Ten   */  {"partNumber":"", "btnDesc":""},
			/*Slot Eleven*/  {"partNumber":"", "btnDesc":""},
			/*Slot Twelve*/  {"partNumber":"", "btnDesc":""},
		
			];

			$("#sendRequest").click(function() {
				$("#pendantSlotInfo").val(
				'[{"part_number":"' + jsonPendantInfo[0].partNumber + '", "button_description":"' + jsonPendantInfo[0].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[1].partNumber + '", "button_description":"' + jsonPendantInfo[1].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[2].partNumber + '", "button_description":"' + jsonPendantInfo[2].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[3].partNumber + '", "button_description":"' + jsonPendantInfo[3].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[4].partNumber + '", "button_description":"' + jsonPendantInfo[4].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[5].partNumber + '", "button_description":"' + jsonPendantInfo[5].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[6].partNumber + '", "button_description":"' + jsonPendantInfo[6].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[7].partNumber + '", "button_description":"' + jsonPendantInfo[7].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[8].partNumber + '", "button_description":"' + jsonPendantInfo[8].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[9].partNumber + '", "button_description":"' + jsonPendantInfo[9].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[10].partNumber + '", "button_description":"' + jsonPendantInfo[10].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[11].partNumber + '", "button_description":"' + jsonPendantInfo[11].btnDesc
				+ '"}]'
				
				);
			
			$("#submitfor").submit(); //make submitform
			
			});
		
			
			
			  
	
		$("#background").css("height", $(window).height()-50);
		
		/*Function for next button shows next slide and hides itself when it reaches final slide and displays previous always*/
		function emptySlots(){
			$empty = false;
			$(".buttonSpace").each(function (index){//check every button space 
				if($(this).css('display') != "none" && !$(this).hasClass("button")){ // if the button is being displayed check if its empty
					$("#emptyAlert").fadeIn(500);
					//alert("button "+(index+1));
					//$(this).addClass("empty");					
					$empty = true;
					//return false;
				}
			});
			return $empty;
		}
		$("#nextBtn").click(function() {			
			$current = $(".rightPanelActive").attr('id');
			$next = $("#" + $current).next().attr('id');
			if($next == "reviewPendantRight" && emptySlots()){// if the next step is the review page
				return false;
			}
			
			$("#" + $current).toggleClass("rightPanelActive rightPanelInactive");
			$("#" + $current).next().toggleClass("rightPanelActive rightPanelInactive");
			//$("#prevBtn").css("opacity", 1);
			//$("#prevBtn").css("left", 0);
			$("#prevBtn").css("display", "block");
			
			

			if($next == 'reviewPendantRight'){
				/////$("#nextBtn").css("opacity", 0);
				//$("#nextBtn").css("left", -5000);
				$("#nextBtn").css("display", "none");
				$(".button > i.deleteButton").addClass("review");
				$('.products.col-md-6').css("display","block");
				$('.products.col-md-6').css("opacity","1");
			} 
			
			$('li.active').removeClass('active');
			$("li[data-slide='" + $next + "']").addClass('active');
			
		});
		
		/**/
		
		
		/*Function for previous button shows previous slide and hides itself when it reaches final slide and displays next always*/
		$("#prevBtn").click(function() {			
			$current = $(".rightPanelActive").attr('id');
			$("#" + $current).toggleClass("rightPanelActive rightPanelInactive");
			$("#" + $current).prev().toggleClass("rightPanelActive rightPanelInactive");
			//$("#nextBtn").css("opacity", 1);
			//$("#nextBtn").css("left", 0);
			$("#nextBtn").css("display", "block");
			$(".button > i.deleteButton").removeClass("review");
			$prev = $("#" + $current).prev().attr('id');
			if($prev == 'choosePendantRight'){
				//$("#prevBtn").css("opacity", 0);
				//$("#prevBtn").css("left", -5000);
				$("#prevBtn").css("display", "none");
			}

			
			
			$('li.active').removeClass('active');
			$("li[data-slide='" + $prev + "']").addClass('active');
		});
		
		$('.steps').click(function(){
			$current = $('.steps.active').data('slide');
			$next = $(this).data('slide');
			if($current == $next){ //if current one is clicked do nothing 
				return false;
			}
			if($next == "reviewPendantRight" && emptySlots()){// if the next step is the review page
				return false;
			}

			$(".posAbs.rightPanelActive").toggleClass("rightPanelActive rightPanelInactive");
			$('li.active').removeClass('active');
			
			$(this).addClass('active');			
			$("#" + $next).toggleClass("rightPanelActive rightPanelInactive");
			
			if($next != 'reviewPendantRight'){ /* make reusable like nth-type and last of type */
				//$("#nextBtn").css("opacity", 1);
				//$("#nextBtn").css("left", 0);
				$("#nextBtn").css("display", "block");
				$(".button > i.deleteButton").removeClass("review");
			}
			if($next != 'choosePendantRight'){
				//$("#prevBtn").css("opacity", 1);
				//$("#prevBtn").css("left", 0);
				$("#prevBtn").css("display", "block");
			}
				
			if($next == 'reviewPendantRight'){
			//check if pendant is full
				//$("#nextBtn").css("opacity", 0);
				//$("#nextBtn").css("left", -5000);
				$("#nextBtn").css("display", "none");
				$('.products.col-md-6').css("display","block");
				$('.products.col-md-6').css("opacity","1");
				$(".button > i.deleteButton").addClass("review");
			}
			if($next == 'choosePendantRight'){
				//$("#prevBtn").css("opacity", 0);
				//$("#prevBtn").css("left", -5000);
				$("#prevBtn").css("display", "none");
			}
		});
				
		
		/* Creates the draggable clone for any button */
		/*  helper:clone allows us to pull a clone, not the actual item
			containment:window prevents the user from pulling the items off screen
			appendTo:body allows the cloned item to be above everything in the html to avoid overflow and other styling
			cursorAt: {top:[50% of the height of .dragDropItem.ui-draggable-dragging],left:[50% of the width of .dragDropItem.ui-draggable-dragging]}
		
		*/
		$(".dragDropItem").draggable({
		
		revert: "invalid", 
		
		refreshPositions: true, 
		
		scroll: "true", opacity: 0.5, 
		
		helper: "clone", 
		
		containment: "window", 
		
		appendTo: "body", 
		
		cursor: "-webkit-grabbing", 
		
		cursorAt: {top:50,left:75},
		
		start: function(event, ui) { 
		
			if ($("#pendantSpan").html() != "Two") {
				$("div.scroller").toggle(); 
			};
			
			if ($(window).width() < 1000) {
				$('.products.col-md-6').css("opacity", "0");
			}
		
		},
		
		stop:  function(event, ui) { 
		
			if ($("#pendantSpan").html() != "Two") {
				$("div.scroller").toggle(); 
			}; 
			
			if ($(window).width() < 1000) {
				$('.products.col-md-6').css("opacity", "1");
			}
		
		}
		
		});
		
		
		/* Toggles the flip on click of the specific boxes [front to back] */
		$(".fa-info-circle").click(function() {
			$(this).parent().parent(".flipper").addClass("flipped");
		});
		
		/* Toggles the flip on click of the specific boxes [back to front] */
		$(".fa-chevron-circle-left").click(function() {
			$(this).parent().parent(".flipper").removeClass("flipped");
		});
		
		/*Toggles the panel body under the panel header of page two and changes the chevron arrow to reflect it's status*/
		
		$('.panelToggler').click(function() {
			$(this).next(".panel-body").slideToggle(350);
			$(this).children("span").toggleClass("panelOpen","");
		});

		
		/*Tooltips*/
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		})
		
		
		
	/*Functions below graciously provided by Dido's Cafe*/	
	

	$('.firstPanelItem').click(function() {
		$words = ["Two", "Four", "Six", "Eight", "Ten", "Twelve"];
		var select_num = $(".firstPanelItem").index(this); 
		$selection = (select_num + 1)*2;
		$(".buttonSpace").css("display","none");
		$(".buttonSpace").removeAttr("id");
		$(".buttonSpace").children(".buttonInput").prop("disabled", true);
		$(".buttonSpace").slice(0, $selection).css("display","-webkit-box");
		$(".buttonSpace").slice(0, $selection).css("display","flex");
		$(".buttonSpace").slice(0, $selection).children(".buttonInput").removeAttr("disabled");
		$(".buttonSpace:eq("+ ($selection-1) +")").attr("id", "lastBS");
		if($("#lastBS").hasClass("switch") && $("#lastBS").children(".deleteButton").is(":visible")){
			$("#lastBS").children(".deleteButton").trigger( "click" );
		}
		$("#pendantSpan").html($words[select_num]);	
		//$("#pendantButtonsInput").text() = $("#choosePendantLeft > p").text();
		$("#pendantButtonsInput").val($("#choosePendantLeft > p").text());
		if ($(window).width() < 1000) {
				$('.products.col-md-6').toggle();
			}
		
		/* Clears data from the object sent to PHP when the pendant size is changed to reflect. i works as selection number because it corresponds to the first number in the array to be emptied */		
		for (i = $selection; i < 12; i++) {		
			jsonPendantInfo[i].partNumber = "";		
			jsonPendantInfo[i].btnDesc = "";		
		};
	});
	
	$(".button").draggable({opacity: 0.7, helper: "clone", scroll: true});
	
	$(".buttonSpace").droppable({
	 accept:function(e){
			if($(this).hasClass("button")){ return false} //if there is a button in it already
			if(e.hasClass("switch") && $(this).attr("id") == "lastBS"){return false;}//if you're dragging a switch to last space
			if(e.hasClass("switch") && $(this).next(".buttonSpace").hasClass("button")){return false;}//if you're trying to put a switch on the slot above an occupied space
			return true;
			},
	 activeClass: "highlightDrop", // gives this class to the droppable object when draggable is being dragged
	 //hoverClass: "hover",
	 over: function(event, ui){
		$(this).removeClass("hover");
		 if($('.ui-draggable-dragging').hasClass("switch")){
			$(this).next(".buttonSpace").removeClass("hover");
		 }
		$(this).addClass("hover");
		 if($('.ui-draggable-dragging').hasClass("switch")){
			$(this).next(".buttonSpace").addClass("hover");
		 }
	 },
	 out: function(event, ui) {
		$(this).removeClass("hover");
		 if($('.ui-draggable-dragging').hasClass("switch")){
			$(this).next(".buttonSpace").removeClass("hover");
		 }	
	 },
	 drop: function(event, ui){
		//remove hover class 		
		 $(this).removeClass("hover");		
		 if($('.ui-draggable-dragging').hasClass("switch")){		
			$(this).next(".buttonSpace").removeClass("hover");		
		 }		
		$data = ui.draggable.data();
		
		if(ui.draggable.hasClass("switch")){ /*if item dragged is a switch*/
			$(this).addClass("button switch");
			$(this).children(".btnLabel").addClass("btnLabel");	
			$(this).next(".buttonSpace").addClass("button switch");	
			$(this).next(".buttonSpace").removeClass("highlightDrop");	
			$(this).next(".buttonSpace").children(".btnLabel").addClass("btnLabel");
			$(this).children(".buttonInput").val(ui.draggable.attr("data-part"));
			$(this).next(".buttonSpace").children(".deleteButton").hide();
			$(this).children(".infoDisplay").show();
			$(this).children(".infoDisplay").addClass("switchInfo");
			$(this).children(".infoDisplay").children(".btnPartNo").html($data.partno);			
			$(this).children(".infoDisplay").children(".btnDesc").html($data.desc);			
			$(this).children(".infoDisplay").children(".btnCover").html($data.cover);
			var index = $(".buttonSpace").index(this);
			jsonPendantInfo[index].partNumber = $data.partno + " | Button 1/2" ;
			jsonPendantInfo[index].btnDesc = $data.desc;
			jsonPendantInfo[index+1].partNumber = $data.partno + " | Button 2/2";
			jsonPendantInfo[index+1].btnDesc = $data.desc;
			
			
			//$(this).next(".buttonSpace").children(".infoDisplay").show();
				if(ui.draggable.hasClass("onOff")) {
					$(this).addClass("on");
					$(this).next(".buttonSpace").addClass("off");
				}
		}else{
			$(this).children(".btnLabel").addClass("btnLabel");
			$(this).children(".infoDisplay").show();
			$(this).children(".infoDisplay").children(".btnPartNo").html($data.partno);
			$(this).children(".infoDisplay").children(".btnDesc").html($data.desc);
			$(this).children(".infoDisplay").children(".btnCover").html($data.cover);
			$(this).addClass("button");		
			$(this).children(".buttonInput").val(ui.draggable.attr("data-part"));
			$(this).children(".deleteButton").attr("style");
			var index = $(".buttonSpace").index(this);
			jsonPendantInfo[index].partNumber = $data.partno;
			jsonPendantInfo[index].btnDesc = $data.desc;
			
				if(ui.draggable.hasClass("pushLock")) {
					$(this).addClass("pushLock");
				};
				
				if(ui.draggable.hasClass("toggleSwitch")) {
					$(this).addClass("toggleSwitch");
				};
				
				if(ui.draggable.hasClass("blindRubber")) {
					$(this).addClass("blindRubber");
				};
				
				if(ui.draggable.hasClass("selectorSwitch")) {
					$(this).addClass("selectorSwitch");
				};  
				
			
		}
	 }
	});
	//removes button / switch
	$(".deleteButton").click(function(){
		if($(this).parent(".buttonSpace").hasClass("switch")){/*if switch*/
			$(this).parent(".buttonSpace").removeClass("button  switch");
			$(this).parent(".buttonSpace").removeClass("on off");
			$(this).parent(".buttonSpace").next(".buttonSpace").removeClass("button  switch");
			$(this).parent(".buttonSpace").next(".buttonSpace").removeClass("on off");
			$(this).next(".buttonInput").attr("value", "");
			$(this).parent(".buttonSpace").next(".buttonSpace").children(".buttonInput").attr("value", "");
			$(this).parent(".buttonSpace").next(".buttonSpace").children(".deleteButton").removeAttr("style");
			/*hide button side info and empty value being displayed*/
			$(this).siblings(".infoDisplay").hide();
			$(this).siblings(".infoDisplay").children(".btnPartNo").html("");	
			$(this).siblings(".infoDisplay").children(".btnDesc").html("");	
			$(this).siblings(".infoDisplay").children(".btnCover").html("");	
			$(this).siblings(".infoDisplay").removeClass("switchInfo");
		}else{/*else it's just one button*/
			$(this).parent(".buttonSpace").removeClass("button selectorSwitch toggleSwitch blindRubber pushLock");
			$(this).next(".buttonInput").attr("value", "");
			/*hide button side info and empty value being displayed*/
			$(this).siblings(".infoDisplay").hide();
			$(this).siblings(".infoDisplay").children(".btnPartNo").html("");
			$(this).siblings(".infoDisplay").children(".btnDesc").html("");	
			$(this).siblings(".infoDisplay").children(".btnCover").html("");
		}
	});
