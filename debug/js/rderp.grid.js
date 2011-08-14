document.write('<script language="JavaScript" src="js/jquery-1.4.4.min.js"></script>');
document.write('<script language="JavaScript" src="js/jquery-ui-1.8.7.custom.min.js"></script>');
var rderp;
if(!rderp) rderp={};



if(!rderp.grid) rderp.grid={};

if(typeof(rderp.common) == "undefined") {
    document.write('<script type="text/javascript" src="js/rderp/rderp_common.js"></script>');
}

/**************************************************
 * 그리드 공통 옵션 셋팅
 *************************************************/
rderp.grid.getDefaultOptions = function(sortId) {
    return {
        width: "100%",
//      cssGrid: "hahahah",
        border: "1px solid #999",
        font: "12px",
//      footerEnabled: true,
//      EditManager: {},
        ColHeader: {
            reorderEnabled: true,
            reorderSyncEnabled:true,
            background: "#dde4ec repeat-x center bottom",
//          sortBackground:"img/jexgrid/sort.png",
//          sortBackgroundAsc:"img/jexgrid/sort-asc.png",
//          sortBackgroundDesc:"img/jexgrid/sort-desc.png",    
            classColHeader  : "grid-colHeader",
            resizeHandleBackground: "",
            font: "12px"
//          headerStyle: "padding : 1px, 5px, 5px, 1px; border-bottom: 1px solid silver; color : #637b97;"
        },
        ColDefManager: {
            colDef: {
                resizable: true,
                width: 100
            }
        },
        ViewportManager: {
            rowsPerPage: 20,
            rowH: 20,
            autoColWEnabled: false,
            evenOddRows: true
        },
//      DataManager: {
//          idColKeys:[sortId]
//      },
        SelectionManager:{
            //bgColorSelection:"red"            
        }
//      Footer:{}
    };
};