// ボタンの無効化
$(function(){
	$("#btn").on("click",function(){
		$(this).prop("disabled",true).css("cursor","default").css("opacity","0.2");
	});
});