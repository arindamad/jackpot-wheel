$(document).ready(function(){

    var totalDiv = 12;
   
    $(".spinnerImg").on("click", function(){
        toBetrns = 0;
        var betweenAngle =  360 / 12;
        var ranNum = Math.floor(Math.random() * totalDiv);

        var existingRotate = $(".spinnerImg")[0].style.transform.split("(")[1].split("d")[0];
        existingRotate =  parseInt(existingRotate); 
        console.log(existingRotate, ranNum);
        if(existingRotate !==0){
            var toBeRotate =parseInt(existingRotate) % 360 - 15;
            console.log(toBeRotate);
            toBeRotate = existingRotate + (360*7) - (360 + toBeRotate);


            var sum = 0;
            
        }else{
            var toBeRotate = (360*7);  

            var sum = (betweenAngle/2);

        }       
        
        // ranNum = 0;

        var toBetrns =  (ranNum * betweenAngle) - sum;
        $(this).css({"transform": "rotate("+( toBeRotate - toBetrns)+"deg)"});
    });
});