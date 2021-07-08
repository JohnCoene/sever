// compute offset position of waiter overlay
const getOffset = (element) => {
  let elementPosition = {};

  let width = element.offsetWidth;
  let height = element.offsetHeight;

  if(height < 20)
    height = 20;

  if(width < 20)
    width = 20;

  //set width and height
  // -6 pixels to keep margin between plot if stacked up/side by side
  elementPosition.width = width;
  elementPosition.height = height;

  //calculate element top and left
  let _x = element.offsetLeft;
  let _y = element.offsetTop;
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
export const cleave = (
	id, 
	html, 
	color, 
	bg_color, 
	duration, 
	center_vertical, 
	center_horizontal
) => {
  // declare
  let dom;
  let exists = false;
  let to_hide = false;

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

  let el = getOffset(dom); // get dimensions
  
  // force static if position relative
  // otherwise overlay is completely off
  let pos = window.getComputedStyle(dom, null).position;
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
  let overlay = document.createElement("DIV");
  // create overlay content
  let overlay_content = document.createElement("DIV");
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
