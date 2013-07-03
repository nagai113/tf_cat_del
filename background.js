chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.extension.onMessage.addListener(function(req, sender, res){
  if (req.status == 'cl' && sender.tab.id > 0) {
	chrome.tabs.remove(sender.tab.id);
  }
});

function checkForValidUrl(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
	if (tab.id == tabId && 
		tab.url.indexOf('://www.tab-force.com/') > -1 &&
		tab.url.indexOf('size=1&index=1&action=delete') > -1) {
		
	  winId = tab.windowId;
	  matches = tab.url.match(/\/(.*?)\/catalog\//);
	  st_id = parseInt(localStorage['st_id']);
	  ed_id = parseInt(localStorage['ed_id']);
	  if (st_id > ed_id) {
		tmp_id = st_id;
		st_id = ed_id;
		ed_id = tmp_id;
	  }
	  for (var i = st_id; i <= ed_id; i++) {
		$.get('https://'+matches[1]+'/Catalog/catalogdelete?ctgr_id=1&shn_id='+i+'&size=1&index=1');
      }
	}
  }
};


