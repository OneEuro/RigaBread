let activeTabClass = null;

function toggleTabs(tabClass) {
  const tabs = document.querySelectorAll('.tab-content');
  const allTabs = document.getElementById("allTabs");
  const buttons = document.querySelectorAll('.tab-button');
  const tabButton = document.getElementById(tabClass+'-btn');
  const tabContainer = document.getElementById('tabContainer');
  var allTabsChild = Array.from(allTabs.getElementsByTagName("div"));
  var tabContentDivs = allTabsChild.filter(function(childDiv) {
    return childDiv.classList.contains("tab-content");
});
  if (activeTabClass === tabClass) {
    tabContentDivs.forEach(tab => {
      tab.classList.add('active-tab');
      allTabs.classList.add('active-tab');
    });
    activeTabClass = null;
    tabButton.classList.remove('button');
    tabContainer.classList.remove('active-tab');
  } else {
    tabs.forEach(tab => {
      if (tab.classList.contains(tabClass) || tab.id === 'tabContainer') {
        tab.classList.add('active-tab');
      } else {
        tab.classList.remove('active-tab');
      }
    });
    activeTabClass = tabClass;
    buttons.forEach(btn => btn.classList.remove('button'));
    tabButton.classList.add('button');
  }
}