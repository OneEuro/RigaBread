function redirectToCatalog() {
    // Ваша логика формирования showNovelty
    var showNovelty = true;

    // Сохраняем showNovelty в sessionStorage
    sessionStorage.setItem("showNovelty", showNovelty);

    // Переходим на страницу /catalog-page.html
    window.location.href = "/catalog-page.html";
  }