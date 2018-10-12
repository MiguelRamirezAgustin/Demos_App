function showIndicator(e){
	$.progress_indicador.show();
	var value=0;
	setInterval(function(){
		if(value>10){
			return;
		}
		$.progress_indicador.value=value;
		value++;
	}, 200);
	setTimeout(function(){
		$.progress_indicador.hide();
	},3000);
}

