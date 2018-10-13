// var alerta= require("./pagina1");

function evento(){
  alert("prueba");
};


//EVENTOS DE LABEL 
$.lb_imageview.addEventListener('click', function(e){
    var crea = Alloy.createController('imageview').getView();
    crea.open();
});

$.lb_lisview.addEventListener('click', function(e){
   var siguiente= Alloy.createController('lisview').getView();
   siguiente.open();
});

$.lb_progresbar.addEventListener('click', function(e){
    var progres= Alloy.createController('progressBar').getView();
    progres.open();
});

$.lb_switch.addEventListener('click', function(e){
    var swich= Alloy.createController('switchs').getView();
    swich.open();
});





var opts = {
  cancel: 2,
  options: ['Confirmar', 'Ayuda', 'Cancelar'],
  selectedIndex: 2,
  destructive: 0,
  title: 'opciones'
};

$.lb_uno.addEventListener('click', function(e){
  var dialog = Ti.UI.createOptionDialog(opts).show();
});


var label = Titanium.UI.createLabel({
    text:"Your choice will appear here",
    width:"auto",
    height:"auto"
});


var colorDialog = Titanium.UI.createOptionDialog({
    title:"Cual es tu color favorito?",
    options: ["Amarillo","Rosa","Ninguno"],
    cancel:2
});

var optionButton = Titanium.UI.createButton({
    title:"Option Dialog!",
    height:48,
    width:120,
    bottom:12
});

colorDialog.addEventListener("click",function(e){
    if(e.index < 2){
        if(e.index === 0){
         $.btn_color.style.setBackgroundColor=("red");
        }else if(e.index === 1){
          $.btn_color.style.setBorderColor=('red');
        }
    }else{
        label.text = "Aww shucks...";
    }

});

//evento del boton
$.lb_dos.addEventListener("click",function(e){
    colorDialog.show();
});


/*vento de picker
function report(r){
	Ti.API.info("esta es la infromacion"+ r.value);
}*/


$.index.open();
