// ダブルサブミット対策:1度押したら2度目を押せなくする
$(function(){
	$("#submit").on("click",function(){
		$(this).css("cursor","default").css("opacity","0.2");
	});
});