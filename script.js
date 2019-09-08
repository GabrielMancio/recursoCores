var dir_img;
var formGroup;
var arrayRadio = new Array();
var a = 0;

$(document).ready(function(){
	dir_img = $('#recurso-cores-container button:first-child').attr('src');
	formGroup = $('#recurso-cores-container button:first-child').attr('value');
	load();
});

function load(){
	a = 0;
	arrayRadio = [];
	$('#recurso-cores-container form input').attr('name','');
	$('#recurso-cores-container form input').attr('id','');
	// $('#recurso-cores-container form label').attr('for','');

	if($('#'+formGroup+'').length){
		var qtdConjuntos = $('#'+formGroup+' .row .medidaHorizontal').length;
		for(var i = 1; i <= qtdConjuntos; i++){
			$('#'+formGroup+' .row div:nth-child('+i+') div input').attr('name','inpName_'+i);

			var qtd = $('#'+formGroup+' .row div:nth-child('+i+') div input').length;
			// console.log(formGroup+' : '+i+' '+qtd);
			
			for(var j = 1; j <= qtd+1; j++){
				a++;
				$('#'+formGroup+' .row div:nth-child('+i+') div:nth-child('+j+') input').attr('id','inpRC'+a);
				$('#'+formGroup+' .row div:nth-child('+i+') div:nth-child('+j+') label').attr('for','inpRC'+a);
			}
		}
	}
	$('#'+formGroup).css('display', 'block');
	carregaPrimeiraImagem();
}

function carregaPrimeiraImagem(){
	if($('#'+formGroup+'').length){
		var qtdConjuntos = $('#'+formGroup+' .row .medidaHorizontal').length;
		for(var i = 1; i <= qtdConjuntos; i++){
			$('#'+formGroup+' .row div:nth-child('+i+') div.inptRC-active  input').trigger('click');
		}
	}
}

$(document).on('click','#recurso-cores-container form input',function(){
	var name = $(this).attr('name');
	var nr = name.split('_');
	arrayRadio[nr[1]] = $(this).attr('class');
	nmImg = "";
	for(var i = 1; i < arrayRadio.length; i++){
		if(i == 1){
			nmImg += arrayRadio[i];
		}else{
			nmImg += "-"+arrayRadio[i];
		}
	}
	$("#imagem").attr('src',dir_img + nmImg +".jpg");
});

$(document).on('click', '.btnMovel', function(){
	dir_img = $(this).attr('src');
	formGroup = $(this).attr('value');
	$('.formGroup').css('display', 'none');
	load();
});

//script para zoom
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
