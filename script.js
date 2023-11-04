document.getElementById("selectElement").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    const tabId = activeTab.id;
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: function () {
        document.querySelector("video").currentTime = 100;
      },
    });
  });
});
