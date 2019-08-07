var WidgetMove = {
    errorMsg: "Error! The selected widget cannot be placed here",
    curTarget: null,
    curTmpTarget: null,
    /*noSel: function() {
        try {
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        } catch(e){}
    },*/
    checkParentNode: function(treeId, treeNodes) {
        return !treeNodes[0].isParent;
    },
    dropWidget: function(e, treeId, treeNodes, targetNode, moveType) {

            console.log("In the drop zone the id of dropped widget is " + treeNodes[0].type);

            $("#screenWidgets").append(generateCode(treeNodes[0].type));

    },

    bindDom: function() {
        $(".domBtnDiv").bind("mousedown", WidgetMove.bindMouseDown);
    },
    bindMouseDown: function(e) {
        var target = e.target;
        if (target!=null && target.className=="domBtn") {
            var doc = $(document), target = $(target),
                docScrollTop = doc.scrollTop(),
                docScrollLeft = doc.scrollLeft();
            //target.addClass("domBtn_Disabled");
            //target.removeClass("domBtn");
            curDom = $("<span class='dom_tmp domBtn'>" + target.text() + "</span>");
            curDom.appendTo("body");

            curDom.css({
                "top": (e.clientY + docScrollTop + 3) + "px",
                "left": (e.clientX + docScrollLeft + 3) + "px"
            });
            WidgetMove.curTarget = target;
            WidgetMove.curTmpTarget = curDom;

            doc.bind("mousemove", WidgetMove.bindMouseMove);
            doc.bind("mouseup", WidgetMove.bindMouseUp);
            doc.bind("selectstart", WidgetMove.docSelect);
        }
        if(e.preventDefault) {
            e.preventDefault();
        }
    },
    bindMouseMove: function(e) {
        WidgetMove.noSel();
        var doc = $(document),
            docScrollTop = doc.scrollTop(),
            docScrollLeft = doc.scrollLeft(),
            tmpTarget = WidgetMove.curTmpTarget;
        if (tmpTarget) {
            tmpTarget.css({
                "top": (e.clientY + docScrollTop + 3) + "px",
                "left": (e.clientX + docScrollLeft + 3) + "px"
            });
        }
        return false;
    },
    bindMouseUp: function(e) {
        var doc = $(document);
        doc.unbind("mousemove",WidgetMove.bindMouseMove);
        doc.unbind("mouseup", WidgetMove.bindMouseUp);
        doc.unbind("selectstart", WidgetMove.docSelect);

        var target = WidgetMove.curTarget, tmpTarget = WidgetMove.curTmpTarget;
        if (tmpTarget) tmpTarget.remove();

        if ($(e.target).parents("#tree").length == 0) {
            if (target) {
                target.removeClass("domBtn_Disabled");
                target.addClass("domBtn");
            }
            WidgetMove.curTarget = null;
            WidgetMove.curTmpTarget = null;
        }
    },
    bindSelect: function() {
        return false;
    }
};

var setting = {
    edit: {
        enable: true,
        showRemoveBtn: false,
        showRenameBtn: false,
        drag: {
            isCopy:true,
            isMove:false
        }
    },
    data: {
        keep: {
            parent: true,
            leaf: true
        },
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeDrag: WidgetMove.checkParentNode,
        onDrop: WidgetMove.dropWidget
    },
    view: {
        selectedMulti: false
    }
};

var zNodes =[

    { id:1, pId:0, name:"DIV", isParent: true, open:true},
    { id:2, pId:0, name:"PANEL", isParent: true, open:false},
    {type:"date", id:20, pId:1, name:"Date Widget"},
    {type:"condition", id:29, pId:1, name:"Condition Widget"},
    {type:"checkbox", id:19, pId:1, name:"Checkbox Widget"},
    {type:"textarea", id:10, pId:1, name:"Text Area Widget"},
    {type:"textinput", id:19, pId:1, name:"Text Input Widget"},
    {type:"password",id:19,pId:1,name:"Password Widget"},
    {type:"select", id:19, pId:1, name:"Select Widget"},
    {type:"panel", id:19, pId:1, name:"Panel Widget"},
    {type:"link", id:19, pId:1, name:"Link Widget"},
    {type:"icon", id:19, pId:1, name:"Icon Widget"},
    {type:"heading", id:19, pId:1, name:"Heading Widget"},
    {type:"panel_heading", id:19, pId:2, name:"Panel Heading Widget"},
    {type:"panel_body", id:19, pId:2, name:"Panel Body Widget"}


];

$(document).ready(function(){
    $.fn.zTree.init($("#tree"), setting, zNodes);
    WidgetMove.bindDom();
});

function switchLayout(){
    var selected=$("input[name=layoutOptions]:checked").val();
    console.log(selected);
    if(selected=="oneColumn"){
        console.log("One Column");
    }else{
        console.log("Two Column");
    }
}
function generateCode(type){

    console.log("Create code for " + type);
    if(type=="textinput"){

        return '<div><input type="text" class="form-control col-xs-9" id="text" placeholder=""></div>';
    }else if(type=="password"){
      return '<div><input type="password" class="form-control col-xs-9" id="password" placeholder=""></div>';
    } else if(type=="checkbox"){
        return '<div><input type="checkbox" class="form-control col-xs-2"></div>';
    }else if(type=="select"){
        return '<div><select class="col-xs-3"></select>';
    }else if(type=="form"){

        return '<form class="form-horizontal"></form>';
    }else if(type=="textarea"){

        return '<textarea class="form-control col-xs-9" rows="3"></textarea>';
    }
    else{

        return "<div>Not done yet</div>";
    }

}