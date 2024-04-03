let bg = $("#particles-js");

$(document).keydown(function(event){
    $(bg).css("background-color", getRandomColor);

});

$(".img").on("click", function(){
    let name = $(this).attr("name");
    const initale = name.charAt(0).toUpperCase();
    const nameCapitalize = initale + name.slice(1);
    $("#titre").text(nameCapitalize);

    $(this).toggleClass("flash");

    let music = $(this).attr("name");
    music +=".mp3";

    playMusic(music);

})

function playMusic(music){
    let audio = new Audio(music);
    audio.play(); 
}

$("#btn").click(function() {
    let artiste = $("#input").val();
    artiste+=".mp3"
    playMusic(artiste);
})

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color ="#";

    for(let i=0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}
