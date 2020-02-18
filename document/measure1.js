// ダブルサブミット対策:1度押したら2度目を押せなくする
function submitted(buttonObj){
	buttonObj.disabled = true;
	var obj = document.getElementById("submit");
	obj.style.cursor = "default";
	obj.style.opacity= 0.2;
}