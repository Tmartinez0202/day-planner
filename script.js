$(document).ready(function(){

    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);

    })
    function hourUpdater() {
        var currentHour = moment().hours();
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            if(blockHour < currentHour){
              //class should be set as past  
            }else if(blockHour === currentHour){
                //remove past class then replace with present class

            }else{
                //remove past and present and add future
            }
        })

    }
    hourUpdater()
    var interval = setInterval(hourUpdater, 15000);

    
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    

    
})