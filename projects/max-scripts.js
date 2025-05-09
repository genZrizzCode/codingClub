(() => {
  function getRandomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const specialCharsArray = [
    "∑", "®", "†", "¥", "π", "“", "‘", "«", "∂", "ƒ", "©", "˙", "∆", "˚", "¬",
    "…", "Ω", "≈", "√", "∫", "≤", "≥", "÷", "¡", "™", "£", "¢", "∞", "§", "¶",
    "•", "ª", "º", "–", "≠", "€", "‹", "›", "ﬁ", "ﬂ", "‡", "‚", "±", "„", "‰",
    "∏", "˝", "", "¸", "˛", "◊", "ı", "¯", "¿", "大家好", "……", "(￣(工)￣)", "( ͡° ͜ʖ ͡°)"
  ];

  (async () => {
    while (true) {
      const randomString = getRandomString(specialCharsArray);
      document.getElementById('special-Char-Loop').innerHTML = randomString;
      await sleep(250); // wait 0.25 seconds
    }
  })();
})();
