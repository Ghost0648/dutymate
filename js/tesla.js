(function() {
	var index = (~~(Date.now()/(60 * 60 * 24 * 1000))+1)%8;
	var mates = $(".mate-box>.mate");
	var duty = mates.eq(index);
	duty.find("span").addClass("duty-people");
	// console.log(index, duty, mates)
}());

(function(){
 	var date = new Date();
 	document.getElementById("now-year").innerHTML=date.getFullYear();
	document.getElementById("now-month").innerHTML=date.getMonth()+1;
	document.getElementById("now-day").innerHTML=date.getDate();
	var weekdayChinese = ["日", "一", "二", "三", "四", "五", "六"];
	document.getElementById("now-weekday").innerHTML=weekdayChinese[date.getDay()];
}());

(function(){
	// 用作突出显示当天星期几
	var date = new Date();

}());


(function(){
	// 显示当前第几周
	var index = ~~(   (~~(Date.now() / (60 * 60 * 24 * 1000))-3)  /7 )-2407
	document.getElementById("work-week").innerHTML=index;
}());
