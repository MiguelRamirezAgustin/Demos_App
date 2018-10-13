// var alerta= require("./pagina1");



//EVENTOS DE LABEL 
$.lb_optionDialogo.addEventListener('click', function(e){
    var dialog= Alloy.createController('viewSelect').getView();
    dialog.open();
});

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




//evento del boton


/*vento de picker
function report(r){
	Ti.API.info("esta es la infromacion"+ r.value);
}*/


$.index.open();
