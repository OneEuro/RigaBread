const categoryCheckboxes = document.querySelectorAll('.category-filter');
const brandCheckboxes = document.querySelectorAll('.brand-filter');
const packagingCheckboxes = document.querySelectorAll('.packaging-filter');

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
    document.querySelectorAll('.filter-block input[type="checkbox"]')
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