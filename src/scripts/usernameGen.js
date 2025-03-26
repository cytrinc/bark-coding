function generateUsername() {
  let selectedWords = [
    "Bark",
    "Coder",
    "Kitty",
    "Clover",
    "Robot",
    "Dog",
    "Cat",
    "Miner",
    "Cool",
    "Funny",
    "Hamster",
    "Hat",
    "Rapster",
    "Cereal",
    "Car",
    "Backpacking",
    "Corgi",
    "Party",
    "Toast",
    "Apple",
    "Lemon",
    "Bowtie",
    "Writing",
    "Chess",
    "Snail",
    "Craft",
    "Nice",
    "God",
    "Fish",
    "Banana",
    "Cereal",
    "Nice",
    "Extremze",
    "Skater"
  ]
  let name = selectedWords[Math.floor(Math.random() * selectedWords.length)] + selectedWords[Math.floor(Math.random() * selectedWords.length)] + Math.floor(Math.random() * 900);
  return name;
}

let generatedName = generateUsername();

document.getElementById('username').placeholder = generatedName;
