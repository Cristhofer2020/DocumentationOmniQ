---
title: Creacion de los Bot`s
---

---

<h2>Crear y editar</h2>

<h3>Aquí podemos hacer clic en este botón donde nos da la opción de crear nuestro Bot`s donde se nos presentará la siguiente pantalla</h3>

<center><img src="../static/img/createbot2.png" width="900" height="500"/></center>

<h3>en esta pantalla podremos agregar solo el nombre de nuestro Bot`s luego pasamos a editarlo donde se nos presentará la siguiente pantalla</h3>

<center><img src="../static/img/createbot.png" width="900" height="500"/></center>

---

<h2>Barra de herramientas</h2>

<h3>Aquí tenemos todo lo necesario para la construcción del flujo y para la configuración de cada paso dentro del flujo.</h3>

<center><img src="../static/img/bot2.png" width="900" /></center>

<h3>Área de construcción del flujo</h3>

<center><img src="../static/img/bot3.png" width="900"/></center>

---

<h2>Definición de los módulos</h2>

<center><img src="../static/img/bot22.png" width="900"/></center>

<h3><img src="../static/img/skilltransfer.png"/>  -SkillTransfer: Este estado está en proceso de creación y no se utilizará por el momento</h3>

<h3><img src="../static/img/message.png"/> - Message: La respuesta de nuestro bot al recibir un mensaje</h3>

<h3><img src="../static/img/case.png"/> -Case: Es donde vamos a mostrar una opción a nuestro cliente donde podemos poner varios mensajes y cada mensaje trae una respuesta al cliente.</h3>

<h3>Por ejemplo:</h3>
<center><img src="../static/img/casos.png" width="900"/></center>

---

<h2>Definicion de los Campos</h2>

<h3>Nombre del caso:<br/>  Este Seria Nuestro Nombre a Identificar el Case</h3>
<h3>Titulo del caso:<br/>  Este Campo seria el titulo del mensaje para darle Una introduccion o informacion</h3>
<h3>Ramas:<br/>  Es donde vamos a enlazar los mensajes para añadir varias opciones al cliente a seleccionar</h3>

---

<h3><img src="../static/img/connector.png"/> -Conector: Este módulo está en proceso por el momento no lo vamos a utilizar.</h3>

<h3><img src="../static/img/five9chat.png"/> - Five9Chat: Este módulo se utilizará para la conexión con Five9 donde tenemos que pasar la campaña que queremos recibir en five9 también debemos añadir los Inquilinos que sería en este caso nuestro cliente.</h3>

<h3>Por ejemplo:</h3>

<center><img src="../static/img/five9.png" width="900" height="500"/></center>
<h2>Definicion de los Campos</h2>
<h3>Name: <br/>Nuestro Nombre del modulo a identificar</h3>
<h3>Campaign: <br/>Esta seria la campaña que queremos recibir los chats recibidos</h3>
<h3>Tenant: <br/>El Tenants es el dominio que tenemos en five9.</h3>
<h3>Atributos: <br/>Este tema es para llamar variables que tenemos creadas en los input</h3>

<h3><img src="../static/img/inputico.png"/> - Input: Es donde vamos a guardar la información y esta información se pasará a una variable donde podremos llamarla en el módulo Five9Chat.
</h3>

<h3>Por ejemplo::</h3>

<center><img src="../static/img/input.png" width="900"/></center>
<h2>Definicion de los Campos</h2>

<h3>RegExp: Aqui podemos poner varibles que deseamos enviar a Five9 pero para que five9 las reciba debemos llamarlas en el Estado de Five9 en la parte de atributos</h3>

---
