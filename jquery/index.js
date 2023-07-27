$("h1").addClass("title padding"); //"$" this sigh is basically the bunch of document.queryselector
// $("h1").removeClass("title"); // inn  this  we cna remove the claass by using jquery
$("button").html("<em>feeling loved</em>"); // using"html" tag we can change  inside the text //////And "text" tag is also use  to change the text but the difference is  in  "text"  whatever is wriiten inside the text all are print but in"html taG not are print exampe in code
$("a").attr("href", "https://www.w3schools.com/jquery/html_addclass.asp");

$("input").keypress(function(event) {
    $("h1").html(event.key);
});