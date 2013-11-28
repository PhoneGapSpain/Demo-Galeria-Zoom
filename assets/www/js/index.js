/* CREACION DE LAS VARIABLES GLOBALES*/
var myScroll, heightCapa, estadoZoom, widthScreen, x, y;

/*ARRAY DONDE GUARDAMOS TODAS LAS FOTOS QUE QUEREMOS MOSTRAR QUE ESTAN ALOJADAS EN LA CARPETA IMG DEL PROYECTO*/
var fotos = new Array();
fotos[0] = "animal1.jpg";
fotos[1] = "animal2.jpg";
fotos[2] = "animal3.jpg";
fotos[3] = "animal4.jpg";
fotos[4] = "animal5.jpg";
fotos[5] = "animal6.jpg";
fotos[6] = "animal1.jpg";
fotos[7] = "animal2.jpg";
fotos[8] = "animal3.jpg";
fotos[9] = "animal4.jpg";
fotos[10] = "animal5.jpg";
fotos[11] = "animal6.jpg";
fotos[12] = "animal1.jpg";
fotos[13] = "animal2.jpg";
fotos[14] = "animal3.jpg";
fotos[15] = "animal4.jpg";
fotos[16] = "animal5.jpg";
fotos[17] = "animal6.jpg";
fotos[18] = "animal1.jpg";
fotos[19] = "animal2.jpg";
fotos[20] = "animal3.jpg";
fotos[21] = "animal4.jpg";
fotos[22] = "animal5.jpg";
fotos[23] = "animal6.jpg";
fotos[24] = "animal1.jpg";
fotos[25] = "animal2.jpg";
fotos[26] = "animal3.jpg";
fotos[27] = "animal4.jpg";
fotos[28] = "animal5.jpg";
fotos[29] = "animal6.jpg";

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
       
    },
    onDeviceReady: function() {
    	/*Creamos iscroll en la capa wrapper*/
    	myScroll = new iScroll('wrapper');
    	/*Guardamos en un variable todas la capas que debemos insertar dentro del scroll segun las imagenes que tenemos en el array*/
    	var contenidoGaleria="";
    	for(y=0; y<fotos.length; y++){
       		contenidoGaleria+='<div class="contenedorBoton"><div class="contenedorBlanco"><div onclick="abrir('+y+')" class="icono" style="background-image: url(img/'+fotos[y]+')" ></div></div></div>';
    	}
    	/*Rellenamos la capa contenedora de la galer’a con las imagenes que tenemos en la variable*/
    	x$('#scroller').html(contenidoGaleria);
    	calcular();
    }
};

/*CON ESTA FUNCION SABREMOS SI CAMBIAMOS DE ORIENTACION EL MOVIL Y PODREMOS RECARCULAR EL ALTO DE LAS MINIATURAS*/
x$(window).orientationchange(function(e) {
	x$('#cargando').css({ visibility: 'visible'});
	//Comprobamos si el zoom esta activado, y si lo esta lo ocultamos mientras aparece el gif cargando
	if(estadoZoom==1) x$('.md-modal').css({ visibility: 'hidden' });
	//Ocultamos la capa contenedora de las miniaturas
	x$('#wrapper').css({ visibility: 'hidden' });
	//Esperamos unos 300 ms para que al dispositivo le de tiempo girar la pantalla, y ejecutamos la funcion calcular
	setTimeout(calcular,300);
});

function calcular(){
	//Obtenemos el ancho del dispositivo
	widthScreen = innerWidth;
	x$('#zoom').css({ width: widthScreen+'px' });
	
	/*Calculamos el ancho que deben tener cada foto en miniatura segun el ancho de la pantalla para poder asignarle el mismo alto*/
	if(widthScreen>='960') heightCapa = (widthScreen / 10)-10;
	if(widthScreen>='768' && widthScreen<='959') heightCapa = (widthScreen / 8)-10;
	if(widthScreen<='767') heightCapa = (widthScreen / 4)-10;
	if(widthScreen>='480' && widthScreen<='767') heightCapa = (widthScreen / 6)-10;
	x$('.contenedorBoton .contenedorBlanco .icono').css({ height: heightCapa+'px' });	
	
	myScroll.refresh();	
	x$('#cargando').css({ visibility: 'hidden'});
	if(estadoZoom==1) x$('.md-modal').css({ visibility: 'visible' });
	x$('#wrapper').css({ visibility: 'visible' });	
	
}

function abrir(foto){
	estadoZoom=1;
	x$('#zoom').css({ background: 'url(img/'+fotos[foto]+') no-repeat center' });
	x$('.md-modal').css({ visibility: 'visible' });
}

function cerrar(){
	estadoZoom=0;
	x$('.md-modal').css({ visibility: 'hidden' });
}
