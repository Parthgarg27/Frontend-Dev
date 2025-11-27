// q3_faq.js
$(function() {
  $(".answer").hide();

  // 1. Click to toggle answer
  $(".question").click(function() {
    $(this).find(".answer").slideToggle();
  });

  // 2. Hover effect
  $(".question").hover(
    function() { $(this).css("color", "#007bff"); },
    function() { $(this).css("color", ""); }
  );

  // 3. Double click collapse all
  $(".question").dblclick(function() {
    $(".answer").slideUp();
  });
});