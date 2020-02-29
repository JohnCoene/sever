
Shiny.addCustomMessageHandler('sever-it', function(opts) {

  $(document).on('shiny:disconnected', function(event) {
    remove_sever();
    chg_default(opts.bg_color, opts.opacity, opts.bg_image);
    sever(opts.content, opts.color, opts.box);
  });

});

function chg_default(bg_color, opacity, bg_image){

  // set css
  var css,
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

  if(bg_color == undefined)
    bg_color = "none";

  css = "#shiny-disconnected-overlay{background-color: " + bg_color + "; opacity: " + opacity + "; background-size: cover; background-image: url('" + bg_image + "')}";

  head.appendChild(style);

  style.type = 'text/css';
  if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
  } else {
  style.appendChild(document.createTextNode(css));
  }
}

function sever(content, color, box){
  // declare
  var classes = "severed";
  var dv = document.createElement("DIV"),
      parent = document.createElement("DIV");
  
  // insert content
  dv.innerHTML = content;

  // change classes if is box
  if(box){
    classes += " panel";
    dv.className = "panel-body";
  }

  parent.className = classes;
  parent.style.zIndex = 99999999;
  parent.style.textAlign = "center";
  parent.style.position = "fixed";
  parent.style.top = "50%";
  parent.style.left = "50%";
  parent.style.transform = "translate(-50%, -50%)";
  parent.style.color = color;

  parent.appendChild(dv);

  document.body.appendChild(parent);
}

function remove_sever(){
  let severed = document.getElementsByClassName("severed");
  for (let s of severed) {
    s.remove();
  }
}