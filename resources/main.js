const header = document.getElementById("header")
  , toggles = document.querySelectorAll(".toggle")
  , nav = document.querySelector("#nav")
  , anchors = document.querySelectorAll("#homepage #nav ul a")
  , sections = document.querySelectorAll("section[id]")
  , headerHeight = 72;

function clickHandler(e) {
    e.preventDefault(),
    anchors.forEach((e=>e.classList.remove("active"))),
    this.classList.add("active");
    const t = this.getAttribute("href")
      , r = document.querySelector(t).offsetTop - 72;
    window.scrollTo({
        top: r,
        behavior: "smooth"
    })
}

anchors.forEach((e=>e.addEventListener("click", clickHandler)));
const navHighlighter = ()=>{
    let e = window.pageYOffset;
    sections.forEach((t=>{
        const r = t.offsetHeight
          , o = t.offsetTop - 72 - 2
          , n = t.getAttribute("id");
        e > o && e <= o + r ? document.querySelector(".primary-nav a[href*=" + n + "]").classList.add("active") : document.querySelector(".primary-nav a[href*=" + n + "]").classList.remove("active")
    }
    ))
}
  , topButton = document.getElementById("top");
topButton.addEventListener("click", (()=>{
    document.body.scrollTop = 0,
    document.documentElement.scrollTop = 0
}
)),
window.onscroll = ()=>{
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? header.classList.add("fixed") : header.classList.remove("fixed"),
    document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? $("#top").fadeIn(500) : $("#top").fadeOut(500)
}
;
