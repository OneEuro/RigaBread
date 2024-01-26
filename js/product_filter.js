function getSessionItem(item) {
  var resultingItem = sessionStorage.getItem(item);
  if (resultingItem) {
    sessionStorage.removeItem(item);
    return item;
  } else {
    console.log("item не определена");
    return false;
  }
}

function filterNovelty() {
  const products = document.querySelectorAll('.product-card');
  products.forEach((product) => {
    var spanElement = product.querySelector('.shading');
    var spanTextContent = spanElement.textContent;
    if (spanTextContent !== "Новинка") {
      product.classList.add('hidden');
    } else {
      product.dataset.filter = 'Novelty';
    }
  });
}

function hideExtraCards(initialCardsToShow) {
  const allProducts = document.querySelectorAll('.product-card[data-filter="Novelty"]');
  allProducts.forEach((product, index) => {
    if (index >= initialCardsToShow) {
      product.classList.add('hidden');
    }
  });
}

function showMoreNovelty() {
  const hiddenProducts = document.querySelectorAll('.product-card.hidden[data-filter="Novelty"]');
  hiddenProducts.forEach((product) => {
    const filter = product.getAttribute('data-filter');
    const filterMatch = filter === 'Novelty';
    if (filterMatch) {
    product.classList.remove('hidden');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const categoryCheckboxes = document.querySelectorAll('.category-filter');
  const brandCheckboxes = document.querySelectorAll('.brand-filter');
  const packagingCheckboxes = document.querySelectorAll('.packaging-filter');
  const badgeCheckboxes = document.querySelectorAll('.badge-filter');
  
  const showMoreBtn = document.getElementById('showMoreButton');
  // const productContainer = document.querySelector('.product-filter-block');
  const initialCardsToShow = 3;
  
 
  

  // if (getSessionItem('showNovelty')) {
  //   filterNovelty();
  //   hideExtraCards(initialCardsToShow);
  //   showMoreBtn.addEventListener('click', showMoreNovelty);
  // } else {
  //   showMoreBtn.addEventListener('click', showMoreProducts);
  //   filterProducts();
  // }
  // hideExtraCards();
  showMoreBtn.addEventListener('click', showMoreProducts);
  filterProducts();
  
  brandCheckboxes.forEach(checkbox => { //проверить данную функцию
    checkbox.addEventListener('change', function() {
      const elem = document.querySelectorAll('.product-filter-block input[type="checkbox"]:checked');
      elem.forEach(element => {
        element.removeAttribute('checked');
      });
    });
  });
  
  
  

  function showMoreProducts() {
    // hideExtraCards(0);
    const hiddenProducts = document.querySelectorAll('.product-card.hidden');
    const selectedFilters = getSelectedCheckboxes(
      document.querySelectorAll('.product-filter-block input[type="checkbox"]')
    );
  
    hiddenProducts.forEach((product) => {
      const category = product.getAttribute('data-category');
      const brand = product.getAttribute('data-brand');
      const packaging = product.getAttribute('data-packaging');
      const badge = product.getAttribute('data-badge');
  
      const categoryMatch = selectedFilters.category.length === 0 || selectedFilters.category.includes(category);
      const brandMatch = selectedFilters.brand.length === 0 || selectedFilters.brand.includes(brand);
      const packagingMatch = selectedFilters.packaging.length === 0 || selectedFilters.packaging.includes(packaging);
      const badgeMatch = selectedFilters.badge.length === 0 || selectedFilters.badge.includes(badge);

  
      if (categoryMatch && brandMatch && packagingMatch && badgeMatch) {
        product.classList.remove('hidden');
      }
    });
  }
  
  /////////
  
  
  
  ////////////////
  
  // Add event listener to each checkbox
  categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
  });
  
  brandCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
  });
  
  packagingCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
  });

  badgeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
  });

  
  function getSelectedCheckboxes(checkboxes) {
    const selectedFilters = {
      category: [],
      brand: [],
      packaging: [],
      badge: []
    };
  
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const checkboxClasses = checkbox.classList;
        const filterValue = checkbox.getAttribute('value');
        if (checkboxClasses.contains('category-filter')) {
          selectedFilters.category.push(filterValue);
        } else if (checkboxClasses.contains('brand-filter')) {
          selectedFilters.brand.push(filterValue);
        } else if (checkboxClasses.contains('packaging-filter')) {
          selectedFilters.packaging.push(filterValue);
        } else if (checkboxClasses.contains('badge-filter')) {
          selectedFilters.badge.push(filterValue);
        }
      }
    });
  
    return selectedFilters;
  }
  
  function filterProducts() {
    // showMoreBtn.addEventListener('click', showMoreProducts);
    const selectedFilters = getSelectedCheckboxes(
      document.querySelectorAll('.product-filter-block input[type="checkbox"]')
    );
  
  
    const products = document.querySelectorAll('.product-card');
  
    products.forEach((product) => {
      const category = product.getAttribute('data-category');
      const brand = product.getAttribute('data-brand');
      const packaging = product.getAttribute('data-packaging');
      const badge = product.getAttribute('data-badge');

  
      const categoryMatch = selectedFilters.category.length === 0 || selectedFilters.category.includes(category);
      const brandMatch = selectedFilters.brand.length === 0 || selectedFilters.brand.includes(brand);
      const packagingMatch = selectedFilters.packaging.length === 0 || selectedFilters.packaging.includes(packaging);
      const badgeMatch = selectedFilters.badge.length === 0 || selectedFilters.badge.includes(badge);

      if (categoryMatch && brandMatch && packagingMatch && badgeMatch) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
  
    // Скрыть товары, которые могут быть видны при показе еще
    const visibleProducts = document.querySelectorAll('.product-card:not(.hidden)');
    visibleProducts.forEach((product, index) => {
      if (index >= 4) {
        product.classList.add('hidden');
      }
    });
  }
  
  });
  
  