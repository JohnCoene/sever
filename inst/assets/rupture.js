function watchActivity(opts) {
  console.log(opts);
  var t = setTimeout(logout, opts.ms);
  window.onmousemove = resetTimer; // catches mouse movements
  window.onmousedown = resetTimer; // catches mouse movements
  window.onclick = resetTimer;     // catches mouse clicks
  window.onscroll = resetTimer;    // catches scrolling
  window.onkeypress = resetTimer;  //catches keyboard actions

  function logout() {
    rupture(opts);
  }

  function resetTimer() {
    clearTimeout(t);
    t = setTimeout(logout, opts.ms);  // time is in milliseconds (1000 is 1 second)
  }
}

Shiny.addCustomMessageHandler('rupture-it', function(opts) {

  watchActivity(opts);

});

function rupture(opts){
  // declare
  var classes = "severed",
    dv = document.createElement("DIV"),
    bg = document.createElement("DIV"),
    parent = document.createElement("DIV");
  
  // insert content
  dv.innerHTML = opts.content;

  // bg
  bg.id = "ruptured";
  bg.style.position = 'absolute';
  bg.style.top = '0px';
  bg.style.width = window.innerWidth + 'px';
  bg.style.height = window.innerHeight + 'px';
  bg.style.backgroundColor = opts.bg_color;
  bg.style.opacity = opts.opacity;
  bg.style.zIndex = 99999998;
  if(opts.bg_image)
    bg.style.backgroundImage = url(opts.bg_image);

  // change classes if is box
  if(opts.box){
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
  parent.style.color = opts.color;

  parent.appendChild(dv);

  document.body.appendChild(bg);
  document.body.appendChild(parent);
}

window.unrupt = function(){
  remove_rupture();
  if(!Shiny.shinyapp.isConnected())
    Shiny.shinyapp.reconnect();
}

function remove_rupture(){
  let ruptured = document.getElementById('ruptured');
  ruptured.remove();
  let severed = document.getElementsByClassName('severed');
  for (let s of severed) {
    s.remove();
  }
}