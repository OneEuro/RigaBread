document.addEventListener('DOMContentLoaded', function() {
const categoryCheckboxes = document.querySelectorAll('.category-filter');
const brandCheckboxes = document.querySelectorAll('.brand-filter');
const packagingCheckboxes = document.querySelectorAll('.packaging-filter');

const showMoreButton = document.getElementById('showMoreButton');
showMoreButton.addEventListener('click', showMoreProducts);

const productsContainer = document.getElementById('productsContainer');
const products = document.querySelectorAll('.product-card');
const productsToShowInitially = 3;
const productsToShowIncrement = 3;
let currentVisibleProducts = productsToShowInitially;

let selectedFilters = getSelectedCheckboxes(
  document.querySelectorAll('.product-filter-block input[type="checkbox"]')
);

updateProductVisibility();

function updateProductVisibility() {
  const filteredProducts = filterProductsBySelection(products, selectedFilters);

  filteredProducts.forEach((product, index) => {
    if (index < currentVisibleProducts) {
      product.classList.remove('hidden');
    } else {
      product.classList.add('hidden');
    }
  });

  // Проверка, остались ли еще скрытые товары
  const remainingHiddenProducts = filteredProducts.length - currentVisibleProducts;
  if (remainingHiddenProducts <= 0) {
    // Если нет скрытых товаров, скройте кнопку "Показать еще"
    document.getElementById('showMoreButtonContainer').style.display = 'none';
  } else {
    document.getElementById('showMoreButtonContainer').style.display = 'inline-block';
  }

    // Прокрутка к последнему добавленному элементу
    const lastVisibleProduct = document.querySelector('.product-card:not(.hidden):last-child');
    if (lastVisibleProduct) {
      lastVisibleProduct.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
}

function filterProductsBySelection(products, selectedFilters) {
  return Array.from(products).filter(product => {
    const category = product.getAttribute('data-category');
    const brand = product.getAttribute('data-brand');
    const packaging = product.getAttribute('data-packaging');

    const categoryMatch = selectedFilters.category.length === 0 || selectedFilters.category.includes(category);
    const brandMatch = selectedFilters.brand.length === 0 || selectedFilters.brand.includes(brand);
    const packagingMatch = selectedFilters.packaging.length === 0 || selectedFilters.packaging.includes(packaging);

    return categoryMatch && brandMatch && packagingMatch;
  });
}

function findLastVisibleProduct(filteredProducts) {
  const visibleProducts = Array.from(filteredProducts).filter(product => !product.classList.contains('hidden'));
  return visibleProducts.length > 0 ? visibleProducts[visibleProducts.length - 1] : null;
}

function getSelectedCheckboxes(checkboxes) {
  const selectedFilters = {
    category: [],
    brand: [],
    packaging: [],
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
      }
    }
  });

  return selectedFilters;
}

function showMoreProducts() {
  currentVisibleProducts += productsToShowIncrement;
    updateProductVisibility();
}

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

function getSelectedCheckboxes(checkboxes) {
  const selectedFilters = {
    category: [],
    brand: [],
    packaging: [],
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
      }
    }
  });

  return selectedFilters;
}

function filterProducts() {
  const selectedFilters = getSelectedCheckboxes(
    document.querySelectorAll('.product-filter-block input[type="checkbox"]')
  );

  const products = document.querySelectorAll('.product-card');

  products.forEach((product) => {
    const category = product.getAttribute('data-category');
    const brand = product.getAttribute('data-brand');
    const packaging = product.getAttribute('data-packaging');

    const categoryMatch = selectedFilters.category.length === 0 || selectedFilters.category.includes(category);
    const brandMatch = selectedFilters.brand.length === 0 || selectedFilters.brand.includes(brand);
    const packagingMatch = selectedFilters.packaging.length === 0 || selectedFilters.packaging.includes(packaging);

    if (categoryMatch && brandMatch && packagingMatch) {
      product.classList.remove('hidden');
    } else {
      product.classList.add('hidden');
    }
  });
}
});