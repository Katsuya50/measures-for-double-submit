// ボタンの無効化
function submitted(buttonObj){
	buttonObj.disabled = true;
	var obj = document.getElementById("btn");
	obj.style.cursor = "default";
	obj.style.opacity= 0.2;
}