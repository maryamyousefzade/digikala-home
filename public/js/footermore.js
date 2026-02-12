// $(".footer__about-more").click(function(){
//     let moreText = $(".footer__about");
//     if (moreText.css("max-height"=== "max-content")) {
//         moreText.css("max-height","9rem");
//         $(this).text("مشاهده بیشتر");
//     }else {
//         moreText.css("max-height","max-content");
//         $(this).text("بستن");
//     }
// });
$(".footer__about-more").click(function() {
    let moreText = $(".footer__about");
    moreText.toggleClass("expanded");
    if (moreText.hasClass("expanded")) {
         moreText.css("max-height","max-content");
        $(this).text("بستن");
    } else {
        $(this).text("مشاهده بیشتر");
         moreText.css("max-height","9rem");
    }
});
