// Q1 - Dynamic Greeting with jQuery
$(document).ready(function() {
  // 1. Time-based greeting on load
  const hour = new Date().getHours();
  let greeting = "";
  if (hour < 12) greeting = "Good Morning!";
  else if (hour < 17) greeting = "Good Afternoon!";
  else greeting = "Good Evening!";
  $("#greeting").text(greeting).css("color", "#2c3e50");

  // 2. Change to motivational quote
  $("#changeBtn").click(function() {
    const quotes = [
      "Stay hungry, stay foolish!",
      "The best way to predict future is to create it.",
      "Code is poetry."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $("#greeting").text(randomQuote).css("font-style", "italic");
  });

  // 3. Toggle welcome message
  $("#toggleBtn").click(function() {
    $("#message").toggle(800);
  });

  // 4. Alert on greeting click
  $("#greeting").click(function() {
    alert("Hello! Thanks for visiting us!");
  });
});