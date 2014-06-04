// To request an info bar (message handled by background.js)
// if(!chrome.runtime){
// 	// Chrome 20-21
// 	chrome.runtime = chrome.extension;
// }
// else if(!chrome.runtime.onMessage){
// 	//Chrome 22-25
// 	chrome.runtime.onMessage = chrome.extension.onMessage;
//     chrome.runtime.sendMessage = chrome.extension.sendMessage;
//     chrome.runtime.onConnect = chrome.extension.onConnect;
//     chrome.runtime.connect = chrome.extension.connect;
// }




//chrome.runtime.sendMessage("showbar");

var height = '38px';
var iframe = document.createElement('iframe');
iframe.src = chrome.extension.getURL('infobar.html');


iframe.style.height = height;
iframe.style.width = '100%';
iframe.style.border = 0;


iframe.style.position = 'fixed';
iframe.style.left = '0';
iframe.style.top = '0';
iframe.style.zIndex = '938089'; // Some high value
//iframe.style.backgroundColor = 'black';
//iframe.style.backgroundColor = "#F1F1F1"; //Light Gray
iframe.style.backgroundColor = "#200000";


iframe.align = 'top';
iframe.scrolling = 'no';
iframe.innerHTML = "Dota 2";







//iframe.style.scrolling = 'no';
//iframe.style.overflow = 'hidden';
// Etc. Add your own styles if you want to
document.documentElement.appendChild(iframe);



var bodyStyle = document.body.style;

var cssTransform = 'transform' in bodyStyle ? 'transform' : 'webkitTransform';
bodyStyle[cssTransform] = 'translateY(' + height + ')';
document.body.style = bodyStyle;
// var removeScroll = 'overflow-y' in iframe;
// iframe[removeScroll] = hidden;
// iframe[bodyStyle]{
// 	overflow:hidden
// }

// Demo: Pass document title to infobar
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message === 'gimme-title') sendResponse(document.title);


// });