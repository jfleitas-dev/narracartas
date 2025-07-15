const emojis = [
  { icon: "🐉", name: "Dragón" },
  { icon: "🚀", name: "Cohete" },
  { icon: "🕵️‍♂️", name: "Detective" },
  { icon: "🏰", name: "Castillo" },
  { icon: "🧙‍♀️", name: "Hechicera" },
  { icon: "🌪️", name: "Tornado" },
  { icon: "🗝️", name: "Llave" },
  { icon: "👽", name: "Alien" },
  { icon: "🐍", name: "Serpiente" },
  { icon: "🧠", name: "Mente" },
  { icon: "💎", name: "Gema" },
  { icon: "🌌", name: "Universo" },
  { icon: "🕰️", name: "Tiempo" },
  { icon: "🧬", name: "ADN" },
  { icon: "🎭", name: "Máscara" }
];

const numDice = 6;

function rollDice() {
  const container = document.getElementById("dice-container");
  container.innerHTML = "";

  const emojisCopy = [...emojis];

  for (let i = 0; i < numDice; i++) {
    if (emojisCopy.length === 0) break;

    const randomIndex = Math.floor(Math.random() * emojisCopy.length);
    const { icon, name } = emojisCopy.splice(randomIndex, 1)[0];

    const dice = document.createElement("div");
    dice.className = "dice";
    dice.innerHTML = `
      <div class="emoji">${icon}</div>
      <div class="label">${name}</div>
    `;

    container.appendChild(dice);
  }
}

rollDice();
