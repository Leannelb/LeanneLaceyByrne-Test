function initialiseDataTables() {
    $('.table').each(function () {
        var columnObject = {
            "columns": []
        };
        if ($(this).prop('id') === 'securityUserSecurityGroupTable'){
            columnObject.pageLength = 25;
        }
        var isDataTable = false;
        $(this).find('th').each(function(){
            var searchable = false;
            var orderable = false;
            if ($(this).hasClass('column-searchable')){
                searchable = true;
            }
            if ($(this).hasClass('column-orderable')){
                orderable = true;
            }
            isDataTable = isDataTable || searchable || orderable;
            columnObject.columns.push({"searchable": searchable, "orderable": orderable});
        });
        if (isDataTable) {
            $(this).dataTable(columnObject);
        }
    });
}
