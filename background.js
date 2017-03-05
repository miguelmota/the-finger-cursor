(function() {
  //let active = !!(localStorage.getItem("the_finger_enabled") == "true");
  let active = true;

  chrome.browserAction.onClicked.addListener(function(tab) {
    active = !active;
    //localStorage.setItem("the_finger_enabled", active);

    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(function(tab) {
        if (!/^http/gi.test(tab.url)) {
          return false;
        }

        chrome.browserAction.setIcon({
          path: active ? "on.png" : "icon.png",
          tabId: tab.id
        });

        chrome.tabs.executeScript(tab.id, {
          code: "window.thefinger.toggle(" + active + ")"
        });
      });
    });
  });
})();
