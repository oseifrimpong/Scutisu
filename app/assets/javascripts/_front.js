	       /*global jQuery:false */
	      var error_msg_box = null;
	      var googlemap_refreshed = false;

	      jQuery(window).load(function () {
	          "use strict";
	          if (window.location.hash === '#gallery') {
	              jQuery('#gallery .section_header .section_title a').trigger('click');
	          }

	          var address = jQuery(".sc_googlemap").attr('data-map');
	          if (address != null) googlemap_init(jQuery(".sc_googlemap").get(0), address);
	      });

	      var flag = true;

	      function thumbs_init() {
		      "use strict";
	          jQuery('.format-gallery .post_thumb').addClass('loaded').flexslider({
	              animation: "slide",
	              controlNav: false,
	              directionNav: true,
	              animationSpeed: 1000,
	              easing: "easeInOutBounce",
	              slideshow: false,
	              smoothHeight: true,
	              nextText: "<span class='icon icon-right-open'></span>",
	              prevText: "<span class='icon icon-left-open'></span>"
	          });
	      }

	      function skills_anim() {
		      "use strict";
	          jQuery('.sc_skills').each(function () {
	              var oft = jQuery(this).offset().top;
	              var scrt = jQuery(window).scrollTop();
	              var hgt = jQuery(window).height();
	              if (oft - (scrt + hgt) < 0) {
	                  jQuery(this).find('.sc_skills_progress:not(animated)').each(function () {
	                      var width = jQuery(this).attr('data-width');
	                      if (!jQuery(this).hasClass('animated')) {
	                          jQuery(this).addClass('animated').stop().animate({
	                              'width': width
	                          }, 600);
	                      }
	                  });
	              }

	          });
	      }

	      jQuery(document).ready(function () {
		      "use strict";
	          post_show('vis');
	          Isotope();
	          jQuery('.sc_tooltip_parent').hover(function () {
	                  var obj = jQuery(this);
	                  obj.find('.sc_tooltip').stop().animate({
	                      'marginTop': '5'
	                  }, 100).show();
	              },
	              function () {
	                  var obj = jQuery(this);
	                  obj.find('.sc_tooltip').stop().animate({
	                      'marginTop': '0'
	                  }, 100).hide();
	              });

	          jQuery('#cms-calendar td').find('a').parent().addClass('has_post');
	          jQuery('#cms-calendar td a').hover(function () {
	                  jQuery(this).parent().addClass('hover');
	              },
	              function () {
	                  jQuery(this).parent().removeClass('hover');
	              }
	          );
	          setTimeout('thumbs_init()', 2000);
	          // ----------------------- Shortcodes setup -------------------
	          jQuery('div.sc_infobox.sc_infobox_closeable').click(function () {
	              jQuery(this).fadeOut();
	          });
	          jQuery('#popular_tabs').tabs('ul.tab_content', {
	              tabs: '.tab_title li a',
	          })
	          skills_anim();

	          // Options block
	          jQuery('#opt_block .block_title').toggle(function () {
			          "use strict";
	                  jQuery('#opt_block').animate({
	                      'marginRight': 0
	                  }, 500);
	              },
	              function () {
				      "use strict";
	                  jQuery('#opt_block').animate({
	                      'marginRight': -240
	                  }, 500);
	              });
	          jQuery('#opt_block .block_content .content_row .patterns_list li a').click(function () {
			      "use strict";
	              var main_bg = jQuery(this).attr('data-pat');
	              var cur_bg = jQuery(this).css('backgroundImage');
	              jQuery('body').css({
	                  'backgroundImage': cur_bg,
	                  'backgroundRepeat': 'repeat',
	                  'backgroundPosition': '50% 50%'
	              });
	              setCookie('main_bg', main_bg, 9999, '/');
	              return false;
	          });

	          jQuery('#soc_share').click(function () {
			      "use strict";
	              jQuery(this).toggleClass('opened').parent().find('.project_link').toggle();
	              jQuery(this).find('.icon').toggleClass('icon-share').toggleClass('icon-cancel');
	              jQuery('#ssba').slideToggle();
	              return false;
	          });
	          // toTop link setup
	          "use strict";
	          jQuery(window).scroll(function () {
	              if (jQuery(this).scrollTop() >= 110) {
	                  jQuery('#to_top').show();
	              } else {
	                  jQuery('#to_top').hide();
	              }
	          });
	          jQuery('#to_top').click(function (e) {
	              jQuery('body,html').animate({
	                  scrollTop: 0
	              }, 800);
	              e.preventDefault();
	          });

	          // Video and Audio tag wrapper
	          jQuery('video,audio').mediaelementplayer( /* Options */ );

	          // Pretty photo
	          jQuery("a[href$='jpg'],a[href$='jpeg'],a[href$='png'],a[href$='gif']").attr('rel', 'prettyPhoto');
	          jQuery("a[rel^='prettyPhoto']").click(function (e) {
	              if (jQuery(window).width() < 480) {
	                  e.stopImmediatePropagation();
	                  window.location = jQuery(this).attr('href');
	              }
	              e.preventDefault();
	              return false;
	          });
	          jQuery('.isotope_block .switcher').hover(function () {
			          "use strict";
	                  var timer;
	                  clearTimeout(timer);
	                  jQuery(this).find('ul').stop(true, true).slideDown({
	                      duration: 200,
	                      queue: false
	                  }).fadeIn();
	              },
	              function () {
	                  var th = jQuery(this)
	                  timer = setTimeout(function () {
	                      jQuery(th).find('ul').stop(true, true).fadeOut({
	                          duration: 200,
	                          queue: false
	                      }).slideUp()
	                  }, 500);
	              }
	          );


	          jQuery('#isotope_block_1 .switcher li a').click(function () {
			      "use strict";
	              var column = jQuery(this).attr('href');
	              if (jQuery(this).parents('.isotope_block').hasClass('gallery_section')) {
	                  jQuery.cookie('gallery_columns', column);
	              } else if (jQuery(this).parents('#isotope_block_1').hasClass('events')) {
	                  jQuery.cookie('events_columns_1', column);
	              }
	              location.reload();
	              return false;
	          });


	          jQuery("a[rel^='prettyPhoto']").prettyPhoto({
	              social_tools: '',
	              theme: 'light_rounded'
	          });
	          jQuery('.anim .gallery_posts .follow').each(function () {
	              jQuery(this).hoverdir();
	          });
	          jQuery('.slideshow.flexslider').flexslider({
	              animation: "slide, fade",
	              controlNav: true,
	              directionNav: true,
	              slideshowSpeed: 7000,
	              animationSpeed: 1200,
	              slideshow: true,
	              smoothHeight: true,
	              useCSS: false,
	              nextText: '<span class="icon-right-open-big"></span>',
	              prevText: '<span class="icon-left-open-big"></span>'
	          });
	          jQuery('.features_slideshow_viewport').mCustomScrollbar({
	              horizontalScroll: true,
	              contentTouchScroll: true,
	              advanced: {
	                  updateOnContentResize: true,
	                  updateOnBrowserResize: true
	              }
	          });
	          scroll_show();

	          jQuery('.anim .gallery_posts .hentry.flip').hover(function () {
	                  jQuery(this).addClass('hover');
	              },
	              function () {
	                  jQuery(this).removeClass('hover');
	              }
	          );

	          jQuery('.features_block .features_post').preload();

	          jQuery('.soc_list li a').hover(function () {
	                  var cur_eq = jQuery(this).parent().index();
	                  jQuery(this).parents('.soc_list').find('li').each(function () {
	                      if (jQuery(this).index() != cur_eq) {
	                          jQuery(this).stop().animate({
	                              opacity: .5
	                          });
	                      }
	                  });
	              },
	              function () {
	                  jQuery(this).parents('.soc_list').find('li').stop().animate({
	                      opacity: '1'
	                  });
	              }
	          );

	          jQuery('.sc_contacts_block a').hover(function () {
	                  var cur_eq = jQuery(this).index();
	                  jQuery(this).parent().find('a').each(function () {
	                      if (jQuery(this).index() != cur_eq) {
	                          jQuery(this).stop().animate({
	                              opacity: .5
	                          });
	                      }
	                  });
	              },
	              function () {
	                  jQuery(this).parent().find('a').stop().animate({
	                      opacity: '1'
	                  });
	              }
	          );

	          //jQuery('.anim .gallery_posts .hentry.flip').each(function(){
	          //	var width = jQuery(this).find('img').attr('width');
	          //	var height = jQuery(this).find('img').height();
	          //	jQuery(this).css({'width':width, 'height':height});
	          //});
	          // ----------------------- Comment form submit ----------------
	          jQuery("form#commentform").submit(function (e) {
	              var error = formValidate(jQuery(this), {
	                  error_message_text: 'Global error text', // Global error message text (if don't write in checked field)
	                  error_message_show: true, // Display or not error message
	                  error_message_time: 5000, // Time to display error message
	                  error_message_class: 'sc_infobox sc_infobox_style_error', // Class, appended to error message block
	                  error_fields_class: 'error_fields_class', // Class, appended to error fields
	                  exit_after_first_error: false, // Cancel validation and exit after first error
	                  rules: [{
	                      field: 'author',
	                      min_length: {
	                          value: 1,
	                          message: empt
	                      },
	                      max_length: {
	                          value: 160,
	                          message: to_lng
	                      }
	                  }, {
	                      field: 'email',
	                      min_length: {
	                          value: 7,
	                          message: empt_mail
	                      },
	                      max_length: {
	                          value: 60,
	                          message: to_lng_mail
	                      },
	                      mask: {
	                          value: "^([a-z0-9_\\-]+\\\.)*[a-z0-9_\\\-]+@[a-z0-9_\\-]+(\\\.[a-z0-9_\\-]+)*\\\.[a-z]{2,6}$",
	                          message: incor
	                      }
	                  }, {
	                      field: 'comment',
	                      min_length: {
	                          value: 1,
	                          message: mes_empt
	                      },
	                      max_length: {
	                          value: 9999,
	                          message: to_lng_mes
	                      }
	                  }]
	              });
	              if (error) {
	                  e.preventDefault();
	              }
	              return !error;
	          });

	          jQuery('#mainmenu').mobileMenu();
	          jQuery('#mainmenu').superfish({
	              delay: 1000,
	              animation: {
	                  height: 'show'
	              },
	              speed: 'normal',
	              speedOut: 'slow',
	              autoArrows: false,
	              dropShadows: false
	          });

	          setColorPicker('opt_color');
	          parallax_init();

	          jQuery('.parallax_list').change(function () {
			      "use strict";
	              var parallax_id = jQuery(this).attr('id').replace('parallax', '');
	              var block_id = jQuery('.parallax').eq(parallax_id - 1).attr('id').replace('parallax_', '');
	              var value = jQuery(this).attr('value');

	              setCookie(parallax_id + '_parallax' + block_id, value, 9999999, '/');
	              window.location.reload();
	          });

	          jQuery('#tribe-bar-views .tribe-bar-views-inner').append('<span class="icon-down-open icon"></span>');
	          jQuery('#tribe-bar-form .tribe-bar-views-inner ul').click(function () {
	              if (jQuery(this).parents('#tribe-bar-views').hasClass('tribe-bar-views-open')) {
	                  jQuery(this).next().removeClass('icon-up-open').addClass('icon-down-open');
	              } else {
	                  jQuery(this).next().removeClass('icon-down-open').addClass('icon-up-open');
	              }
	          });
	          /* =========================== /Customize site ===================================== */
	      });


	      function scroll_show() {
	          setTimeout(function () {
	              jQuery('.mCSB_scrollTools').each(function () {
	                  if (jQuery(this).is(":visible")) {
	                      jQuery(this).parents('.features_block').parent().next().show();
	                  } else {
	                      jQuery(this).parents('.features_block').parent().next().hide();
	                  }
	              });
	          }, 160);
	      }

	      function parallax_init() {
		      "use strict";
	          jQuery('.parallax').each(function () {
	              var p_id = jQuery(this).attr('id');
	              jQuery('#' + p_id).parallax("50%", 0.6);
	          });
	      }

	      /* Isotope init */
	      var curIsotopeFilter = '*';
	      var curIsotopePage = '';
	      jQuery(document).ready(function () {
		      "use strict";
	          if (jQuery('.iso_items ').length !== 0) {
	              gallery_iso_init();
	              jQuery('.isotope_block .iso_filters.cats').on('click', 'li a', function () {
	                  var selector = jQuery(this).attr('data-filter');
	                  var block_id = jQuery(this).parents('.isotope_block').attr('id');
	                  curIsotopePage = selector;
	                  //jQuery('#gallery_iso_pages_current').html(selector.substr(selector.lastIndexOf('_')+1));
	                  jQuery('#' + block_id + '  .iso_items.isotope').isotope({
	                      filter: getIsotopeFilter()
	                  });
	                  jQuery(this).parents('.iso_filters.cats').find('a').removeClass('current');
	                  jQuery(this).addClass('current');
	                  return false;
	              });
	          }

	          jQuery(window).resize(function () {
                  "use strict";
	              jQuery('.iso_items.isotope').isotope('reLayout');
	              scroll_show();

	          });
	      });

	      var chart_flag = false;
	      var chart_invise = false;
	      var init_attempts = 0;

	      function gallery_iso_init() {
              "use strict";
	          themerex_count = 0;

	          jQuery('.iso_items .hentry img').each(function () {
	              if (jQuery(this).get(0).complete) {
	                  themerex_count++;
	              }
	          });
	          if (jQuery('.iso_items .hentry img').length === themerex_count || init_attempts >= 10) {
	              jQuery('.iso_items .hentry').show();
	              jQuery('.iso_items')
	                  .isotope({
	                      itemSelector: '.isotope_single_item',
	                      transformsEnabled: true,
	                      duration: 750,
	                      resizable: true,
	                      resizesContainer: true,
	                      layoutMode: 'masonry',
	                      masonry: {
	                          gutterWidth: 10
	                      },
	                      filter: '*'
	                  });
	          } else {
	              init_attempts++;
	              setTimeout(function () {
	                  gallery_iso_init();
	              }, 100);
	          }
	      }

	      function chart_anim(id, doughnutData) {
	          var id = id;
	          var doughnutData = doughnutData;
	          var oft = jQuery('#' + id).offset().top;
	          var scrt = jQuery(window).scrollTop();
	          var hgt = jQuery(window).height();
	          if (chart_flag === false) {
	              if (oft - (scrt + hgt) < 0) {
	                  var options = {
	                      segmentShowStroke: 0,
	                      percentageInnerCutout: 73,
	                      segmentShowStroke: false
	                  };
	                  var myDoughnut = new Chart(document.getElementById('canvas_' + id).getContext("2d")).Doughnut(doughnutData, options);
	                  chart_flag = true;
	              } else {
	                  if (chart_invise === false) {
	                      jQuery(window).scroll(function () {
	                          chart_invise = true;
	                          chart_anim(id, doughnutData);
	                      })
	                  }
	              }
	          }
	      }

	      function getIsotopeFilter() {
		      "use strict";
	          var flt = curIsotopeFilter != '*' ? curIsotopeFilter : '';
	          flt += curIsotopePage != '' ? ((flt != '' ? '' : '') + curIsotopePage) : '';
	          flt == '' ? '*' : '';
	          return flt;
	      }

	      function pagesClear() {
		      "use strict";
	          jQuery('.gallery_posts article').each(function (idx, obj) {
	              var pg = jQuery(obj).attr('data-page');
	              if (pg > 0) {
	                  jQuery(obj).attr('data-page', '').removeClass('page_' + pg);
	              }
	          });
	          jQuery(".gallery_iso_pages").hide();
	          curIsotopePage = '';
	      }

	      function setColorPicker(id) {
		      "use strict";
	          jQuery('#' + id).ColorPicker({
	              color: jQuery('#' + id).val(),
	              onShow: function (colpkr) {
	                  jQuery(colpkr).fadeIn(500);
	                  return false;
	              },
	              onHide: function (colpkr) {
	                  jQuery(colpkr).fadeOut(500);
	                  return false;
	              },
	              onChange: function (hsb, hex, rgb) {
	                  setCookie('main_color_cy', '#' + hex, 9999999, '/');
	                  jQuery.cookie('main_color_cy', '#' + hex, 9999999, '/');
	              },
	              onSubmit: function () {
	                  window.location.reload();
	              }
	          });
	      }
	      jQuery(window).scroll(function () {
	          post_show('shown');
	          skills_anim();
	      });

	      function post_show(vis) {
		      "use strict";
	          var scroll_top = jQuery(window).scrollTop();
	          var w_height = jQuery(window).height();
	          var total = w_height + scroll_top;
	          jQuery('article.post').each(function () {
	              if (!jQuery(this).hasClass('vis')) {
	                  if (jQuery(this).offset().top <= total) {
	                      jQuery(this).addClass(vis);
	                  }
	              }
	          });
	      };


	      function callback_inner(id, res, no_res, load, total, curr_cat) {
              "use strict";
	          var prev_total = jQuery('#' + id + ' .iso_items.isotope .isotope_single_item img').length;
	          themerex_count = 0;
	          jQuery('#' + id + ' .iso_items.isotope').append(res.data);
	          var foo = res.iso_filters;
	          for (var i in foo) {
	              var exists = false;
	              jQuery('#' + id + ' .iso_filters').find('li').each(function () {
	                  var filter = jQuery(this).find('a').text();
	                  if (foo[i] === filter) {
	                      exists = true;
	                  }
	              });
	              if (!exists)
	                  jQuery('#' + id + ' .iso_filters').append('<li><a href=\'#\' data-filter=' + '.' + i + '>' + foo[i] + '</a></li>');
	          }

	          jQuery('#' + id + ' .iso_filters li a').click(function () {
	              var selector = jQuery(this).attr('data-filter');
	              curIsotopeFilter = selector;
	              jQuery('#' + id + ' .iso_items.isotope').isotope({
	                  filter: selector
	              });
	              jQuery(this).parents('.iso_filters').find('a').removeClass('current');
	              jQuery(this).addClass('current');
	              return false;
	          });
	          jQuery('#' + id + ' .iso_items.isotope .isotope_single_item img').load(function () {
	              themerex_count++;
	          });

	          init_isotope(id, prev_total, load, no_res, total, curr_cat);
	          jQuery('#' + id + '.anim  .iso_items.isotope .follow').each(function () {
	              jQuery(this).hoverdir();
	          });
	      }

	      function init_isotope(id, prev_total, load, no_res, total, curr_cat) {
              "use strict";
	          if (prev_total + themerex_count === jQuery('#' + id + ' .iso_items.isotope .isotope_single_item img').length) {
	              jQuery('#' + id + ' .load_posts_request').find('span').text(load).removeClass('loading');
	              if (jQuery('#' + id + ' .iso_items.isotope .isotope_single_item').length === total) {
	                  jQuery('#' + id + ' .load_posts_request').addClass('no_results').find('span').text(no_res);
	              }

	              jQuery('#' + id + ' .iso_items.isotope').isotope('destroy');
	              jQuery('#' + id + ' .iso_items .isotope_single_item').show();
	              jQuery('#' + id + ' .iso_items .isotope_single_item.added').addClass('shown');
	              jQuery('#' + id + ' .iso_items').isotope({
	                  itemSelector: '.isotope_single_item',
	                  transformsEnabled: true,
	                  duration: 750,
	                  resizable: true,
	                  resizesContainer: true,
	                  layoutMode: 'masonry',
	                  masonry: {
	                      gutterWidth: 10
	                  }
	              });
	              jQuery('#' + id + ' .iso_items').isotope({
	                  filter: curr_cat
	              });
	              jQuery("html, body").animate({
	                  scrollTop: jQuery('#' + id).offset().top + jQuery('#' + id).height()
	              }, 1000);
	          } else {
	              setTimeout(function () {
	                  init_isotope(id, prev_total, load, no_res, total, curr_cat)
	              }, 100);
	          }
	      }

	      function countdown_init(block_id, date) {
	          var date_till = new Date();
	          date_till.setTime(Date.parse(date));
	          jQuery('#' + 'comments').addClass('dsfdsfdsf');
	          jQuery('#' + block_id).countdown({
	              until: date_till,
	              format: 'ODHMS',
	              layout: '{y<}<div><span class="divider">:</span><div class="num_wrap"><span class="number">{yn}</span> <span class="label">{yl}</span></div></div>{y>}' +
	                  '{o<}<div><span class="divider">:</span><div class="num_wrap"><span class="number">{on}</span> <span class="label">{ol}</span></div></div>{o>}' +
	                  '{d<}<div><span class="divider">:</span><div class="num_wrap"><span class="number">{dn}</span> <span class="label">{dl}</span></div></div>{d>}' +
	                  '{h<}<div class="hours"><span class="divider">:</span><div class="num_wrap"><span class="number">{hn}</span> <span class="label">{hl}</span></div></div>{h>}' +
	                  '{m<}<div class="minutes"><span class="divider">:</span><div class="num_wrap"><span class="number">{mn}</span> <span class="label">{ml}</span></div></div>{m>}' +
	                  '{s<}<div><div class="num_wrap"><span class="number">{sn}</span> <span class="label">{sl}</span></div></div>{s>}'
	          });
	      }

	      jQuery.fn.preload = function () {
		      "use strict";
	          this.each(function () {
	              var source = jQuery(this).find('.post_thumb').attr('data-url');
	              jQuery('<img/>')[0].src = source;
	          });
	      }
	      var themerex_count = 0;
	      var resInit = false;


	      jQuery(".post_video").click(function () {
		      "use strict";
	          var frame_code = jQuery(this).attr('data-video');
	          jQuery(this).html('<iframe class="video_frame" width="660" height="354" src="' + frame_code + '" frameborder="0" webkitAllowFullScreen="webkitAllowFullScreen" mozallowfullscreen="mozallowfullscreen" allowFullScreen="allowFullScreen"></iframe>');
	      });

	      jQuery(".post_video_lttl").click(function () {
		      "use strict";
	          var frame_code = jQuery(this).attr('data-video');
	          jQuery(this).html('<iframe class="video_frame" width="660" height="203" src="' + frame_code + '" frameborder="0" webkitAllowFullScreen="webkitAllowFullScreen" mozallowfullscreen="mozallowfullscreen" allowFullScreen="allowFullScreen"></iframe>');
	      });

	      jQuery(document).ready(function () {
		      "use strict";
	          jQuery(".sc_contact_form .enter").click(function (e) {
	              userSubmitForm();
	              e.preventDefault();
	              return false;
	          });
	      });

	      function userSubmitForm() {
		      "use strict";
	          var error = formValidate(jQuery(".sc_contact_form form"), {
	              error_message_show: true,
	              error_message_time: 5000,
	              error_message_class: "sc_infobox sc_infobox_style_error",
	              error_fields_class: "error_fields_class",
	              exit_after_first_error: false,
	              rules: [{
	                  field: "username",
	                  min_length: {
	                      value: 1,
	                      message: empt
	                  },
	                  max_length: {
	                      value: 160,
	                      message: to_lng
	                  }
	              }, {
	                  field: "email",
	                  min_length: {
	                      value: 7,
	                      message: empt_mail
	                  },
	                  max_length: {
	                      value: 60,
	                      message: to_lng_mail
	                  },
	                  mask: {
	                      value: "^([a-z0-9_\-]+\\.)*[a-z0-9_\\-]+@[a-z0-9_\-]+(\\.[a-z0-9_\-]+)*\\.[a-z]{2,6}$",
	                      message: incor
	                  }
	              }, {
	                  field: "message",
	                  min_length: {
	                      value: 1,
	                      message: mes_empt
	                  },
	                  max_length: {
	                      value: 200,
	                      message: to_lng_mes
	                  }
	              }]
	          });
	          if (!error) {
	              var user_name = jQuery(".sc_contact_form #sc_contact_form_username").val();
	              var user_email = jQuery(".sc_contact_form #sc_contact_form_email").val();
	              var user_site = jQuery(".sc_contact_form #sc_contact_form_site").val();
	              var user_msg = jQuery(".sc_contact_form #sc_contact_form_message").val();
	              var data = {
	                  action: "submit_contact_form",
	                  nonce: "0834d0f3d1",
	                  user_name: user_name,
	                  user_email: user_email,
	                  user_site: user_site,
	                  user_msg: user_msg
	              };
	              jQuery.post("includes/sendmail.php", data, userSubmitFormResponse, "text");
	          }
	      }

	      function userSubmitFormResponse(response) {
		      "use strict";
	          var rez = JSON.parse(response);
	          jQuery(".sc_contact_form .result")
	              .toggleClass("sc_infobox_style_error", false)
	              .toggleClass("sc_infobox_style_success", false);
	          if (rez.error == "") {
	              jQuery(".sc_contact_form .result").addClass("sc_infobox_style_success").html("Your message sent!");
	              setTimeout("jQuery('.sc_contact_form .result').fadeOut(); jQuery('.sc_contact_form form').get(0).reset();", 3000);
	          } else {
	              jQuery(".sc_contact_form .result").addClass("sc_infobox_style_error").html("Transmit failed! " + rez.error);
	          }
	          jQuery(".sc_contact_form .result").fadeIn();
	      }

	      jQuery(document).ready(function () {
		      "use strict";
	          jQuery.reject({
	              reject: {
	                  all: false, // Nothing blocked
	                  msie5: true,
	                  msie6: true,
	                  msie7: true // Covers MSIE 5-7
	                      /*
	                       * Possibilities are endless...
	                       *
	                       * // MSIE Flags (Global, 5-8)
	                       * msie, msie5, msie6, msie7, msie8,
	                       * // Firefox Flags (Global, 1-3)
	                       * firefox, firefox1, firefox2, firefox3,
	                       * // Konqueror Flags (Global, 1-3)
	                       * konqueror, konqueror1, konqueror2, konqueror3,
	                       * // Chrome Flags (Global, 1-4)
	                       * chrome, chrome1, chrome2, chrome3, chrome4,
	                       * // Safari Flags (Global, 1-4)
	                       * safari, safari2, safari3, safari4,
	                       * // Opera Flags (Global, 7-10)
	                       * opera, opera7, opera8, opera9, opera10,
	                       * // Rendering Engines (Gecko, Webkit, Trident, KHTML, Presto)
	                       * gecko, webkit, trident, khtml, presto,
	                       * // Operating Systems (Win, Mac, Linux, Solaris, iPhone)
	                       * win, mac, linux, solaris, iphone,
	                       * unknown // Unknown covers everything else
	                       */
	              },
	              imagePath: 'http://family-church.themerex.net/wp-content/themes/church/js/jreject/images/',
	              header: 'Your browser is out of date', // Header Text
	              paragraph1: 'You are currently using an unsupported browser', // Paragraph 1
	              paragraph2: 'Please install one of the many optional browsers below to proceed',
	              closeMessage: 'Close this window at your own demise!' // Message below close window link
	          });
	      });
	      empt = 'Name field can not be empty';
	      to_lng = 'Too long name field';
	      to_lng = 'Too long name field';
	      empt_mail = 'Too short (or empty) email address';
	      to_lng_mail = 'Too long email address';
	      incor = 'Incorrect email address';
	      mes_empt = 'message can not be empty';
	      to_lng_mes = 'Too long message';
	      THEMEREX_NAVIGATE_TO = 'Menu';

	      jQuery(document).ready(function () {
	          //setColorPicker('bg_col');
	      });

	      jQuery('#isotope_block_1 .load_posts_request').click(function (e) {
		      "use strict";
	          if (!jQuery(this).hasClass('no_results')) {
	              var curr_cat = jQuery('#isotope_block_1 .iso_filters').find('a.current').data('filter');

	              jQuery(this).find('span').text('Loading').addClass('loading');
	              var count = jQuery('#isotope_block_1 .iso_items.isotope .isotope_single_item').length;
	              var data = {
	                  action: 'events_items_request',
	                  nonce: '525ea5706d',
	                  query_args: 'a:7:{s:9:"post_type";s:12:"tribe_events";s:7:"orderby";s:4:"date";s:5:"order";s:3:"ASC";s:11:"post_status";s:7:"publish";s:13:"post_password";s:0:"";s:14:"posts_per_page";s:1:"6";s:12:"eventDisplay";s:6:"custom";}',
	                  offset: count,
	                  posts_count: '6',
	                  width: 360,

	              };
	              jQuery.post('includes/sendmail.php', data, posts_request_callback_qcuunhyjzpcq, 'text');
	              e.preventDefault();
	              return false;
	          } else {
	              return false;
	          }
	      });

	      function posts_request_callback_qcuunhyjzpcq(response) {
		      "use strict";
	          var res = JSON.parse(response);
	          if (res.error !== '') {
	              alert('ajax error');
	          } else {
	              var curr_cat = jQuery('#isotope_block_1 .iso_filters').find('a.current').data('filter');
	              setTimeout(function () {
	                  callback_inner('isotope_block_1', res, 'No more results', 'Load More', 8, curr_cat)
	              }, 10);
	          }
	      };

	      jQuery(document).ready(function () {
              "use strict";
	          var x = jQuery.cookie('events_columns_1');
	          if (x == '2' || x == '3' || x == '4') {
	              jQuery('#isotope_block_1').removeClass('col2 col3 col4');
	              jQuery('#isotope_block_1').addClass('col' + x);

	              jQuery('#isotope_block_1 .switcher ul').find('li > .active').removeClass('active');
	              jQuery('#isotope_block_1 .switcher ul').find('li > a[href="' + x + '"]').addClass('active');

	              var selector = jQuery('.iso_filters.cats li .current').attr('data-filter');
	              curIsotopePage = selector;
	              jQuery('#isotope_block_1  .iso_items.isotope').isotope({
	                  filter: getIsotopeFilter()
	              });
	          }

	          var timer = jQuery(".countdown").attr("data-time");
	          var number = 100 + Math.floor(Math.random() * 600);
	          jQuery(".countdown").attr('id', number);
	          if (timer == null) {
	              var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	              var date = new Date();
	              var month = monthNames[date.getMonth()];
	              var year = date.getFullYear() + 1;
	              countdown_init(number, "11 " + month + " " + year + " 15:00");
	          } else countdown_init(number, timer);

	          jQuery(window).load(function () {
	              jQuery('#parallax_1').animate({
	                  opacity: "1"
	              }, 500);
	          });
	      });

	      jQuery(window).resize(function () {
	          Isotope();
	      });

	      function Columns(isowidth, x) {
		      "use strict";
	          var itemwidth = ((isowidth) / x) - 31;
	          jQuery('.isotope_single_item').css({
	              width: itemwidth,
	              'margin': '15px'
	          });
	      }

	      function Isotope() {
		      "use strict";
	          var w = jQuery(window).width();
	          jQuery('.isotope_single_item').css({
	              'margin': 'auto'
	          });

	          if (w > 1200 || w > 1024 && w <= 1200) {
	              jQuery('.container, .isotope_block').width(1140);
	              var itemwidth = 1140;
	              var isowidth = itemwidth;
	              if (w > 1024 && w <= 1200) {
	                  jQuery('.container').width(w - 40);
	                  isowidth = w - 80;
	                  jQuery('.isotope_block').width(isowidth);
	              }
	              if (jQuery('.isotope_block').hasClass('col4')) {
	                  Columns(isowidth, 4);
	              }
	              if (jQuery('.isotope_block').hasClass('col3')) {
	                  Columns(isowidth, 3);
	              }
	              if (jQuery('.isotope_block').hasClass('col2')) {
	                  Columns(isowidth, 2);
	              }
	              jQuery('.events_title').width('inherit');
	          } else if (w > 768 && w <= 1024) {
	              jQuery('.container').width(w - 40);
	              var isowidth = w - 80;
	              jQuery('.isotope_block').width(isowidth);

	              if (jQuery('.isotope_block').hasClass('col2')) {
	                  Columns(isowidth, 2);
	              } else {
	                  Columns(isowidth, 3);
	              }
	              jQuery('.events_title').width('inherit');

	          } else if (w <= 768 && w > 600) {
	              jQuery('.container').width(w - 40);
	              var isowidth = w - 80;
	              jQuery('.isotope_block').width(isowidth);
	              jQuery('.events_title').width('inherit');
	              Columns(isowidth, 2);
	              Columns(isowidth, 2);

	          } else if (w <= 600 && w > 480) {
	              jQuery('.container').width(w - 40);
	              var isowidth = w;
	              var isowidth = w - 80;
	              jQuery('.isotope_block').width(360);
	              jQuery('.events_title').width('inherit');
	              jQuery('.isotope_single_item').width(360);

	          } else if (w <= 480) {
	              jQuery('.container').width(w - 40);
	              var isowidth = w;
	              var isowidth = w - 80;
	              jQuery('.isotope_block').width(isowidth);
	              jQuery('.events_title').width('inherit');
	              jQuery('.isotope_single_item').width(isowidth);
	          }
	          jQuery('.isotope_block  .iso_items.isotope').isotope({
	              filter: getIsotopeFilter()
	          });

	          if (w > 1024) {
	              jQuery('.shortcodes').width(1140);
	              jQuery('.shortcodes .container ').width(750);
	          } else if (w > 768 && w <= 1024) {
	              jQuery('.shortcodes, .shortcodes .container ').width(730);
	          } else if (w <= 768) {
	              jQuery('.shortcodes, .shortcodes .container ').width(w - 40);
	          }

	          if (w > 420) {
	              jQuery('.features_block .features_post').width(360);
	          } else if (w <= 420 && w > 320) {
	              var x = w - 80;
	              if (x >= 360) x = 360;
	              else jQuery('.features_block .features_post').width(x);
	          } else if (w <= 320) {
	              var x = w - 60;
	              if (x >= 320) x = 320;
	              else jQuery('.features_block .features_post').width(x);
	          }
	      }