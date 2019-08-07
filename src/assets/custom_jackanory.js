if (typeof jQuery !== 'undefined') {
    (function ($) {
        $(document).ready(function () {
            initialiseDataTables();
            initDatePickers();

            // Javascript to enable link to tab
            var prefix = 'tab_';
            var hash = document.location.hash;
            if (hash) {
                $('.nav-tabs a[href='+hash.replace(prefix,"")+']').tab('show');
            }

            // Change hash for page-reload
            $('.nav-tabs a').on('shown', function (e) {
                window.location.hash = e.target.hash.replace("#", "#" + prefix);
            })
        });
    })(jQuery);
}

function toggleClass(event, toogleClass) {
    event.preventDefault();
    $('.' + toogleClass).toggle();
}
