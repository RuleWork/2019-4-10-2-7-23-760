module.exports = function main(inputs) {
	//distance:7,parkTime:10
	var distance = inputs.distance;
	var parkTime = inputs.parkTime;
	
	var parkCost = parkTime*0.25;
	if(distance<=2 && distance>0){
		return Math.round(6+parkCost);
	}else if(distance>2 && distance <=8){
		return Math.round(6+(distance-2)*0.8+parkCost);
	}else if(distance>8){
		return Math.round(6+parkCost+(distance-8)*1.2+4.8);
	}
};
