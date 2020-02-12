// compute offset position of waiter overlay
function get_offset(element) {
  var elementPosition = {};

  //set width and height
  // -6 pixels to keep margin between plot if stacked up/side by side
  elementPosition.width = element.offsetWidth;
  elementPosition.height = element.offsetHeight;

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
function cleave(id, html, color, to_hide){
  // declare
  var dom,
      width,
      height,
      exists = false;

  // get parent
  dom = document.getElementById(id);
  if(dom == undefined){
    console.log("Cannot find", id);
    return ;
  }

  if(dom.offsetHeight < 10)
    return ;
  
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

  // add styles
  overlay.style.height = el.height + 'px';
  overlay.style.width = el.width + 'px';
  overlay.style.top = el.top + 'px';
  overlay.style.left = el.left + 'px';
  overlay.style.backgroundColor = color;
  overlay.style.position = "absolute";
  overlay.style.zIndex = 999;
  overlay.classList.add("cleave-overlay");

  // append overlay content in overlay
  overlay.appendChild(overlay_content);

  // append overlay to dom
  dom.appendChild(overlay);
  
}

$(document).on('shiny:error', function(event) {
  if(waiter_to_hide.includes(event.name)){
    //cleave(event.name);
  }
});