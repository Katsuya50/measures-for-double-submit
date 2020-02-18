// 警告表示
var click = 0;

function warning(){
	if(click == 0){
		click = 1;
	}else{
		alert("ただいま処理中です。\nこのままお待ちください。")
		return false;
	}
}