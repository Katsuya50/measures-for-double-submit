// ボタンの無効化
function submitted(buttonObj){
	//ボタンを無効化
	buttonObj.disabled = true;
	
	//以下は無効化されたように見せるデザイン変更
	//カーソルを(ポインターから)デフォルトに変更
	buttonObj.style.cursor = "default";
	//透明度を0.2に変更
	buttonObj.style.opacity= 0.2;
}