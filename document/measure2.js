// ボタンの無効化
$(function(){
	//ボタンがクリックされたときに以下の関数を呼ぶ
	$("#btn").on("click",function(){
									//ここから右は無効化に見せるデザイン変更
		//this="#btn"   無効化			カーソルをデフォルトに変更		透明度を0.2に変更
		$(this).prop("disabled",true).css("cursor","default").css("opacity","0.2");
	});
});