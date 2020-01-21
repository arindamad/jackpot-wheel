$(document).ready(function(){

    var totalDiv = 12;
   
    $(".spinnerImg").on("click", function(){
        toBetrns = 0;
        var betweenAngle =  360 / 12;
        var ranNum = Math.floor(Math.random() * totalDiv);
        console.log(ranNum);
        // ranNum = 0;

        var toBetrns =  (ranNum * betweenAngle) - (betweenAngle/2);

        $(this).css({"transform": "rotate("+((360*5)- toBetrns)+"deg)"});
    });
});