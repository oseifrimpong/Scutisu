var tpj=jQuery;				
                     tpj.noConflict();				
                     var revapi2;
                     
                     tpj(document).ready(function() {
                     				
                     if(tpj('#rev_slider_2_1').revolution == undefined)
                     	revslider_showDoubleJqueryError('#rev_slider_2_1');
                     else
                        revapi2 = tpj('#rev_slider_2_1').show().revolution(
                     	{
                     		dottedOverlay:"none",
                     		delay:9000,
                     		startwidth:960,
                     		startheight:643,
                     		hideThumbs:200,
                     		
                     		thumbWidth:100,
                     		thumbHeight:50,
                     		thumbAmount:3,
                     		
                     		navigationType:"bullet",
                     		navigationArrows:"none",
                     		navigationStyle:"round",
                     		
                     		touchenabled:"on",
                     		onHoverStop:"on",
                     		
                     		navigationHAlign:"center",
                     		navigationVAlign:"bottom",
                     		navigationHOffset:0,
                     		navigationVOffset:44,
                     
                     		soloArrowLeftHalign:"left",
                     		soloArrowLeftValign:"center",
                     		soloArrowLeftHOffset:20,
                     		soloArrowLeftVOffset:0,
                     
                     		soloArrowRightHalign:"right",
                     		soloArrowRightValign:"center",
                     		soloArrowRightHOffset:20,
                     		soloArrowRightVOffset:0,
                     				
                     		shadow:0,
                     		fullWidth:"on",
                     		fullScreen:"off",
                     
                     		spinner:"spinner0",
                     		
                     		stopLoop:"off",
                     		stopAfterLoops:-1,
                     		stopAtSlide:-1,
                     
                     		
                     		shuffle:"off",
                     		
                     		autoHeight:"off",						
                     		forceFullWidth:"off",						
                     								
                     								
                     		hideThumbsOnMobile:"off",
                     		hideBulletsOnMobile:"off",
                     		hideArrowsOnMobile:"off",
                     		hideThumbsUnderResolution:0,
                     		
                     		hideSliderAtLimit:0,
                     		hideCaptionAtLimit:0,
                     		hideAllCaptionAtLilmit:0,
                     		startWithSlide:0,
                     		videoJsPath:"http://family-church.themerex.net/wp-content/plugins/revslider/rs-plugin/videojs/",
                     		fullScreenOffsetContainer: ""	
                     	});
                     
                     });	//ready