//logica
function chat(_nombre, _imagen){
	this.nombre = _nombre; 
	this.imageURL = _imagen;
	this.ultimoMensaje = ""; 
	this.horaUltimoMensaje = "";
	this.borrarMensaje = function(){
		
	};
}
var dataListaChat = [
	new chat("Aldo", "image/aldo.jpg", "hola como estas"),
	new chat("Gian", "image/gian.jpg", "donde andas"),
	new chat("Jose", "image/jose.jpg", "jajja seee"),
	new chat("CodeAcademy", "image/logocodeacademy.png", "vamos bien"),
];

//parte visual
var liLista = null;
function init(){
	inicioChatLista();
}
function inicioChatLista(){
	var liListaChat = document.getElementById("lista-chats");
	for(var i in dataListaChat){
		var htmlChatItem = '<li draggable="true" ondragstar="inicio()">'+
		   '<div class="avatar">'+
		  		'<img src="'+dataListaChat[i].imageURL+'" alt="" class="wh-44">'+
		  		'<h4 class="w-contact-name">'+dataListaChat[i].nombre+'</h4>'+
		  		'<p class="w-last-message" id="mensaje">'+dataListaChat[i].ultimoMensaje+'</p>'+
		  	'</div>'+
			'<div class="time" id="hora">'+dataListaChat[i].horaUltimoMensaje+'</div>'+
	  	 '</li>';
		dataListaChat[i].borrarMensaje();
		liListaChat.innerHTML += htmlChatItem;
	}
	initChatList();
}
 // actualizar el contacto el el header

function initChatList(){
	var listaChats = document.getElementById("lista-chats");
	var arrListItems = (listaChats.getElementsByTagName("li"));
	console.log(typeof arrListItems);
	for(var i=0; i<arrListItems.length; i++){
		/*arrListItems[i].onclick = function(){
			alert("click");
		};
		arrListItems[i].addEventListener("click", function(){
			alert("click listeer");
		})*/
		
		arrListItems[i].addEventListener("click", onChatItemClick );
	}
}
//evento click a todo el div 
function onChatItemClick(evt){
	//console.log(evt.currentTarget);
	var contactName = (evt.currentTarget.getElementsByClassName("w-contact-name")[0].textContent);
	var imgURL = (evt.currentTarget.getElementsByClassName("wh-44")[0].src);
	console.log("click");
	actualizarCabeceraChat(contactName, imgURL, "conectado");
	searchContact();
}
//teclear enter
function onMensajeKey(evt){
	
	if(evt.keyCode == 13){ 
		var elInputMensajes = document.getElementById("mensajes");
		crearMensaje(elInputMensajes.value);
		crearChat(elInputMensajes.value);
		elInputMensajes.value = "";
	}	
}
// 1 funcion crear mensaje
function crearMensaje(_mensaje){
	
	var htmlMensajeIn = '<div class="w-message w-message-in">'+
	  							'<div class="w-message-text">'+
	  								'<h5 class="yellow-1">Aldo Alfaro</h5>'+
	  								'<p>Ya ya ya, hacia mucho calor que más</p>'+
	  								'<div class="time">11:25</div>'+
	  							'</div>'+
	  						'</div>';
	var hora = new Date();
	var htmlMensajeOut = '<div class="w-message w-message-out">'+
	  							'<div class="w-message-text">'+
	  								'<p>'+_mensaje+'</p>'+
	  								'<div class="time">'+hora.getHours()+':'+hora.getMinutes()+'</div>'+
	  							'</div>'+
	  						'</div>';
	var mensaje = document.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML = _mensaje;
	
	var elChat = document.getElementById("chat");
	elChat.innerHTML += htmlMensajeOut;
	elChat.scrollTop = elChat.scrollHeight;
}

//lista de contacto dinamica
function crearChat(_mensaje){
	var hora = new Date();
	var elListaChats = document.getElementById("lista-chats");
	if(liLista == null){ 
	liLista = document.createElement("li");
	var htmlChatItem =
		  					'<div class="avatar">'+
		  						'<img src="image/logocodeacademy.png" alt="" class="wh-44">'+
		  						'<h4 class="w-contact-name">Laboratoria Perú</h4>'+
		  						'<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'+
		  					'</div>'+
							'<div class="time" id="hora">'+hora.getHours()+':'+hora.getMinutes()+'</div>';
	liLista.innerHTML = htmlChatItem;
	elListaChats.insertBefore(liLista, elListaChats.childNodes[0]);
	//elListaChats.innerHTML += htmlChatItem;
	}
	initChatList();
}

function actualizarCabeceraChat(_contactName, _imageURL, _estado){
	var chatHeader = document.getElementById("chat-header");
	chatHeader.getElementsByClassName("w-contact-name")[0].innerHTML = _contactName;
	chatHeader.getElementsByClassName("w-users-messages")[0].innerHTML = _estado;
	chatHeader.getElementsByTagName("img")[0].src = _imageURL;
}
//Limpiar ventana chats
function limpiarVentanaChat(){
	var chatMensaje = document.getElementById("chat");
	chatMensaje.addEventListener("click", clearWindow);
}

// El buscador de contactos
function searchContact(){ 
var search = document.getElementById("search");
var contacto = document.getElementsByTagName("h4");
var forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(evt){
  var choice = this.value;

  forEach.call(contacto, function(evt){
      if (evt.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
          evt.parentNode.parentNode.style.display = "none";   
      else
         evt.parentNode.parentNode.style.display = "block";        
  });
}, 
false);
}