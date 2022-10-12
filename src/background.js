chrome.tabs.query({ currentWindow: true, active: true }, function (tabArray) {
  chrome.tabs.executeScript(
    tabArray[0].id,
    {
      file: "../public/index.html",
    },
    function () {
      chrome.tabs.sendMessage(this.props.source);
    }
  );
});
