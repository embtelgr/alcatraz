import React, { useState, useEffect } from "react";

import SingleTourHeader from "../components/tour2/SingleTourHeader";
import SingleTourSidebar from "../components/tour2/SingleTourSidebar";
import SingleTourInfo from "../components/tour2/SingleTourInfo";
import SingleTourFullInfo from "../components/tour2/SingleTourFullInfo";
import $ from 'jquery';
import flexslider  from "flexslider";
import { useLocation } from 'react-router-dom';

require('flexslider');
function BusTour2(props) {
  document.body.classList.add('single-tour');
  let location = useLocation();
    console.log(location);
  useEffect(() => {
  //   const script = document.createElement("script");
  // script.src = require('../js/jquery/ui/effect.min.js');
  // script.async = true;
  // script.onload = () => this.scriptLoaded();

  // document.body.appendChild(script);
  
    // $('.gdlr-core-flexslider').flexslider();
    var gdlr_core_js = $(this).find('.gdlr-core-js-2');
    $.fn.gdlr_core_flexslider = function( filter_elem ){

      if( typeof(filter_elem) == 'undefined' ){
        var elem = $(this).find('.gdlr-core-flexslider');
      }else{
        var elem = filter_elem.filter('.gdlr-core-flexslider');
      }	
    
      elem.each(function(){
  
        var flex_attr = {
          useCSS: false,
          animation: 'fade',
          animationLoop: true,
          prevText: '<i class="arrow_carrot-left"></i>',
          nextText: '<i class="arrow_carrot-right"></i>'
        };
  
        if( $(this).attr('data-start-at') && $(this).attr('data-start-at') > 1 ){
          flex_attr.startAt = $(this).attr('data-start-at') - 1;
        }
  
        if( $(this).find('.gdlr-core-flexslider').length > 0 ){ 
          $(this).children('ul.slides').addClass('parent-slides');
          flex_attr.selector = '.parent-slides > li';
        }
  
        // variable settings
        if( $(this).attr('data-disable-autoslide') ){
          flex_attr.slideshow = false;
        }
        if( $(this).attr('data-pausetime') ){
          flex_attr.slideshowSpeed = parseInt($(this).attr('data-pausetime'));
        }
        if( $(this).attr('data-slidespeed') ){
          flex_attr.animationSpeed = parseInt($(this).attr('data-slidespeed'));
        }else{
          flex_attr.animationSpeed = 500;
        }
  
        // for carousel
        if( $(this).attr('data-type') == 'carousel' ){
          flex_attr.move = $(this).attr('data-move')? parseInt($(this).attr('data-move')): 1;
          flex_attr.animation = 'slide';
  
          // determine the spaces
          var column_num = parseInt($(this).attr('data-column'));
          flex_attr.itemMargin = 2 * parseInt($(this).children('ul.slides').children('li:first-child').css('margin-right'));
          flex_attr.itemWidth = (($(this).width() + flex_attr.itemMargin) / column_num) - (flex_attr.itemMargin);
  
          flex_attr.minItems = column_num;
          flex_attr.maxItems = column_num;
          
          var t = $(this);
          $(window).on('resize gdlr-core-element-resize', function(){
            if( t.data('goodlayers_flexslider') ){
              var newWidth = ((t.width() + flex_attr.itemMargin) / column_num) - (flex_attr.itemMargin);
              t.data('goodlayers_flexslider').editItemWidth(newWidth);
            }
          });
  
        }else if( $(this).attr('data-effect') ){
          if( $(this).attr('data-effect') == 'kenburn' ){
            flex_attr.animation = 'fade';
          }else{
            flex_attr.animation = $(this).attr('data-effect');
          }
        }
  
        // for navigation
        if( !$(this).attr('data-nav') || $(this).attr('data-nav') == 'both' || $(this).attr('data-nav') == 'navigation' || $(this).attr('data-nav') == 'navigation-outer' ){
          if( $(this).attr('data-nav-parent') ){
  
            if( $(this).attr('data-nav-type') == 'custom' ){
              flex_attr.customDirectionNav = $(this).closest('.' + $(this).attr('data-nav-parent')).find('.flex-prev, .flex-next');
            }else{
              $(this).closest('.' + $(this).attr('data-nav-parent')).each(function(){
                var flex_nav = $('<ul class="flex-direction-nav">' + 
                        '<li class="flex-nav-prev"><a class="flex-prev" href="#"><i class="arrow_carrot-left"></i></a></li>' +
                        '<li class="flex-nav-next"><a class="flex-next" href="#"><i class="arrow_carrot-right"></i></a></li>' +
                      '</ul>');
  
                var flex_nav_position = $(this).find('.gdlr-core-flexslider-nav');
                if( flex_nav_position.length ){
                  flex_nav_position.append(flex_nav);
                  flex_attr.customDirectionNav = flex_nav.find('.flex-prev, .flex-next');
                }
              });
            }
          }
        }else if( $(this).attr('data-nav') != 'navigation-bottom' ){
          flex_attr.directionNav = false;
        }
        if( $(this).attr('data-nav') == 'both' || $(this).attr('data-nav') == 'bullet' ){
          flex_attr.controlNav = true;
        }else{
          flex_attr.controlNav = false;
        }
  
        // for thumbnail 
        if( $(this).attr('data-thumbnail') ){
          var thumbnail_slide = $(this).siblings('.gdlr-core-sly-slider');
  
          flex_attr.manualControls = thumbnail_slide.find('ul.slides li')
          flex_attr.controlNav = true;
        }
  
        // center the navigation
        // add active class for kenburn effects
        if( $(this).attr('data-vcenter-nav') ){
          flex_attr.start = function(slider){
            if( slider.directionNav ){
              $(window).on('resize gdlr-core-element-resize', function(){
                slider.directionNav.each(function(){
                  var margin = -(slider.height() + $(this).outerHeight()) / 2;
                  $(this).css('margin-top', margin);
                });
              });
            }
            if( typeof(slider.slides) != 'undefined' ){
              $(window).trigger('gdlr-core-element-resize');
              slider.slides.filter('.flex-active-slide').addClass('gdlr-core-active').siblings().removeClass('gdlr-core-active');
            }
          };
        }else{
          flex_attr.start = function(slider){
            if( typeof(slider.slides) != 'undefined' ){
              $(window).trigger('gdlr-core-element-resize');
              slider.slides.filter('.flex-active-slide').addClass('gdlr-core-active').siblings().removeClass('gdlr-core-active');
            }
          }
        }
  
        // add the action for class
        flex_attr.after = function(slider){
          slider.slides.filter('.flex-active-slide').addClass('gdlr-core-active').siblings().removeClass('gdlr-core-active');
        }
  
        // add outer frame class
        if( $(this).find('.gdlr-core-outer-frame-element').length > 0 ){
          $(this).addClass('gdlr-core-with-outer-frame-element');
        }
  
        $(this).goodlayers_flexslider(flex_attr);
      });
  
      return $(this);
  
    } // gdlr-core-flexslier
    $('body').gdlr_core_flexslider(gdlr_core_js);
    // $('body').each(function(){
    //   $(this).gdlr_core_flexslider( gdlr_core_js );
    // });

    var content_nav = $('#tourmaster-content-navigation-item-outer');
    var slidebar = content_nav.find('.tourmaster-content-navigation-slider');
    var content_nav_container = content_nav.parent();
    var offset = parseInt($('html').css('margin-top'));

    content_nav.on('tourmaster-change', function(){
      var active_slidebar = $(this).find('.tourmaster-active');
      if( !active_slidebar.hasClass('tourmaster-slidebar-active') ){
        active_slidebar.addClass('tourmaster-slidebar-active');
        slidebar.animate({width: active_slidebar.outerWidth(), left: active_slidebar.position().left}, { queue: false, duration: 200 });
      }
    });

    $(window).on('resize', function(){ content_nav.trigger('tourmaster-change'); });
			content_nav.each(function(){
				$(this).find('.tourmaster-content-navigation-tab').hover(function(){
					slidebar.animate({ width: $(this).outerWidth(), left: $(this).position().left }, { queue: false, duration: 150 });
				}, function(){
					var active_slidebar = $(this).parent().children('.tourmaster-slidebar-active');
					if( active_slidebar.length ){
						slidebar.animate({ width: active_slidebar.outerWidth(), left: active_slidebar.position().left }, { queue: false, duration: 150 });
					}
				});
      });
      

    var tourmaster_display = 'desktop';
    if( typeof(window.matchMedia) == 'function' ){
      $(window).on('resize tourmaster-set-display', function(){
        if( window.matchMedia('(max-width: 419px)').matches ){
          tourmaster_display = 'mobile-portrait';
        }else if( window.matchMedia('(max-width: 767px)').matches ){
          tourmaster_display = 'mobile-landscape'
        }else if( window.matchMedia('(max-width: 999px)').matches ){
          tourmaster_display = 'tablet'
        }else{
          tourmaster_display = 'desktop';
        }
      });
      $(window).trigger('tourmaster-set-display');
    }else{
      $(window).on('resize tourmaster-set-display', function(){
        if( $(window).innerWidth() <= 419 ){
          tourmaster_display = 'mobile-portrait';
        }else if( $(window).innerWidth() <= 767 ){
          tourmaster_display = 'mobile-landscape'
        }else if( $(window).innerWidth() <= 999 ){
          tourmaster_display = 'tablet'
        }else{
          tourmaster_display = 'desktop';
        }
      });
      $(window).trigger('tourmaster-set-display');
    }	

    var traveltour_display = 'desktop';
    if( typeof(window.matchMedia) == 'function' ){
      $(window).on('resize traveltour-set-display', function(){
        if( window.matchMedia('(max-width: 419px)').matches ){
          traveltour_display = 'mobile-portrait';
        }else if( window.matchMedia('(max-width: 767px)').matches ){
          traveltour_display = 'mobile-landscape'
        }else if( window.matchMedia('(max-width: 959px)').matches ){
          traveltour_display = 'tablet'
        }else{
          traveltour_display = 'desktop';
        }
      });
      $(window).trigger('traveltour-set-display');
    }else{
      $(window).on('resize traveltour-set-display', function(){
        if( $(window).innerWidth() <= 419 ){
          traveltour_display = 'mobile-portrait';
        }else if( $(window).innerWidth() <= 767 ){
          traveltour_display = 'mobile-landscape'
        }else if( $(window).innerWidth() <= 959 ){
          traveltour_display = 'tablet'
        }else{
          traveltour_display = 'desktop';
        }
      });
      $(window).trigger('traveltour-set-display');
    }

    var traveltour_anchor = function(){

      this.anchor_link = $('a[href^="#"]').not('[href="#"]').filter(function(){
  
        // for mm-menu plugin
        if( $(this).is('.traveltour-mm-menu-button, .mm-next, .mm-prev, .mm-title, .gdlr-core-ilightbox') ){
          return false;
        }
  
        // for additional plugins
        if( $(this).is('.fbx-btn-transition') ){
          return false;
        }
  
        // for woocommerce
        if( !$(this).hasClass('traveltour-footer-back-to-top-button') ){
          if( $(this).parent('.description_tab, .reviews_tab').length || $(this).closest('.woocommerce').length ){
            return false;
          }
        }
        
  
        return true;
      });
  
      if( this.anchor_link.length ){
        this.menu_anchor = $('#traveltour-main-menu, #traveltour-bullet-anchor, #tourmaster-content-navigation-item-outer');
        this.home_anchor = this.menu_anchor.find('ul.sf-menu > li.current-menu-item > a, ul.sf-menu > li.current-menu-ancestor > a, .traveltour-bullet-anchor-link.current-menu-item, .tourmaster-content-navigation-tab.tourmaster-active');
        
        this.init();
      }
    }
    traveltour_anchor.prototype = {
  
      init: function(){
  
        var t = this;
  
        // t.animate_anchor();
        t.scroll_section();
  
        // init bullet anchor height
        t.menu_anchor.filter('#traveltour-bullet-anchor').each(function(){
          $(this).css('margin-top', - t.menu_anchor.height() / 2).addClass('traveltour-init');
        });
  
        // initialize if the page hash exists
        // wait for all element to initialize ( eg. flexslider )
        var url_hash = window.location.hash;
        if( url_hash ){
          setTimeout(function(){
  
            var current_menu = t.menu_anchor.find('a[href*="' + url_hash + '"]');
            if( !current_menu.is('.current-menu-item, .current-menu-ancestor') ){
              current_menu.addClass('current-menu-item').siblings().removeClass('current-menu-item current-menu-ancestor');
  
              $(window).trigger('traveltour-navigation-slider-bar-init');
            }
  
            t.scroll_to(url_hash, false, 300);
          }, 500);
        }
    
      },
  
      // animate_anchor: function(){
  
      //   var t = this;
  
      //   // home anchor
      //   t.home_anchor.click(function(){
  
      //     if( window.location.href == this.href ){
      //       $('html, body').animate({ scrollTop: 0 }, { duration: 1500, easing: 'easeOutQuart' });
      //       return false;
      //     }
          
      //   });
  
      //   // normal anchor
      //   t.anchor_link.click(function() {
      //     if( location.hostname == this.hostname && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') ){
      //       return t.scroll_to(this.hash, true);
      //     }
      //   });
  
      // }, 
  
      scroll_to: function( hash, redirect, duration ){
  
        // start scrolling
        if( hash == '#traveltour-top-anchor' ){
          var scroll_position = 0;
        }else{
          
          var target = $(hash);
  
          if( target.length ){
            var scroll_position = target.offset().top;
          }
        }
  
        if( typeof(scroll_position) != 'undefined' ){
  
          // offset for wordpress admin bar
          scroll_position = scroll_position - parseInt($('html').css('margin-top'));
  
          // offset for fixed nav bar
          if( typeof(window.traveltour_anchor_offset) != 'undefined' ){
            scroll_position = scroll_position - parseInt(window.traveltour_anchor_offset);
          }
  
          if( scroll_position < 0 ) scroll_position = 0;
  
          // $('html, body').animate({ scrollTop: scroll_position }, { duration: 1500, easing: 'easeOutQuart', queue: false });
          $('html, body').animate({ scrollTop: scroll_position }, { duration: 1500, queue: false });
  
          return false;
  
        }else if( redirect ){
  
          if( hash != '#tourmaster-single-review' ){
            // window.location.href = traveltour_script_core.home_url + hash;
          }
  
          return false;
        }
  
      }, // scroll to
  
      scroll_section: function(){
  
        var t = this;
  
        // have anchor in anchor menu
        var menu_link_anchor = this.menu_anchor.find('a[href*="#"]').not('[href="#"]');
        if( !menu_link_anchor.length ){ return; }
  
        // get anchor section
        var home_anchor_section = $('#traveltour-page-wrapper');
        var anchor_section = home_anchor_section.find('[id]');
        
        if( !anchor_section.length ){ return; }
  
        // add data for faster query
        menu_link_anchor.each(function(){
          if( $(this.hash).length ){
            $(this).attr('data-anchor', this.hash);
          }
        });
  
        // check section on scroll event
        $(window).on('scroll', function(){
  
          if( traveltour_display == 'mobile-landscape' || traveltour_display == 'mobile-portrait' ) return;
          
          if( t.home_anchor.length && $(window).scrollTop() < home_anchor_section.offset().top ){
  
            t.home_anchor.each(function(){
              if( $(this).hasClass('tourmaster-content-navigation-tab') ){
                $(this).addClass('tourmaster-active').siblings().removeClass('tourmaster-active tourmaster-slidebar-active');
              }else if( $(this).hasClass('traveltour-bullet-anchor-link') ){
                $(this).addClass('current-menu-item').siblings().removeClass('current-menu-item');
                $(this).parent('.traveltour-bullet-anchor').attr('data-anchor-section', 'traveltour-home');
              }else if( !$(this).parent('.current-menu-item, .current-menu-ancestor').length ){
                $(this).parent().addClass('current-menu-item').siblings().removeClass('current-menu-item current-menu-ancestor');
                $(window).trigger('traveltour-navigation-slider-bar-init');
              }			
            });
  
          }else{
            var section_position = $(window).scrollTop() + ($(window).height() * 0.3);
  
            anchor_section.each(function(){
              if( $(this).css('display') == 'none' || $(this).closest('.tourmaster-tour-booking-bar-wrap').length || $(this).is('#tourmaster-page-wrapper') ) return;
  
              var top_offset_pos = $(this).offset().top;
  
              if( (section_position > top_offset_pos) && (section_position <  top_offset_pos + $(this).outerHeight()) ){
                var section_id = $(this).attr('id');
                
                menu_link_anchor.filter('[data-anchor="#' +  section_id + '"]').each(function(){
                  if( $(this).hasClass('tourmaster-content-navigation-tab') ){
                    $(this).addClass('tourmaster-active').siblings().removeClass('tourmaster-active tourmaster-slidebar-active');
                    $(this).closest('#tourmaster-content-navigation-item-outer').trigger('tourmaster-change');
                  }else if( $(this).hasClass('traveltour-bullet-anchor-link') ){
                    $(this).addClass('current-menu-item').siblings().removeClass('current-menu-item');
                    $(this).parent('.traveltour-bullet-anchor').attr('data-anchor-section', section_id);
                  }else if( $(this).parent('li.menu-item').length && !$(this).parent('li.menu-item').is('.current-menu-item, .current-menu-ancestor') ){
                    $(this).parent('li.menu-item').addClass('current-menu-item').siblings().removeClass('current-menu-item current-menu-ancestor');
                    $(window).trigger('traveltour-navigation-slider-bar-init');
                  }
                });
                
                return false;
              }
  
            });
          }
  
        });
  
      } // scroll section
  
    };

   

      
    $(window).on('scroll', function(){
      if( tourmaster_display == 'mobile-landscape' || tourmaster_display == 'mobile-portrait' || tourmaster_display == 'tablet' ) return;

      if( $(this).scrollTop() + offset > content_nav_container.offset().top ){
        if( !content_nav.hasClass('tourmaster-fixed') ){
          content_nav.parent().css('height', content_nav.parent().height());
          content_nav.addClass('tourmaster-fixed');

          window.traveltour_anchor_offset	= content_nav.height();
        }
      }else{
        if( content_nav.hasClass('tourmaster-fixed') ){
          content_nav.parent().css('height', 'auto');
          content_nav.removeClass('tourmaster-fixed');
        }

      }

			
    });

    // Update the document title using the browser API
    $.fn.tourmaster_tour_booking_sticky = function(){

      // animate sidebar
      $(this).each(function(){
        var page_wrap = $(this).closest('.tourmaster-page-wrapper');
        var template_wrap = page_wrap.children('.tourmaster-template-wrapper');
        var booking_bar_wrap = $(this);
        var booking_bar_anchor = $(this).siblings('.tourmaster-tour-booking-bar-anchor');
        var top_offset = parseInt($('html').css('margin-top'));
        var left_offset = parseInt(booking_bar_anchor.css('margin-left'));
        var right_offset = parseInt(booking_bar_anchor.css('margin-right'));
  
        // hide header price and replace with header price in the booking bar
        if( page_wrap.hasClass('tourmaster-tour-style-1') ){ 
          $(this).addClass('tourmaster-start-script');
          page_wrap.siblings('.tourmaster-single-header').addClass('tourmaster-start-script');
          
          var header_price = $(this).children('.tourmaster-tour-booking-bar-outer').children('.tourmaster-header-price');
          booking_bar_wrap.css('margin-top', -header_price.outerHeight());
          booking_bar_anchor.css('margin-top', -header_price.outerHeight());
          page_wrap.css('min-height', booking_bar_wrap.height() - header_price.outerHeight());
          $(window).on('resize', function(){
            booking_bar_wrap.css('margin-top', -header_price.outerHeight());
            booking_bar_anchor.css('margin-top', -header_price.outerHeight());
            page_wrap.css('min-height', booking_bar_wrap.height() - header_price.outerHeight())
  
            if( $("body").hasClass("rtl") ){
              booking_bar_wrap.css({ 
                'position': '', 
                'top': '', 
                'right': '',
                'margin-top': booking_bar_anchor.css('margin-top')
              });
            }else {
              booking_bar_wrap.css({ 
                'position': '', 
                'top': '', 
                'left': '',
                'margin-top': booking_bar_anchor.css('margin-top')
              });
            }
            booking_bar_wrap.removeClass('tourmaster-fixed tourmaster-top tourmaster-bottom tourmaster-lock');
          }); 
        }
        
        

        // scroll action
        var top_padding = 0;
        var prev_scroll = 0;
        $(window).on('scroll resize', function(){
  
          var animate_on_scroll = true;
          if( tourmaster_display == 'mobile-landscape' || tourmaster_display == 'mobile-portrait' || tourmaster_display == 'tablet' ){
            animate_on_scroll = false;
          }
  
          var scroll_direction = (prev_scroll > $(window).scrollTop())? 'up': 'down';
          prev_scroll = $(window).scrollTop();
  
          // fixed nav bar
          if( animate_on_scroll && $(window).scrollTop() + top_offset + top_padding > booking_bar_anchor.offset().top ){
  
            // bar smaller than screensize
            if( $(window).height() > booking_bar_wrap.outerHeight() + top_padding ){
              
              if( $(window).scrollTop() + booking_bar_wrap.outerHeight() + top_offset + (top_padding * 2) > page_wrap.offset().top + page_wrap.outerHeight() ){
                  
                  if( !booking_bar_wrap.hasClass('tourmaster-fixed-lock') ){
                    if( $("body").hasClass("rtl") ){
                      booking_bar_wrap.css({
                        'position': 'absolute',
                        'top': template_wrap.outerHeight() - booking_bar_wrap.outerHeight() - top_padding,
                        'right': 'auto',
                        'margin-top': 0
                      });
                    }else{
                      booking_bar_wrap.css({
                        'position': 'absolute',
                        'top': template_wrap.outerHeight() - booking_bar_wrap.outerHeight() - top_padding,
                        'left': 'auto',
                        'margin-top': 0
                      });
                    }
  
                    booking_bar_wrap.removeClass('tourmaster-fixed');
                    booking_bar_wrap.addClass('tourmaster-fixed-lock');
                  }
                
              }else if( !booking_bar_wrap.hasClass('tourmaster-fixed') ){
                if( $("body").hasClass("rtl") ){
                  booking_bar_wrap.css({ 
                    'position': 'fixed', 
                    'top': top_padding + top_offset, 
                    'right': $(window).width() - (booking_bar_anchor.offset().left + booking_bar_anchor.outerWidth() ) - right_offset, 
                    'margin-top': 0 
                  });		
                }else {
                  booking_bar_wrap.css({ 
                    'position': 'fixed', 
                    'top': top_padding + top_offset, 
                    'left': booking_bar_anchor.offset().left - left_offset, 
                    'margin-top': 0 
                  });
                }
  
                booking_bar_wrap.removeClass('tourmaster-fixed-lock');
                booking_bar_wrap.addClass('tourmaster-fixed');
              }else{
                if( booking_bar_wrap.hasClass('tourmaster-fixed') ){
                  if( $("body").hasClass("rtl") ){
                    booking_bar_wrap.css({ 
                      'right': $(window).width() - (booking_bar_anchor.offset().left + booking_bar_anchor.outerWidth() ) - right_offset, 
                    });		
                  }else {
                    booking_bar_wrap.css({ 
                      'left': booking_bar_anchor.offset().left - left_offset, 
                    });
                  }
                }	
              }
  
            // bar larger than screensize
            }else{
  
              // scroll down
              if( scroll_direction == 'down' ){
                
                if( booking_bar_wrap.hasClass('tourmaster-top') ){
                  if( $("body").hasClass("rtl") ){
                    booking_bar_wrap.css({
                      'position': 'absolute',
                      'top': $(window).scrollTop() + top_padding + top_offset - booking_bar_wrap.parent().offset().top,
                      'right': 'auto',
                      'margin-top': 0
                    });	
                  }else {
                    booking_bar_wrap.css({
                      'position': 'absolute',
                      'top': $(window).scrollTop() + top_padding + top_offset - booking_bar_wrap.parent().offset().top,
                      'left': 'auto',
                      'margin-top': 0
                    });
                  }
  
                  booking_bar_wrap.removeClass('tourmaster-top');
                  booking_bar_wrap.addClass('tourmaster-lock');
                
                }else if( $(window).scrollTop() + $(window).height() > page_wrap.offset().top + page_wrap.outerHeight() ){
  
                  if( !booking_bar_wrap.hasClass('tourmaster-lock') ){
                    if( $("body").hasClass("rtl") ){ 
                      booking_bar_wrap.css({
                        'position': 'absolute',
                        'top': template_wrap.outerHeight() - booking_bar_wrap.outerHeight(),
                        'right': 'auto',
                        'margin-top': 0
                      });
                    }else {
                      booking_bar_wrap.css({
                        'position': 'absolute',
                        'top': template_wrap.outerHeight() - booking_bar_wrap.outerHeight(),
                        'left': 'auto',
                        'margin-top': 0
                      });
                    }
  
                    booking_bar_wrap.removeClass('tourmaster-bottom');
                    booking_bar_wrap.addClass('tourmaster-lock');
                  }
                
                }else if( $(window).scrollTop() + $(window).height() > booking_bar_wrap.offset().top + booking_bar_wrap.outerHeight() ){	
                  if( !booking_bar_wrap.hasClass('tourmaster-bottom') ){
                    if( $("body").hasClass("rtl") ){
                      booking_bar_wrap.css({ 
                        'position': 'fixed', 
                        'top': $(window).height() - booking_bar_wrap.outerHeight(),
                        'right': $(window).width() - (booking_bar_anchor.offset().left + booking_bar_anchor.outerWidth() ) - right_offset, 
                        'margin-top': 0 
                      });
                    }else {
                      booking_bar_wrap.css({ 
                        'position': 'fixed', 
                        'top': $(window).height() - booking_bar_wrap.outerHeight(),
                        'left': booking_bar_anchor.offset().left - left_offset, 
                        'margin-top': 0 
                      });
                    }
  
                    booking_bar_wrap.removeClass('tourmaster-top tourmaster-lock');
                    booking_bar_wrap.addClass('tourmaster-bottom');
                  }
                }else{
                  if( booking_bar_wrap.hasClass('tourmaster-bottom') ){
                    if( $("body").hasClass("rtl") ){
                      booking_bar_wrap.css({ 
                        'right': $(window).width() - (booking_bar_anchor.offset().left + booking_bar_anchor.outerWidth() ) - right_offset, 
                      });
                    }else{
                      booking_bar_wrap.css({ 
                        'left': booking_bar_anchor.offset().left - left_offset
                      });
                    }
                  }
                }
  
              // scroll up
              }else{
                if( booking_bar_wrap.hasClass('tourmaster-bottom') ){
                  if( $("body").hasClass("rtl") ){
                    booking_bar_wrap.css({
                      'position': 'absolute',
                      'top': $(window).scrollTop() + $(window).height() - booking_bar_wrap.outerHeight() - booking_bar_wrap.parent().offset().top,
                      'right': 'auto',
                      'margin-top': 0
                    });
                  }else {
                    booking_bar_wrap.css({
                      'position': 'absolute',
                      'top': $(window).scrollTop() + $(window).height() - booking_bar_wrap.outerHeight() - booking_bar_wrap.parent().offset().top,
                      'left': 'auto',
                      'margin-top': 0
                    });
                  }
  
                  booking_bar_wrap.removeClass('tourmaster-bottom');
                  booking_bar_wrap.addClass('tourmaster-lock');
                }else if( booking_bar_wrap.hasClass('tourmaster-lock') && $(window).scrollTop() + top_offset + top_padding < booking_bar_wrap.offset().top ){
                  if( $("body").hasClass("rtl") ){ 
                    booking_bar_wrap.css({ 
                      'position': 'fixed', 
                      'top': top_padding + top_offset,
                      'right': $(window).width() - (booking_bar_anchor.offset().left + booking_bar_anchor.outerWidth() ) - right_offset, 
                      'margin-top': 0 
                    });
                  }else {
                    booking_bar_wrap.css({ 
                      'position': 'fixed', 
                      'top': top_padding + top_offset,
                      'left': booking_bar_anchor.offset().left - left_offset, 
                      'margin-top': 0 
                    });
                  }
  
                  booking_bar_wrap.removeClass('tourmaster-bottom tourmaster-lock');
                  booking_bar_wrap.addClass('tourmaster-top');
                }
              }
            }
  
          // retun nav bar to original position
          }else{
  
            if( booking_bar_wrap.hasClass('tourmaster-fixed') || booking_bar_wrap.hasClass('tourmaster-top') ||
              booking_bar_wrap.hasClass('tourmaster-bottom') ||booking_bar_wrap.hasClass('tourmaster-lock') ){
  
              if( $("body").hasClass("rtl") ){
                booking_bar_wrap.css({ 
                  'position': '', 
                  'top': '', 
                  'right': '',
                  'margin-top': booking_bar_anchor.css('margin-top')
                });
              }else {
                booking_bar_wrap.css({ 
                  'position': '', 
                  'top': '', 
                  'left': '',
                  'margin-top': booking_bar_anchor.css('margin-top')
                });
              }
              booking_bar_wrap.removeClass('tourmaster-fixed tourmaster-top tourmaster-bottom tourmaster-lock');
            }
          }
  
        });
      });
  
    } // tourmaster_tour_booking_sticky
    $('#tourmaster-tour-booking-bar-wrap').tourmaster_tour_booking_sticky();
    new traveltour_anchor();
  });
  return (

    <>
      <div class="single-tour">
        <div class="tourmaster-page-wrapper tourmaster-tour-style-1 tourmaster-with-sidebar" id="tourmaster-page-wrapper">
          <SingleTourHeader />
          <div class="tourmaster-template-wrapper">
            <SingleTourSidebar />
            {/* <SingleTourInfo /> */}
            <SingleTourFullInfo />
          </div>
        </div>
      </div>
      {/* <HeroSection2
        bg="primary"
        textColor="white"
        size="lg"
        bgImage="https://source.unsplash.com/FyD3OWBuXnY/1600x800"
        bgImageOpacity={0.2}
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <TeamBiosSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      /> */}
    </>
  );
}

export default BusTour2;
