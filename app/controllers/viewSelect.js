// Arguments passed into this controller can be accessed via the `$.args` object directly or:


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
        	$.parent.add($.view1);
            $.parent.remove($.view2); 
         //$.btn_color.style.setBackgroundColor=("red");
        }else if(e.index === 1){
          $.btn_color.style.setBorderColor=('red');
        }
    }else{
        label.text = "Aww shucks...";
    }
});


$.Dialogo.addEventListener("click",function(e){
    colorDialog.show();
});


var args = $.args;
