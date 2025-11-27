$(document).ready(function() {
  // 1. Click to highlight
  $(".product").click(function() {
    $(this).toggleClass("highlight");
  });

  // 2. Hover to show details
  $(".product").hover(
    function() { $(this).find(".details").slideDown(); },
    function() { $(this).find(".details").slideUp(); }
  );

  // 3. Favorite toggle
  $(".fav").click(function(e) {
    e.stopPropagation();
    $(this).parent().toggleClass("selected");
  });

  // 4. Style discounted products
  $("[data-discount]").addClass("discount");

  // 5. Alert if out of stock
  $(".product").click(function() {
    if ($(this).data("stock") == 0) {
      alert("Sorry, this product is out of stock!");
    }
  });
});