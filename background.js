chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request.websiteType);
    sendResponse({message: 'Received website type'});
  });