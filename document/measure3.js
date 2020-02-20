// 警告表示

//clickに0を代入
var click = 0;

//クリック時に呼ばれる
function warning(){
	//1回目のクリック時はclick=0
	if(click == 0){
		click = 1;
	}else{	//2回目以降はclick=1で警告表示
		alert("ただいま処理中です。\nこのままお待ちください。");
	}
}