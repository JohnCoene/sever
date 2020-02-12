
Shiny.addCustomMessageHandler('sever-it', function(opts) {

  $(document).on('shiny:disconnected', function(event) {
    chgDefault(opts.bg_color, opts.opacity);
    sever(opts.content, opts.color);
  });

});

function chgDefault(bg_color, opacity){

  // set css
  var css,
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

  css = "#shiny-disconnected-overlay{background-color: " + bg_color + "; opacity: " + opacity + "}";

  head.appendChild(style);

  style.type = 'text/css';
  if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
  } else {
  style.appendChild(document.createTextNode(css));
  }
}

function sever(content, color){
  var dv = document.createElement("DIV");
  
  dv.innerHTML = content;

  dv.className = "severed";
  dv.style.zIndex = 99999999;
  dv.style.textAlign = "center";
  dv.style.position = "fixed";
  dv.style.top = "50%";
  dv.style.left = "50%";
  dv.style.transform = "translate(-50%, -50%)";
  dv.style.color = color;

  document.body.appendChild(dv);
}