// document.getElementById("toggle").addEventListener("click", function () {
// 	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// 		chrome.tabs.sendMessage(tabs[0].id, { action: "toggle" });
// 	});
// });

document.getElementById("block").addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			action: "block",
			url: tabs[0].url,
		});
	});
});
