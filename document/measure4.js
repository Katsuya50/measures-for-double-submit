// 警告表示
$(function(){
	$("#btn").on("click",function(){
		if($(this).val() == "0"){
			$(this).val("1");
		}else{
			$(function(){
				alert("ただいま処理中です。\nこのままお待ちください。");
			});
		}
	});
});