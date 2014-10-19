window.addEventListener('load', function(){
	document.getElementById('hello').addEventListener('click', function(){
		chrome.notifications.create('',
			{
				'type': 'basic',
				'iconUrl': 'eye_128.png',
				'title': 'My Title',
				'message': 'My Message'
			},
			function(nid){}
		);
	});
});