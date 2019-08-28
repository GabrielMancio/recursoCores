var dir_img;
var formGroup;
var arrayRadio = new Array();

$(document).on('click', 'img#btnFullScreen', function(){
	$('div#divImagem').addClass('fullscreen');
	setTimeout(function(){
		$('img#imagem').addClass('imgfullscreen');
	},100);	
	$('img#btnFullScreen').css('display', 'none');
	$('img#btnExitFullScreen').css('display', 'block');
	$('button.btnMovel').css('display', 'none');
});
$(document).on('click', 'img#btnExitFullScreen', function(){
		$('img#imagem').removeClass('imgfullscreen');	
	setTimeout(function(){
		$('div#divImagem').removeClass('fullscreen');
	},500);
	$('img#btnFullScreen').css('display', 'block');
	$('img#btnExitFullScreen').css('display', 'none');
	$('button.btnMovel').css('display', 'inline-block');
});

$(document).on('click','input',function(){
	for(var i = 0; i < 25; i++){
		if($('[name=c'+i+']').length){
			arrayRadio[i] = $('[name=c'+i+']:checked').val();
		}
	}
	var nmImg = '';
	for(var i = 1; i < arrayRadio.length; i++){
		if(i==1){
			nmImg += arrayRadio[i];
		}else{
			nmImg += '-'+arrayRadio[i];
		}
	}
	$("#imagem").attr('src',dir_img + nmImg +".jpg");
});
$(document).ready(function(){ 
	dir_img = $('#recursoAtivo').attr('src');
	formGroup = $('#recursoAtivo').attr('value');
	$('#'+formGroup).css('display', 'block');
	startRecurso();
});
$(document).on('click', '.btnMovel', function(){
	dir_img = $(this).attr('src');
	formGroup = $(this).attr('value');
	$('.formGroup').css('display', 'none');
	$('#'+formGroup).css('display', 'block');
	startRecurso();
});
function startRecurso(){
	$('.radioactive').trigger('click');
	for(var i = 0; i < 25; i++){
		if($('[name=c'+i+']').length){
			arrayRadio[i] = $('[name=c'+i+']:checked').val();
		}
	}
	var nmImg = '';
	for(var i = 1; i < arrayRadio.length; i++){
		if(i==1){
			nmImg += arrayRadio[i];
		}else{
			nmImg += '-'+arrayRadio[i];
		}
	}
	$("#imagem").attr('src',dir_img + nmImg +".jpg");
}
