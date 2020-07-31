// compute offset position of waiter overlay
function get_offset(element) {
  var elementPosition = {};

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if(height < 20)
    height = 20;

  if(width < 20)
    width = 20;

  //set width and height
  // -6 pixels to keep margin between plot if stacked up/side by side
  elementPosition.width = width;
  elementPosition.height = height;

  //calculate element top and left
  var _x = element.offsetLeft;
  var _y = element.offsetTop;
  if(isNaN(_x))
    _x = 0;
  if(isNaN(_y))
    _y = 0;
  
  //set top and left
  //use 3 margin (6/2)
  elementPosition.top = _y;
  elementPosition.left = _x;

  return elementPosition;
}

// elements to hide on recomputed
var waiter_to_hide = [];

// show waiter overlay
function cleave(id, html, color, bg_color, duration, center_vertical, center_horizontal){
  // declare
  var dom,
      width,
      height,
      exists = false
      to_hide = false;

  // get parent
  dom = document.getElementById(id);
  if(dom == undefined){
    console.log("Cannot find", id);
    return ;
  }

  // if(dom.offsetHeight < 10)
  //   return ;
  
  // allow missing for testing
  to_hide = to_hide || false;

  // add to array
  if(to_hide)
    waiter_to_hide.push(id);

  el = get_offset(dom); // get dimensions
  
  // force static if position relative
  // otherwise overlay is completely off
  var pos = window.getComputedStyle(dom, null).position;
  if(pos == 'relative')
    dom.className += ' staticParent';

  // check if overlay exists
  dom.childNodes.forEach(function(el){
    if(el.className === 'cleave-overlay')
      exists = true;
  });

  if(exists === true){
    console.log("cleave on", id, "already exists");
    return;
  }

  // create overlay
  var overlay = document.createElement("DIV");
  // create overlay content
  var overlay_content = document.createElement("DIV");
  // insert html
  overlay_content.innerHTML = html;
  overlay_content.classList.add("cleave-overlay-content");

  // some elements are too small in height
  if(center_vertical && el.height > 50)
    overlay_content.style.paddingTop = (el.height / 2) - 10 + 'px';

  if(center_horizontal)
    overlay_content.style.textAlign = "center";
  

  // add styles
  overlay.style.height = el.height + 'px';
  overlay.style.width = el.width + 'px';
  overlay.style.top = el.top + 'px';
  overlay.style.left = el.left + 'px';
  overlay.style.color = color;
  overlay.style.backgroundColor = bg_color;
  overlay.style.position = "absolute";
  overlay.style.zIndex = 999;
  overlay.style.animation = "expand " + duration + "s ease-in-out";
  overlay.classList.add("cleave-overlay");

  // append overlay content in overlay
  overlay.appendChild(overlay_content);

  // append overlay to dom
  dom.innerHTML = '';
  dom.appendChild(overlay);
  
}

Shiny.addCustomMessageHandler('cleave-it', function(opts) {

  $(document).on('shiny:error', function(event) {

    if(!opts.silent_errors && event.error.type != null)
      return;

    event.preventDefault();

    if(opts.html == null)
      opts.html = '<span>' + event.error.message + '</span>';

    if(opts.bg_color == null)
      opts.bg_color = 'rgba(0,0,0,0)';

    // apply to all 
    if(opts.ids == null){

      cleave(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
    
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {

        if(value == event.name){
          cleave(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
        }
      });
    }
  });

  $(document).on('shiny:value shiny:outputinvalidated', function(event){
    if(opts.ids == null){
      $('.cleave-overlay').remove();
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {
        if(value == event.name){
          let selector = '#' + event.name + '>.cleave-overlay';
          $(selector).remove();
        }
      });
    }
  });

});


// chisel
Shiny.addCustomMessageHandler('chisel-it', function(opts) {

  $(document).on('shiny:error', function(event) {
    console.log(event);

    if(event.error.type == null)
      return;

    event.preventDefault();

    if(opts.html == null)
      opts.html = '<span>' + event.error.message + '</span>';

    if(opts.bg_color == null)
      opts.bg_color = 'rgba(0,0,0,0)';

    // apply to all 
    if(opts.ids == null){

      cleave(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
    
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {

        if(value == event.name){
          cleave(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
        }
      });
    }
  });

  $(document).on('shiny:value shiny:outputinvalidated', function(event){
    if(opts.ids == null){
      $('.cleave-overlay').remove();
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {
        if(value == event.name){
          let selector = '#' + event.name + '>.cleave-overlay';
          $(selector).remove();
        }
      });
    }
  });

});