// 警告表示
$(function(){
	//ボタンがクリックされたときに以下の関数を呼ぶ
	$("#btn").on("click",function(){
	  //this="#btn"　htmlでvalue=0にしてあるので1回目のクリック時はtrue
		if($(this).val() == "0"){
			$(this).val("1");
		}else{	//2回目以降はvalue=1で警告表示
			$(function(){
				alert("ただいま処理中です。\nこのままお待ちください。");
			});
		}
	});
});