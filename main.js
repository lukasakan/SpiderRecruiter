const url =
  "https://raw.githubusercontent.com/lukasakan/SpidersJSON/refs/heads/main/spiders.json";
async function arrows() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const hero = document.getElementById("webwarrior-image");
    const podiumTitle = document.getElementById("podium-title");
    const leftArrow = document.getElementById("Left_arrow");
    const rightArrow = document.getElementById("Right_arrow");
    const imageCaption = document.getElementById("image-caption");
    const imageTitle = document.getElementById("image-title");

    let currentIndex = document.body.className === "dark" ? 0 : 1;
    const totalImages = data.slides.length;
    leftArrow.addEventListener("click", () => {
      const dark = document.body.className === "dark" ? 0 : 1;
      currentIndex -= 1;
      if (currentIndex < dark) currentIndex = totalImages - 1;
      updateImage(currentIndex);
    });

    rightArrow.addEventListener("click", () => {
      const dark = document.body.className === "dark" ? 0 : 1;
      currentIndex += 1;
      if (currentIndex >= totalImages) currentIndex = dark;

      updateImage(currentIndex);
    });

    const updateImage = (i) => {
      hero.src = data.slides[i].image;
      podiumTitle.textContent = data.slides[i].title;
      imageCaption.textContent = data.slides[i].description;
      imageTitle.textContent = data.slides[i].title;
    };
    if (themeButton) {
      themeButton.addEventListener("click", () => {
        currentIndex = document.body.className === "dark" ? 0 : 1;
      });
    }
  } catch (error) {
    console.log(error);
  }
}
arrows();

async function dots() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const hero = document.getElementById("webwarrior-image");
    const podiumTitle = document.getElementById("podium-title");
    const imageCaption = document.getElementById("image-caption");
    const imageTitle = document.getElementById("image-title");
    const dot1 = document.getElementById("dot1");
    const dot2 = document.getElementById("dot2");
    const dot3 = document.getElementById("dot3");
    const dot4 = document.getElementById("dot4");
    const dot5 = document.getElementById("dot5");
    const dot6 = document.getElementById("dot6");
    const dot7 = document.getElementById("dot7");
    const dot8 = document.getElementById("dot8");
    const dot9 = document.getElementById("dot9");

    dot1.addEventListener("click", () => {
      updateImage(1);
      if (document.body.className === "dark") {
        updateImage(0);
      }
    });
    dot2.addEventListener("click", () => {
      updateImage(2);
    });
    dot3.addEventListener("click", () => {
      updateImage(3);
    });
    dot4.addEventListener("click", () => {
      updateImage(4);
    });
    dot5.addEventListener("click", () => {
      updateImage(5);
    });
    dot6.addEventListener("click", () => {
      updateImage(6);
    });
    dot7.addEventListener("click", () => {
      updateImage(7);
    });
    dot8.addEventListener("click", () => {
      updateImage(8);
    });
    dot9.addEventListener("click", () => {
      updateImage(9);
    });

    const updateImage = (i) => {
      hero.src = data.slides[i].image;
      podiumTitle.textContent = data.slides[i].title;
      imageCaption.textContent = data.slides[i].description;
      imageTitle.textContent = data.slides[i].title;
    };
  } catch (error) {
    console.log(error);
  }
}
dots();
const themeButton = document.getElementById("theme-toggle");
const header = document.getElementById("header");

const background = document.getElementById("background");
const saved = localStorage.getItem("theme") || "light";
document.body.className = saved;

header.className = saved;

background.className = "background " + saved;

function toggleTheme() {
  const isDark = document.body.className === "dark";
  const newTheme = isDark ? "light" : "dark";
  document.body.className = newTheme;
  localStorage.setItem("theme", newTheme);
  spiderman();
}

themeButton.addEventListener("click", toggleTheme);

