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
            console.log("blockHour", blockHour);
            console.log("currentHour", currentHour);
            if(blockHour < currentHour){
                console.log(("past"))
                $(this).addClass("past") 
            }else if(blockHour ===  currentHour){
                console.log("present")
                $(this).removeClass("past").addClass("present")
                
            }else{
                console.log("future");
                $(this).removeClass("present").removeClass("past").addClass("future")
            
            }
        })
        
    }
    hourUpdater()
    var interval = setInterval(hourUpdater, 15000);
    
    
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    $("#hour-19 .description").val(localStorage.getItem("hour-19"));
    $("#hour-20 .description").val(localStorage.getItem("hour-20"));
    $("#hour-21 .description").val(localStorage.getItem("hour-21"));
    
    
    
})