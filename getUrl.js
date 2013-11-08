window.onload = function () {
    var inputUrl = undefined;

    $('#urlsubmitbutton').click(function () {
        inputUrl = $('#urltextarea').val();
    });

    if (inputUrl !== undefined) {
        $('#test').append(
            $('<iframe>').attr('src',inputUrl)
        );
    }
};
