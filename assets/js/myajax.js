/****************************
AJAX UNTUK SISWA
*****************************/
function searchuser(){
//SEARCH WHEN SEND MESSAGE
$('#loader').show();//SHOW LOADING
var iduser = $('#txtsearchuser').val();//LOAD ID USER ON INPUT TEXT
$.ajax({
	type:"GET",
	url:"http://localhost/2014-Project/SMAN01DEPOKBABARSARI-SOCIAL/index.php/all/search_user",
	data:"iduser="+iduser,
	success:function(result){
		$('#resultuser').html(result);//RESULT USER
		$('#loader').hide();//HIDE LOADING
		$('#resultuser').show();//RESULT USER
	}
});
}

/////////// SHOW LATTEST STATUS
function lattestStatus(){
//alert('work');
$('#top-loader').show();//SHOW LOADING
$.ajax({
	url:'http://localhost/2014-Project/SMAN01DEPOKBABARSARI-SOCIAL/index.php/json/start_status',
	dataType:'json',
	timeout: 50000,//50000MS
	success:function(data){
		timeline ='';
		$.each(data['result'], function(i,n){
			timeline = '<div class=\'timeline\'>'+
			'<div name=\''+n['id']+'\' class=\'row name\'>'+
			'<div class=\'col-md-12\'><img src=\''+n['avatar']+'\' /><button class=\'btn btn-xs btn-default\' style=\'float:right;top:0\'>x</button>'+
			'<h5><a href=\'#\'><strong>'+n['name']+'</strong></a></h5><h6>'+n['time']+'</h6>'+
			'</div>'+     
			'</div>'+
			'<div class=\'row\'>'+
			'<div class=\'col-md-12\'>'+
			'<p>'+n['content']+'</p>'+
			'<p>'+
			'<button class=\'btn btn-xs btn-default\'><span class=\'glyphicon glyphicon-thumbs-up\'></span> </button> <span style=\'font-size:10px\'>234</span>'+
			'<button class=\'btn btn-xs btn-default\'><span class=\'glyphicon glyphicon-thumbs-down\'></span> </button> <span style=\'font-size:10px\'>35</span>'+
			'</p>'+
			'</div>'+
			'</div>'+
			'<div class=\'container\'>'+
			'<div class=\'comment row\'>'+
			'<div class=\'col-md-2\'>'+            
			'<img src=\'http://localhost/2014-Project/SMAN01DEPOKBABARSARI-SOCIAL/assets/img/avatar/avatar.jpg\' />'+
			'</div>'+
			'<div class=\'col-md-10\'>'+
			'<p><span><strong><a href=\'#\'>Dougers</a></strong></span> fill with comment</p>'+
			'<h6>5 Juli 2014 23:01</h6>'+
			'</div>'+
			'</div>'+
			'<div class=\'comment row\'>'+
			'<div class=\'col-md-2\'><img src=\'http://localhost/2014-Project/SMAN01DEPOKBABARSARI-SOCIAL/assets/img/avatar/avatar.jpg\' /></div>'+
			'<div class=\'col-md-10\'>'+
			'<textarea class=\'form-control\' id=\'comment\' placeholder=\'your comment...\'></textarea>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'</div>';
			timeline = timeline+'';
			$('#all-timeline').append(timeline);//ADD NEW TO BOTTOM prepend() //TO TOP
	});
		$('#btn-more').show();//show btn to more status
	},
	error: function(){
		alert('Terjadi masalah');
	}
	});
$('#top-loader').hide();
}

