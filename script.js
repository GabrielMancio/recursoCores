var dir_img;
var conjuntoA;
var conjuntoB;
var conjuntoC;
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
	var c1 = $('[name=c1]:checked').val();
	var c2 = $('[name=c2]:checked').val();
	var c3 = $('[name=c3]:checked').val();
	$("#imagem").attr('src',dir_img+c1+"-"+c2+"-"+c3+".jpg");
});
$(document).ready(function(){ 
	dir_img = $('#movelAtivo').attr('src');
	conjuntoA = $('#movelAtivo').attr("title1");
	conjuntoB = $('#movelAtivo').attr("title2");
	conjuntoC = $('#movelAtivo').attr("title3");
	startRecurso();
});
$(document).on('click', '.btnMovel', function(){
	dir_img = $(this).attr('src');
	conjuntoA = $(this).attr("title1");
	conjuntoB = $(this).attr("title2");
	conjuntoC = $(this).attr("title3");
	startRecurso();
});
function startRecurso(){
	$(this).trigger('click');
	$(this).trigger('click');
	$(this).trigger('click');
	var c1 = $('#g1').val();
	var c2 = $('#f1').val();
	var c3 = $('#h1').val();
	$("#imagem").attr('src',dir_img+c1+"-"+c2+"-"+c3+".jpg");
	$("div#title1 p").html(conjuntoA);
	$("div#title2 p").html(conjuntoB);
	$("div#title3 p").html(conjuntoC);
}
