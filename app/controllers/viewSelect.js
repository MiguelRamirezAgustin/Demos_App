// Arguments passed into this controller can be accessed via the `$.args` object directly or:

var label = Titanium.UI.createLabel({
    text:"Seleccionado....",
    width:"auto",
    height:"auto"
});


var colorDialog = Titanium.UI.createOptionDialog({
    title:"Cual es tu color favorito?",
    options: ["Amarillo","Rosa","Ninguno"],
    cancel:2
});


var view1= Ti.UI.createView({
	height:"100%",
	width:"100%",
	backgroundColor:"red"
});
var view2= Ti.UI.createView({
	height:"100%",
	width:"100%",
	backgroundColor:"blue"
});


colorDialog.addEventListener("click",function(e){
    if(e.index < 2){
        if(e.index === 0){
        	$.container.add($.view1);
        }else if(e.index === 1){
        	$.parent.remove($.view2);
        }
    }else{
        label.text = ".......";
    }
});

$.Dialogo.addEventListener("click",function(e){
    colorDialog.show();
});


var args = $.args;
