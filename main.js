let change = 0;
let hove = false;
let hoverCHange = false;

async function onLoad() {
  document.getElementById("copyright").innerHTML = "&copy "+new Date().getFullYear()+" Skipedia Schweiz";
  document.getElementById("header").style.backgroundSize = "1000%";
  await sleep(1);
  document.getElementById("header").style.transition = "background-size 2s";
  document.getElementById("nav").style.transition = "background-color 0.5s, border-bottom 0.5s";
  document.getElementById("header").style.backgroundSize = "100%";
  document.documentElement.style.visibility = "visible";
    for (let index = 1; index <= 100; index++) {
        await sleep(1);
        document.getElementById("body").style.filter = "blur("+(10-index/10)+"px)";
    }
    document.getElementById("body").style.filter = "blur(0px)";
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function onScroll(){
  if (hover=true) {
    hoverCHange = true;
  }
  hover = false;
  for(let i of document.getElementsByClassName("menus")){
    if (i.matches(":hover")) {
      hover = true;
    }
  }
  if ((change>=216 && document.documentElement.scrollTop<216) || (change<216 && document.documentElement.scrollTop>=216) || hover ||hoverCHange) {

    if (document.documentElement.scrollTop>=216) {
      document.getElementById("nav").style.backgroundColor = "lightgray";
      document.getElementById("nav").style.borderBottomColor = "darkgray";

      for(let i of document.getElementsByClassName("menus")){
        if (i.matches(":hover")) {
          i.style.backgroundColor = "gray";
          i.style.borderBottomColor = "lightblue";
          if (i.id=="submenu") {
            i.style.borderBottomColor = "darkgray";
          }
        } else {
          i.style.backgroundColor = "transparent";
          i.style.borderBottomColor = "darkgray";
        }
      }
    } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
      document.getElementById("nav").style.borderBottomColor = "lightgray";

      for(let i of document.getElementsByClassName("menus")){
        i.style.backgroundColor = "transparent";
        if (i.matches(":hover")) {
          i.style.borderBottomColor = "lightblue";
        } else {
          i.style.borderBottomColor = "lightgray";
        }
        if (i.id=="submenu") {
          i.style.borderBottomColor = "lightgray";
        }
      }
    }
  }
  hoverCHange = false;
  change = document.documentElement.scrollTop;
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