/////////////////SHOW UPDATED STATUS
function showUpdatedStatus(){
$('#top-loader').show();//SHOW LOADING
lastid = $('#all-timeline .timeline div').first().attr('name');//GET ELEMENT NAME
$.ajax({
	url:'http://localhost/2014-Project/SMAN01DEPOKBABARSARI-SOCIAL/index.php/json/show_updated_status?lastid='+lastid,
	dataType:'json',
	timeout: 50000,//50000MS
	success:function(data){
	timeline ='';
	$.each(data['result'], function(i,n){
		timeline = '<div class=\'timeline\'>'+
		'<div name=\''+n['id']+'\' class=\'row name\'>'+
		'<div class=\'col-md-12\'><img src=\''+n['avatar']+'\' /><button class=\'btn btn-xs btn-default\' style=\'float:right;top:0\'>x</button>'+
		'<h5><a href=\'#\'><strong>'+n['name']+'</strong></a></h5><h6>'+n['time']+'</h6>'+
		'</div>'+     
		'</div>'+
		'<div class=\'row\'>'+
		'<div class=\'col-md-12\'>'+
		'<p>'+n['content']+'</p>'+
		'<p>'+
		'<button class=\'btn btn-xs btn-default\'><span class=\'glyphicon glyphicon-thumbs-up\'></span> </button> <span style=\'font-size:10px\'>234</span>'+
		'<button class=\'btn btn-xs btn-default\'><span class=\'glyphicon glyphicon-thumbs-down\'></span> </button> <span style=\'font-size:10px\'>35</span>'+
		'</p>'+
		'</div>'+
		'</div>'+
		'<div class=\'container\'>'+
		'<div class=\'comment row\'>'+
		'<div class=\'col-md-2\'>'+            
		'<img src=\'http://localhost/2014-Project/SMAN01DEPOKBABARSARI-SOCIAL/assets/img/avatar/avatar.jpg\' />'+
		'</div>'+
		'<div class=\'col-md-10\'>'+
		'<p><span><strong><a href=\'#\'>Dougers</a></strong></span> fill with comment</p>'+
		'<h6>5 Juli 2014 23:01</h6>'+
		'</div>'+
		'</div>'+
		'<div class=\'comment row\'>'+
		'<div class=\'col-md-2\'><img src=\'http://localhost/2014-Project/SMAN01DEPOKBABARSARI-SOCIAL/assets/img/avatar/avatar.jpg\' /></div>'+
		'<div class=\'col-md-10\'>'+
		'<textarea class=\'form-control\' id=\'comment\' placeholder=\'your comment...\'></textarea>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>';
		timeline = timeline+'';
		$('#all-timeline').prepend(timeline);//ADD NEW TO BOTTOM prepend() //TO TOP
	});
	},
	error: function(){
		//alert('Terjadi masalah');
	}
	});
	$('#top-loader').hide();//SHOW LOADING
}

