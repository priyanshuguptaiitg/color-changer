const colorEl = document.getElementById("color-changer");
colorEl.addEventListener("input", () => {
  injectCSS(`body {
        background-color: ${colorEl.value}!important;
    }`);
});
function injectCSS(css) {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (!tab) return;
    chrome.scripting.insertCSS({
      css,
      target: { tabId: tab.id },
    });
  });
}