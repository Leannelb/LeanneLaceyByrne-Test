
function selectSiteHandler() {

    var selection = siteScreens.getSelection();

    var selectedItem;
    for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        if (item.row != null && item.column != null) {
            selectionItem = siteScreens_data.getFormattedValue(item.row, item.column);

        } else if (item.row != null) {
            selectionItem = siteScreens_data.getFormattedValue(item.row, 0);

        } else if (item.column != null) {
            selectionItem = siteScreens_data.getFormattedValue(0, item.column);

        }
    }

    window.location.href=sitesLink + "/" + selectionItem

}

function selectComponentDomain(){
    var selection = componentDomain.getSelection();
    var selectedItem;

    for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        if (item.row != null && item.column != null) {
            selectedItem = componentDomain_data.getFormattedValue(item.row, item.column);

        } else if (item.row != null) {
            selectedItem = componentDomain_data.getFormattedValue(item.row, 0);

        } else if (item.column != null) {
            selectedItem = componentDomain_data.getFormattedValue(0, item.column);

        }
    }

    window.location.href=componentDomainLink + "/" + selectedItem
}

function selectComponentData(){

    var selection = componentData.getSelection();
    var selectedItem;

    for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        if (item.row != null && item.column != null) {
            selectedItem = componentData_data.getFormattedValue(item.row, item.column);

        } else if (item.row != null) {
            selectedItem = componentData_data.getFormattedValue(item.row, 0);

        } else if (item.column != null) {
            selectedItem = componentData_data.getFormattedValue(0, item.column);

        }
    }
    window.location.href=componentDataLink + "/" + selectedItem
}