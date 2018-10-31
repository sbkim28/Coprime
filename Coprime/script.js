function btn_click(){
	var input = document.getElementById("input_number").value;
	var result = document.getElementById("p_result");
	if(input == "" || isNaN(input)){
		result.innerText = "숫자가 아닙니다."
	}

	var pairs = []
	var _tmp = [];

	var count = 0;
	var range = Math.round(input);
	for(var i = 1;i<= range;++i){
		for(var j=1;j<=range;++j){
			if(isCoprime(i,j)){
				++count;
				_tmp.push("[" + i +", " + j + "]")
			} 
		}
		pairs.push(_tmp.join(", "));
		_tmp = []
	}

	result.innerText = count + "\n\n" + pairs.join("\n");
}

function isCoprime(a,b){
	return gcd(a, b) == 1;
}

function gcd(a,b){
	var c;
	while(b != 0){
		c = a % b;
		a = b;
		b = c;
	}
	return a;
}