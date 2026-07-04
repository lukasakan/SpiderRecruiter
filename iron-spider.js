const SteelSpider = () => {
  const SteelSpider = document.getElementById("hero-image");
  const logo = document.getElementById("iron-spider-logo");
  const SteelSpidertxt = document.getElementById("iron-hero-title");
  const SteelSpidertext = document.getElementById("iron-paragraph");
  const header = document.getElementById("iron-header");
  const title = document.getElementById("iron-title");
  const A = document.querySelectorAll("A");
  const saved = localStorage.getItem("theme");
  const menu = document.getElementById("nav-links2");

  //used AI for this line
  A.forEach((link) => {
    link.className = saved === "dark" ? "A darkA" : "A lightA";
  });

  if (saved === "dark") {
    menu.className = "dark_nav-links";
    document.body.className = "dark";
    SteelSpider.src = "Assets/Steel-Spider.png";
    logo.src = "Assets/steel-spider.svg";
    SteelSpidertxt.textContent = "Steel Spider";
    title.textContent = "Steel Spider";
    SteelSpidertext.textContent =
      "Hello I'm Steel Spider I took over Iron spiders page.I dont't think you even care about his message anyways. I'LL BE PART OF WEB WARRIORS.heres my info:The Steel Spider is Boston's trademark superhero. Capabilities:Enhanced Strength, Enhanced Agility, Mechanical Spider Arms, Repulsor Webbing, Repulsor Rays, Flight, Transforming Backpack.";
    header.className = "darkheader";
    SteelSpidertxt.className = "steel-hero-title";
  } else {
    menu.className = "light_nav-links";
    document.body.className = "light";
    SteelSpider.src = "Assets/Iron_Spider_Cho.webp";
    logo.src = "Assets/iron-spider.webp";
    SteelSpidertxt.textContent = "Iron Spider";
    title.textContent = "Iron Spider";
    SteelSpidertext.textContent =
      "Hello, I am Iron Spider! I'm primary member of the Web Warriors team our leader is Spider-Man. I'm barins of the operation me and Agent Venom will be leading this recruitment I answer for your skills and knowledge while Agent Venom handles the tactical aspects.After registration, you'll be able to join our ranks and help us protect the multiverse from threats. So when your done meet us at recruitment camp.";
    SteelSpidertxt.className = "iron-hero-title";
    header.className = "lightheader";
  }
};
SteelSpider();

const Menu2 = () => {
  const menubutton = document.getElementById("menu-button2");
  const closemenu = document.getElementById("close-menu2");
  const menu = document.getElementById("nav-links2");
  if (!menubutton || !closemenu || !menu) return;
  menubutton.addEventListener("click", () => {
    menu.style.display = "flex";
  });
  closemenu.addEventListener("click", () => {
    menu.style.display = "none";
  });
};
Menu2();