/////////////////SHOW MORE STATUS
function showMoreStatus(){
$('#bottom-loader').show();//SHOW LOADING
var id = $('#all-timeline .timeline .name').last().attr('name');//GET ELEMENT NAME
//alert(id);
$.ajax({
	url:'http://localhost/2014-Project/SMAN01DEPOKBABARSARI-SOCIAL/index.php/json/show_more_status?lastid='+id,
	dataType:'json',
	timeout: 50000,//50000MS
	success:function(data){
	timeline ='';
	$.each(data['result'], function(i,n){
		timeline = '<div class=\'timeline\'>'+
		'<div name=\''+n['id']+'\' class=\'row name\'>'+
		'<div class=\'col-md-12\'><img src=\''+n['avatar']+'\' /><button class=\'btn btn-xs btn-default\' style=\'float:right;top:0\'>x</button>'+
		'<h5><a href=\'#\'><strong>'+n['name']+'</strong></a></h5><h6>'+n['time']+'</h6>'+
		'</div>'+     
		'</div>'+
		'<div class=\'row\'>'+
		'<div class=\'col-md-12\'>'+
		'<p>'+n['content']+'</p>'+
		'<p>'+
		'<button class=\'btn btn-xs btn-default\'><span class=\'glyphicon glyphicon-thumbs-up\'></span> </button> <span style=\'font-size:10px\'>234</span>'+
		'<button class=\'btn btn-xs btn-default\'><span class=\'glyphicon glyphicon-thumbs-down\'></span> </button> <span style=\'font-size:10px\'>35</span>'+
		'</p>'+
		'</div>'+
		'</div>'+
		'<div class=\'container\'>'+
		'<div class=\'comment row\'>'+
		'<div class=\'col-md-2\'>'+            
		'<img src=\'http://localhost/2014-Project/SMAN01DEPOKBABARSARI-SOCIAL/assets/img/avatar/avatar.jpg\' />'+
		'</div>'+
		'<div class=\'col-md-10\'>'+
		'<p><span><strong><a href=\'#\'>Dougers</a></strong></span> fill with comment</p>'+
		'<h6>5 Juli 2014 23:01</h6>'+
		'</div>'+
		'</div>'+
		'<div class=\'comment row\'>'+
		'<div class=\'col-md-2\'><img src=\'http://localhost/2014-Project/SMAN01DEPOKBABARSARI-SOCIAL/assets/img/avatar/avatar.jpg\' /></div>'+
		'<div class=\'col-md-10\'>'+
		'<textarea class=\'form-control\' id=\'comment\' placeholder=\'your comment...\'></textarea>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>';
		timeline = timeline+'';
		$('#all-timeline').append(timeline);//ADD NEW TO BOTTOM prepend() //TO TOP
	});
	},
	error: function(){
		alert('Tidak ada lagi status');
	}
	});
$('#bottom-loader').hide();//SHOW LOADING
}

/////////////////UPDATE STATUS
function updateStatus(x,y,z){ //X= ID_SISWA , y = ID_GURU , Z = ID_GRUP  
	$('#top-loader').show();//SHOW LOADING
	var isi = $('#newpost').val();//GET STATUS FROM TEXAREA
	$.ajax({
		type:'POST',
		url:'http://localhost/2014-Project/SMAN01DEPOKBABARSARI-SOCIAL/index.php/all/update_status',
		timeout: 50000,//50000MS
		data:{idsiswa:x,idguru:y,idgrup:z,isi:isi},
		success:function(data){ //SUCCESS INSERT TO DB
			showUpdatedStatus();
		},
		error:function(data){
			alert('ERROR'+data);
		}
	});
	var empty = '';
	$('#newpost').val() = empty;//EMPTY STATUS TEXTAREA
	$('#top-loader').hide();//SHOW LOADING
}

/*****************************
AJAX UNTUK SEMUA
******************************/
function showmessage(x,y){
	//SHOW MESSAGE BY USER x= pengirim , y = penerima
	//$('#pengirim').html(x);
	$('#isithread').modal('show');
	$('#loader').show();
	$.ajax({
		type:"GET",
		url:"http://localhost/2014-Project/SMAN01DEPOK-SOCIAL/index.php/all/isi_pesan_saya",
		data:{pengirim:x,penerima:y},
		success:function(result){
			$('#loader').hide();//HIDE LOADING
			$('#isipesan').html(result);			
			$('#isipesan').show();
		}
	});
}

function sendmessageviamodal(x,y){ //x=pengirim, y=penerima
	$('#loader').show();//LOADING
	//GET THE DATA
	var isi = $('#isibalasan').val();
	//KIRIM PESAN KE SERVER
	$.ajax({
		type:"POST",
		url:"http://localhost/2014-Project/SMAN01DEPOK-SOCIAL/index.php/all/kirim_pesan_via_modal",
		data:{isi:isi,pengirim:x,penerima:y},
		success:function(){ //SUCCESS
			$.ajax({ //REFRESH THREAD
				type:"GET",
				url:"http://localhost/2014-Project/SMAN01DEPOK-SOCIAL/index.php/all/isi_pesan_saya",
				data:{pengirim:y,penerima:x},
				success:function(result){
				$('#loader').hide();//HIDE LOADING
				$('#isipesan').html(result);			
				$('#isipesan').show();
			}
		});
		}
	});
}