//this is partially AI
const spiderman = () => {
  const spiderman = document.getElementById("webwarrior-image");
  const themeToggle = document.getElementById("theme-toggle-image");
  const imageCaption = document.getElementById("image-caption");
  const imageTitle = document.getElementById("image-title");
  const podiumTitle = document.getElementById("podium-title");
  const currentTheme = document.body.className;
  spiderman.src =
    currentTheme === "dark"
      ? "Assets/dark-spiderman.png"
      : "Assets/spiderman.png";
  imageCaption.textContent =
    currentTheme === "dark"
      ? "The first and most well-known symbiote is Venom, who originally attaches itself to Spider-Man during the 1984 Secret Wars miniseries. After Spider-Man rejects it, the symbiote bonds with his rival, Eddie Brock, with whom it first becomes Venom, though it still possesses the powers of Spider-Man. The character has since endured as one of Spider-Man's archenemies, though he has also been occasionally depicted as an antihero. Other characters have later merged with the Venom symbiote, including the villain Mac Gargan, and Flash Thompson, who became the superhero Agent Venom. Other well-known symbiotes are Carnage, an offspring of Venom who, when merged with its most infamous host, Cletus Kasady, has served as an enemy of both Spider-Man and Venom; and Anti-Venom, which originates when the Venom symbiote re-merged with Brock after being separated from him, gaining a new white appearance and additional powers."
      : "Spider-Man is a superhero in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. Widely regarded as one of the most popular and commercially successful superheroes, he has been featured in comic books, television shows, films, video games, novels, and plays.";
  imageTitle.textContent =
    currentTheme === "dark" ? "Simbiot-Spider-Man" : "Spider-Man";
  podiumTitle.textContent =
    currentTheme === "dark" ? "Simbiot-Spider-Man" : "Spider-Man";
  themeToggle.src =
    currentTheme === "dark" ? "Assets/spider-man.png" : "Assets/darkmode.svg";
};
spiderman();

const setingSignUp = () => {
  const signup = document.getElementById("signup");
  const profilepic = document.getElementById("profilepic");
  const dot10 = document.getElementById("dot10");
  const username = localStorage.getItem("username");
  const profile = localStorage.getItem("radio");
  if (!username || !profile) return;
  signup.textContent = username;
  if (profile === "1") profilepic.src = "Assets/costumespider1.svg";
  if (profile === "2") profilepic.src = "Assets/costumespider2.svg";
  if (profile === "3") profilepic.src = "Assets/costumespider3.svg";
  dot10.style.display = "flex";
};
setingSignUp();

const profiledot = () => {
  const dot10 = document.getElementById("dot10");
  const profileButton = document.getElementById("profileButton");
  const hero = document.getElementById("webwarrior-image");
  const podiumTitle = document.getElementById("podium-title");
  const imageCaption = document.getElementById("image-caption");
  const imageTitle = document.getElementById("image-title");
  const username = localStorage.getItem("username");
  const description = localStorage.getItem("description");
  const radio = localStorage.getItem("radio");

  dot10.addEventListener("click", () => {
    updateImage(radio);
  });

  const updateImage = (i) => {
    if (i === "1") hero.src = "Assets/costumespider11.svg";
    if (i === "2") hero.src = "Assets/costumespider12.svg";
    if (i === "3") hero.src = "Assets/costumespider13.svg";
    podiumTitle.textContent = username;
    imageCaption.textContent = description;
    imageTitle.textContent = username;
  };
  profileButton.addEventListener("click", () => {
    updateImage(radio);
  });
};
profiledot();
const cardArrows = () => {
  const arrow1 = document.getElementById("card-arrow-button1");
  const arrow2 = document.getElementById("card-arrow-button2");
  const card1 = document.getElementById("Card1");
  const card2 = document.getElementById("Card2");
  const card3 = document.getElementById("Card3");
  const card4 = document.getElementById("Card4");
  const card5 = document.getElementById("Card5");
  const card6 = document.getElementById("Card6");
  const card7 = document.getElementById("Card7");
  const card8 = document.getElementById("Card8");

  if (!arrow1 || !arrow2) return;

  const cards = [card1, card2, card3, card4, card5, card6, card7, card8];
  let currentIndex = 0;

  arrow1.addEventListener("click", () => {
    currentIndex -= 1;
    if (currentIndex < 0) currentIndex = cards.length - 1;

    render(currentIndex);
  });

  arrow2.addEventListener("click", () => {
    currentIndex += 1;
    if (currentIndex >= cards.length) currentIndex = 0;

    render(currentIndex);
  });

  const render = (index) => {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
    cards[index].style.display = "flex";
  };
};
cardArrows();

const Menu1 = () => {
  const menubutton = document.getElementById("menu-button1");
  const closemenu = document.getElementById("close-menu");
  const menu = document.getElementById("nav-links");
  menubutton.addEventListener("click", () => {
    menu.style.display = "flex";
  });
  closemenu.addEventListener("click", () => {
    menu.style.display = "none";
  });
};
Menu1();
