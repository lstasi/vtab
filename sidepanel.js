// Query and display all open tabs
async function displayTabs() {
  const tabList = document.getElementById('tab-list');
  tabList.innerHTML = '';

  try {
    const tabs = await chrome.tabs.query({});

    tabs.forEach(tab => {
      const tabItem = document.createElement('div');
      tabItem.className = 'tab-item';
      tabItem.textContent = tab.title || 'Untitled';
      tabList.appendChild(tabItem);
    });
  } catch (error) {
    console.error('Failed to query tabs:', error);
    tabList.textContent = 'Unable to load tabs';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', displayTabs);
