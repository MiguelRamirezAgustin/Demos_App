// Arguments passed into this controller can be accessed via the `$.args` object directly or:

var label = Titanium.UI.createLabel({
    text:"Seleccionado....",
    width:"auto",
    height:"auto"
});


var colorDialog = Titanium.UI.createOptionDialog({
    title:"Cual es tu color favorito?",
    options: ["Amarillo","Rojo",'Azul','Verde','Naranja',"Ninguno"],
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

//mandar a llamar otra vista dependiendo la opcion del optiondialogo
// colorDialog.addEventListener("click",function(e){
//     if(e.index == 0){
//             $.parent.add(view1);
//             $.parent.remove(view2);
//         }else if(e.index == 1){
//             $.parent.remove(view2);
//             $.parent.add(view1);
//         }else if(e.index == 2){
//         	$.container.setBackgroundColor('pink');
//         }
// });


//cambiar de color una vista
colorDialog.addEventListener("click",function(e){
    if(e.index == 0){
            $.container.setBackgroundColor('yellow');
        }else if(e.index == 1){
            $.container.setBackgroundColor('red');
        }else if(e.index == 2){
        	$.container.setBackgroundColor('blue');
        }else if(e.index==3){
            $.container.setBackgroundColor('#00CC33');
        }else if(e.index==4){
            $.container.setBackgroundColor('Orange');
        }else if(e.index==5){
            alert("No se cambio el color")
        }
});


$.Dialogo.addEventListener("click",function(e){
    colorDialog.show();
});


var args = $.args;
