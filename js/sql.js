$(document).ready(function () {
  /*  $("#advice-submit").keyup (function () {
        ajax_search();
    })

    function ajax_search () {
       $.post ("search_books.php" , { search_term : $("#name") } , function (data) { $("#advice-thanks").html(data); } )
    }
*/

    $("#advice-submit").click(function () {
        //var name = $("#advice-name").serialize();

        var name = $("#film-name").val();
        var checkiq = Math.round(parseInt($(".adviser-block").children(".check-iq").children(".check-iq__bar-wrapper").children('.check-iq__circle').css("left"), 10)/316*200);

        $.ajax({
            url: './advice-submit.php',
            type: 'POST',
            data: {name, checkiq},
            success: function (data) {
                //alert(data);
            }
        });
    });


})