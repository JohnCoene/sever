const changeDefault = (opts) => {
  // set css
  let css,
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");

  let bgColor = opts.bg_color;

  if (bgColor == undefined || bgColor == null) bgColor = "none";

  css =
    "#shiny-disconnected-overlay{background-color: " +
    bgColor +
    "; opacity: " +
    opts.opacity +
    "; background-size: cover; background-image: url('" +
    opts.bg_image +
    "')}";

  head.appendChild(style);

  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
};

const sever = (opts) => {
  // declare
  var classes = "severed";
  var dv = document.createElement("DIV"),
    parent = document.createElement("DIV");

  // insert content
  dv.innerHTML = opts.content;

  // change classes if is box
  if (opts.box) {
    classes += " panel card";
    dv.className = "panel-body card-body";
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

  document.body.appendChild(parent);
};

const removeSever = () => {
  let severed = document.getElementsByClassName("severed");
  for (let s of severed) {
    s.remove();
  }
};

export const handleSever = (opts) => {
  removeSever();
  changeDefault(opts);
  sever(opts);
};

