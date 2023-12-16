$("#hamburger").on("click",()=>{
    $(".tabs").removeClass("hidden");
    $("#hamburger").addClass("hidden");
    $("#close").removeClass("hidden");
});

$("#close").on("click",()=>{
    $(".tabs").addClass("hidden");
    $("#hamburger").removeClass("hidden");
    $("#close").addClass("hidden");
});

$("nav .tabs a").attr("target","_blank");
$("footer .left a").attr("target","_blank");

$(window).on("resize",()=>{
    if (window.innerWidth <= 500){
        $(".hero .left").removeClass("half-width");
    }
    else{
        $(".hero .left").addClass("half-width");
    }
})

