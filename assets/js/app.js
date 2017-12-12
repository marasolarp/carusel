 $(document).ready(() => {
 	var imgItems= $('.slider li').length;//llamamos a elslider con los li para llamar las img que tenemos
 	var imgPos = 1;
 	//agregando la pagination
 	for (var i = 1; i <= imgItems; i++) {
 			$('.pagination').append('<li><span class=" fa fa-circle"></span></li>');//agregamos los iconos
 	}
 	//$('.img1, .img2, .img3, .img4').hidde(); //estoy ocultando las imagenes
 	//$('img5').show();//mostramos la primera imagen*/
 	$('.slider li').hide();//ociultamos todos los slide(imagenes)
 	$('.slider li:first').show();// mostramos la primera imagen
 	$('.pagination li:first').css({'color':'#c842a0'});//le dimos estilo al pimer items de la pagination.
 	// ejecutamos todas las funciones
 	//1era funcion le daremos click
 	$('.pagination li').click(pagination);
 	//al darle click a la flecha avanza las imagenes a la derecha
 	$('.right span').click(nextSlider); 
    //al darle click a la flecha avanza las imagenes a la izquierda
    $('.left span').click(prevSlider);
    
    setInterval(function(){
        nextSlider();
    },4000);

    //funciones
    function pagination(){
    	var paginationPos = $(this).index() + 1;// traera el valor de la posicion del elemento
    	$('.slider li').hide();//se ocultan las imagenes
    	$('.slider li:nth-child('+ paginationPos +')').fadeIn();// mostramos la imagen seleccionada
    	$('.pagination li').css({'color':'#858585'});// cada vez que hagamos click en pagination sera plomo
    	$(this).css({'color':'#c842a0'});//this hara que cada vez que toque cada uno cambiara su color
    
        imgPos = paginationPos
    }	
 	
    function nextSlider(){
        if(imgPos >= imgItems){
            imgPos = 1;
        }else {
            imgPos++;
        }
        $('.pagination li').css({'color':'#858585'});// cada vez que hagamos click en pagination sera plomo
        $('.pagination li:nth-child(' + imgPos + ')').css({'color':'#c842a0'});
        $('.slider li').hide();//se ocultan las imagenes
        $('.slider li:nth-child('+ imgPos +')').fadeIn();// mostramos la imagen seleccionada.
    }
    function prevSlider(){
        if(imgPos <= 1){
            imgPos = imgItems;
        }else {
            imgPos--;
        }
        $('.pagination li').css({'color':'#858585'});// cada vez que hagamos click en pagination sera plomo
        $('.pagination li:nth-child(' + imgPos + ')').css({'color':'#c842a0'});
        $('.slider li').hide();//se ocultan las imagenes
        $('.slider li:nth-child(' + imgPos + ')').fadeIn();// mostramos la imagen seleccionada.
    }
});




 	




