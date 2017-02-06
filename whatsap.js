//logica










//parte visual
function onMensajeKey(evt){
	
	if(evt.keyCode == 13){ 
		var elInputMensajes = document.getElementById("mensajes");
		crearMensaje(elInputMensajes.value);
		crearChat(elInputMensajes.value);
		elInputMensajes.value = "";
	}	
}
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
	var elConversacion = document.getElementById("conversacion");
	elConversacion.innerHTML += htmlMensajeOut;
}


function crearLista(){
	
}
function crearChat(_mensaje){
	var elListaChats = document.getElementById("lista-chats");
	var liLista = document.createElement("li");
	var htmlChatItem =
		  					'<div class="avatar">'+
		  						'<img src="image/logocodeacademy.png" alt="" class="wh-44">'+
		  						'<h4 class="w-contact-name">Laboratoria Perú</h4>'+
		  						'<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'+
		  					'</div>'+
							'<div class="time" id="hora">14:27</div>';
	liLista.innerHTML = htmlChatItem;
	elListaChats.insertBefore(liLista, elListaChats.childNodes[0]);
	//elListaChats.innerHTML += htmlChatItem;
}

function actualizarCabeceraChat(){
	
}