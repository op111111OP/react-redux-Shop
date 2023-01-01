export const Len = (know) => {
  const UA = {
    themeC: "тема-темна",
    themeT: "тема-світла",
    languageE: "англійська",
    languageU: "українська",
    home: "головна",
    defense: "обране",
    basket: "кошик",
    profile: "профіль",
    catalog: "КАТАЛОГ ТОВАРІВ",
    price: "Ціна: ",
    uah: "грн.",
    rating: "рейтинг: ",
    buy: " КУПИТИ ",
  };
  const EN = {
    themeC: "theme-dark",
    themeT: "theme-light",
    languageE: "english",
    languageU: "ukrainian",
    home: "home",
    defense: "defense",
    basket: "basket",
    profile: "profile",
    catalog: "CATALOG OF GOODS",
    price: "Price: ",
    uah: "uah.",
    rating: "rating: ",
    buy: " BUY ",
  };
  return know ? UA : EN;
};
