---
title: Definicion de Nodos
---

---

<h2>Definicion de Nodos</h2>

<center><img src="../static/img/bot22.png" width="1000"/></center>

<h3><img src="../static/img/skilltransfer.png"/>  <a>-SkillTransfer:</a><br/> Este estado está en proceso de creación y no se utilizará por el momento</h3>

<h3><img src="../static/img/message.png"/> <a>- Message:</a><br/> La respuesta de nuestro bot al recibir un mensaje</h3>
<br/>
<br/>

<center><img src="../static/img/botMess.png" width="1000"/></center>

<h3>Aqui estamos visualizando la pantalla del nodo de mensaje donde tenemos dos campos y un selector Vamos a explicar para que sirve</h3>

<h3><a>Name:</a><br/> Este es el nombre a identicar nuestro Nodo</h3>
<br/>
<h3><a>Message:</a><br/> Es donde vamos a estructurar nuestro mensaje</h3>
<br/>
<h3><a>Go Next:</a><br/> Es para dar una continuacion a otro mensaje u otra accion del bot</h3>

---

<h3><img src="../static/img/case.png"/> <a>- Case:</a><br/> Aqui es donde vamos agregar varias opciones para que nuestro cliente elija dependiendo su necesidad.</h3>

<h3><a>Por Ejemplo:</a></h3>

<center><img src="../static/img/casos.png" width="1000"/></center>

<h2>Definicion de los Campos</h2>

<h3><a>Nombre del caso:</a><br/>  Este Seria Nuestro Nombre a Identificar el Case</h3>
<h3><a>Titulo del caso:</a><br/>  Este Campo seria el titulo del mensaje para darle Una introduccion o informacion</h3>
<h3><a>Vifurcacion:</a><br/>  Es donde vamos a poder darle la opcion al cliente de tener varios opciones a eligir</h3>

---

<h3><img src="../static/img/connector.png"/> <a>- Conector:</a><br/> Este módulo está en proceso por el momento no lo vamos a utilizar.</h3>

<h3><img src="../static/img/five9chat.png"/> <a>- Five9Chat:</a><br/> En este parte es donde ya vamos hacer conexion con five9 como bien vemos nos pide que agregemos nuestra campaña y nuestro tenats y la parte de atributos es la parte donde le enviaremos a five9 parametros que mas adelante veran la explicacion de cada campo</h3>

<h3><a>Por Ejemplo:</a></h3>

<center><img src="../static/img/five9.png" width="1000" /></center>
<h2><a>Definicion de los Campos</a></h2>
<h3><a>Name:</a> <br/>Nuestro Nombre del modulo a identificar</h3>
<h3><a>Campaign:</a> <br/>Aqui debemos agregar nuestra campaña que tenemos en five9</h3>
<h3><a>Tenant:</a> <br/>El Tenants es el dominio que tenemos en five9.</h3>
<h3><a>Atributos:</a> Aqui podremos llamar  variables que ya tenemos definidas en nuestro flujo, 
podemos llamar variables que tenemos definidas en los input o en los case aqui le mostraremos un ejemplo<br/>
</h3>
<center><img src="../static/img/examplecase.png" width="1000"/></center>

<h3>Para llamar las variables debemos añadir una arroba"@" al principio y la siguiente al final por ejemplo: "@case.varible@" aqui lo que hacemos es llamar nuestro nodo y la variable que este dentro de ese nodo</h3>

<h3><img src="../static/img/inputico.png"/> <a>- Input:</a><br/> Es donde podemos almacenar variables para la captura de informacion estas variables la podemos llamar en el nodo de Five9
</h3>

<h3><a>Por Ejemplo:</a></h3>

<center><img src="../static/img/input.png" width="1000"/></center>

<h2><a>Definicion de los Campos</a></h2>

<h3><a>Name:</a><br/> Este sera el nombre a idetificar nuestro input</h3>
<h3><a>RegExp:</a><br/> Este campo es para agregar multiples opciones ya que para cuando nuestro cliente digite algo relcionado con la opciones implementadas en nuestra expresion regular lo va a redirecionar a ese skill relacionada a la  opcion digitada</h3>

<h3>Aqui podemos ver dos  opciones agregadas en nuestra expresion regular</h3>

<center><img src="../static/img/expreReg.png" width="1000" /></center>

<h3>Cuando nuestro cliente esta interectuando con nuestro Bot si el cliente escribe una de estas opciones en el chats se va dirigir a un skill encargado a esas dos areas que serian "Service y Support"</h3>

---
