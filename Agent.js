//this is partially AI
function agentAntiVenom() {
  const agentantiVenom = document.getElementById("agent-hero-image");
  const agentantiVenomtxt = document.getElementById("agent-hero-title");
  const agentantiVenomtext = document.getElementById("highlight");
  const title = document.getElementById("agent-title");
  const logo = document.getElementById("agent-logo");
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.className = "dark";
    agentantiVenom.src = "Assets/Agent-Anti-Venom.webp";
    logo.src = "Assets/Agen-anit-Venom.svg";
    agentantiVenomtxt.textContent = "Agent Anti-Venom";
    title.textContent = "Agent Anti-Venom";
    agentantiVenomtext.textContent = "Agent Anti-Venom";
  } else {
    document.body.className = "light";
    agentantiVenom.src = "Assets/Agen_Venom.webp";
    logo.src = "Assets/Agen-Venom.webp";
    agentantiVenomtxt.textContent = "Agent Venom";
    title.textContent = "Agent Venom";
    agentantiVenomtext.textContent = "Agent Venom";
  }
}
agentAntiVenom();

const Menu3 = () => {
  const menubutton = document.getElementById("menu-button3");
  const closemenu = document.getElementById("close-menu3");
  const menu = document.getElementById("nav-links3");
  menubutton.addEventListener("click", () => {
    menu.style.display = "flex";
  });
  closemenu.addEventListener("click", () => {
    menu.style.display = "none";
  });
};
Menu3();
