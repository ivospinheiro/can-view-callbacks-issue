import Component from "can-component";
import {Grid} from "ag-grid-community";
import CustomCellRenderer from "./custom-cell-renderer";

const COLS = 50,
    ROWS = 500,
    columnDefs = new Array(COLS).fill({}).map((_, i) => ({
        headerName: `Header ${i}`,
        field: `_${i}`,
        width: 50,
        cellRenderer: 'customCellRenderer'
    }));

columnDefs[0].pinned = "left";
columnDefs[1].pinned = "right";

const rowData = new Array(ROWS).fill({}).map(() => {
    const row = {};
    for (let j = 0; j < COLS; j++) {
        row[`_${j}`] = j;
    }
    return row;
});

Component.extend({
    tag: "can-table",
    view: `<div style="display: block; height: 100%; width:100%;" class="ag-theme-balham table-wrapper"></div>`,
    ViewModel: {
        connectedCallback(element) {
            const gridOptions = {
                columnDefs,
                rowData,
                components: {
                    'customCellRenderer': CustomCellRenderer
                }
            },
            eGridDiv = element.querySelector('.table-wrapper');
            
            new Grid(eGridDiv, gridOptions);
        }
    }
});