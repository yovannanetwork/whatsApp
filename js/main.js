//section busqueda
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

//section chat de mensajes
var chat = document.getElementById("chat");
var mensaje = document.getElementById("mensajes");

window.onload;
mensaje.addEventListener("keyup", sendMensaje);

function sendMensaje(evt){
	if(evt.keyCode==13){
		agregarMensaje();
	}
}
function agregarMensaje(){
	var texto = mensaje.value;
	var divAbuelo = document.createElement("div");
	var divPadre = document.createElement("div");
	var parrafo = document.createElement("p");
	var divHijo = document.createElement("div");
	
	chat.appendChild(divAbuelo);
	divAbuelo.appendChild(divPadre);
	divPadre.appendChild(divHijo);
	divPadre.appendChild(parrafo);
	divAbuelo.className = "w-message w-message-out";
	divPadre.className = "w-message-text";
	divHijo.className = "time";
	
	parrafo.textContent = texto;
	mensaje.focus();
	mensaje.value = "";
	
	var hora = new Date();
	var horaExacta = hora.getHours();
	var minuto = hora.getMinutes(); 
  
	if(minuto<10){
		minuto = "0"+minuto;
	}
	divHijo.innerHTML = horaExacta+":"+minuto;
	chat.scrollTop = chat.scrollHeight;
	
}