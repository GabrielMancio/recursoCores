var dir_img = 'http://www.worksolution.ws/wp-content/themes/struck/images/executivaWs1000/';
$(document).on('click', 'img#btnFullScreen', function(){
	$('div#divImagem').addClass('fullscreen');
	setTimeout(function(){
		$('img#imagem').addClass('imgfullscreen');
	},100);	
	$('img#btnFullScreen').css('display', 'none');
	$('img#btnExitFullScreen').css('display', 'block');
});
$(document).on('click', 'img#btnExitFullScreen', function(){
		$('img#imagem').removeClass('imgfullscreen');	
	setTimeout(function(){
		$('div#divImagem').removeClass('fullscreen');
	},500);
	$('img#btnFullScreen').css('display', 'block');
	$('img#btnExitFullScreen').css('display', 'none');
});

$(document).on('click','input',function(){
	var c1 = $('[name=c1]:checked').val();
	var c2 = $('[name=c2]:checked').val();
	var c3 = $('[name=c3]:checked').val();
	$("#imagem").attr('src',dir_img+c1+"-"+c2+"-"+c3+".jpg");
});
$(document).ready(function(){ 
	$('#g1').trigger('click');
	$('#f1').trigger('click');
	$('#h1').trigger('click');
	var c1 = $('#g1').val();
	var c2 = $('#f1').val();
	var c3 = $('#h1').val();
	$("#imagem").attr('src',dir_img+c1+"-"+c2+"-"+c3+".jpg");
});