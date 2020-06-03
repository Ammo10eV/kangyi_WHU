/**
 * 
 */
myChart.showLoading({
    text : 'bar',
    effect : 'bar',
    textStyle : {
        fontSize : 20
    }
});
var worker= new Worker('social.js');

worker.onmessage=function (event){ 
	if(event.data==1){ 
		myChart.hideLoading();
	}
}