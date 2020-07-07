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
                $("textarea").addClass("past") 
            }else if(blockHour ===  currentHour){
                $("textarea").removeClass("past").addClass("present")
                
            }else{
                $("textarea").removeClass("present").removeClass("past").addClass("future")
                //remove past and present and add future
            }
        })
        
    }
    hourUpdater()
    var interval = setInterval(hourUpdater, 15000);
    
    
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    
    
    
})