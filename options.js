$(function(){
	if (localStorage["st_id"]) {
		st_id = localStorage["st_id"];
		$('#st_id').val(st_id);
	}
	if (localStorage["ed_id"]) {
		ed_id = localStorage["ed_id"];
		$('#ed_id').val(ed_id);
	}

	$('#st_id').bind('paste', function(){
		var el = $(this);
		setTimeout(function() {
		    var text = $(el).val();
	    	if (text.match(/[0-9]+/)) {
				localStorage['st_id'] = text;
			}
		}, 100);
	});

	$('#ed_id').bind('paste', function(){
		var el = $(this);
		setTimeout(function() {
		    var text = $(el).val();
	    	if (text.match(/[0-9]+/)) {
				localStorage['ed_id'] = text;
			}
		}, 100);
	});

	$('#st_id').keyup(function(){
		if ($(this).val().match(/[0-9]+/)) {
			localStorage['st_id'] = $(this).val();
		}
	});
	$('#ed_id').keyup(function(){
		if ($(this).val().match(/[0-9]+/)) {
			localStorage['ed_id'] = $(this).val();
		}
	});

});
