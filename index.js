

$(".emoji").removeClass("box");


$(".happy").on("click", function(){

    $(".happy").addClass("box");

    $(".neutral").removeClass("box");
    $(".sad").removeClass("box");
});


$(".neutral").on("click", function(){
    $(".happy").removeClass("box");
    $(".sad").removeClass("box");
    $(".neutral").addClass("box");

 
});



$(".sad").on("click", function(){
    $(".happy").removeClass("box");
    $(".neutral").removeClass("box");
    $(".sad").addClass("box");
 

 
});



$("button").on("click", function(){

    const ratingValue = $(".box.active").text();

        if(ratingValue !== ""){
            $(".mains").addClass(".text-box");
       $(".main").html(`<div class="text-box"> <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${ratingValue}</strong>
        <p>Your feedback will help us enhance our customer support.</p> </div> `);

       }
});
