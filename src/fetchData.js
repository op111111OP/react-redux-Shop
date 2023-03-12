export const fetchData = (
  setCategories,
  setElectronics,
  setJewelery,
  setMens,
  setWomens,
  setItem,
  setCarousels1,
  setCarousels2,
  setCarousels3
) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((result) => setItem(result))
    .catch((error) => {
      console.error("Произошла ошибка при загрузке товаров: ", error);
      alert(
        "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже."
      );
    });

  // ----перевірка чі є і вставляння початкового localStorage
  const storedCategories = JSON.parse(localStorage.getItem("categories"));
  if (storedCategories) {
    setCategories(storedCategories);
  } else {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
        localStorage.setItem("categories", JSON.stringify(result));
      })
      .catch((error) => {
        console.error("Произошла ошибка при загрузке категорий: ", error);
        alert(
          "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже."
        );
      });
  }
  //  ----
  fetch("https://fakestoreapi.com/products/category/electronics")
    .then((res) => res.json())
    .then((result) => setElectronics(result))
    .catch((error) => {
      console.error(
        "Произошла ошибка при загрузке товаров категории electronics: ",
        error
      );
      alert(
        "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже."
      );
    });
  fetch("https://fakestoreapi.com/products/category/jewelery")
    .then((res) => res.json())
    .then((result) => setJewelery(result))
    .catch((error) => {
      console.error(
        "Произошла ошибка при загрузке товаров категории jewelery: ",
        error
      );
      alert(
        "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже."
      );
    });
  fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    .then((res) => res.json())
    .then((result) => setMens(result))
    .catch((error) => {
      console.error(
        "Произошла ошибка при загрузке товаров категории men's clothing: ",
        error
      );
      alert(
        "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже."
      );
    });
  fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then((res) => res.json())
    .then((result) => setWomens(result))
    .catch((error) => {
      console.error(
        "Произошла ошибка при загрузке товаров категории women's clothing: ",
        error
      );
      alert(
        "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже."
      );
    });
  fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((result) => setCarousels1(result))
    .catch((error) => {
      console.error(
        "Произошла ошибка при загрузке товара для карусели 1: ",
        error
      );
      alert(
        "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже."
      );
    });
  fetch("https://fakestoreapi.com/products/2")
    .then((res) => res.json())
    .then((result) => setCarousels2(result))
    .catch((error) => {
      console.error(
        "Произошла ошибка при загрузке товара для карусели 4: ",
        error
      );
      alert(
        "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже."
      );
    });
  fetch("https://fakestoreapi.com/products/3")
    .then((res) => res.json())
    .then((result) => setCarousels3(result))
    .catch((error) => {
      console.error(
        "Произошла ошибка при загрузке товара для карусели 3: ",
        error
      );
      alert(
        "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже."
      );
    });
};
