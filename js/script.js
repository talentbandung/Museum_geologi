$('.page-scroll').on('click',function(e){
	
	//ambil laman 
	var tujuan = $(this).attr('href');
	//tangkap tujuan
	var elemen = $(tujuan);
	//pindah scroll
	$('body').animate({
	scrollTop: elemen.offset().top-50
	},1250,('easeInOutExpo'));
	e.preventDefault();
});
$(window).on('load',function(){
	$('.m1').last.addClass("mmuncul");
	console.log('yo');
});