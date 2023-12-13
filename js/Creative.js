$(document).ready(function() {

  // Circle one

  $(".One").click(function() {
    $(this).toggleClass("PanelOn");
    $(".Header").toggleClass("HeaderSize");
    $(".Paragraph").toggleClass("ParagraphSize");
  });

  $(".Two").click(function() {
    $(this).toggleClass("PanelOn");
    $(".Background").toggleClass("BackgroundColor");
    $(".Header").toggleClass("HeaderColor");
    $(".Paragraph").toggleClass("ParagraphColor");
  });

  $(".Three").click(function() {
    $(this).toggleClass("PanelOn");
    $(".Header").toggleClass("HeaderWeight");
  });

  $(".Four").click(function() {
    $(this).toggleClass("PanelOn");
    $(".Header").toggleClass("HeaderAlign");
    $(".Paragraph").toggleClass("ParagraphAlign");
  });

  $(".Five").click(function() {
    $(this).toggleClass("PanelOn");
    $(".Paragraph").toggleClass("ParagraphLine");
  });

  $(".Six").click(function() {
    $(this).toggleClass("PanelOn");
    $(".Header").toggleClass("HeaderSpacing");
    $(".Paragraph").toggleClass("ParagraphSpacing");
  });

});