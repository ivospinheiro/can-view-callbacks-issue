import "./can-inner";

function CustomCellRenderer() {}

CustomCellRenderer.prototype.init = function (params) {
    this.eGui = document.createElement('span');
    this.eGui.innerHTML = `<can-inner val:raw="${params.value}"></can-inner>`;
};

CustomCellRenderer.prototype.getGui = function () {
    return this.eGui;
};

export default CustomCellRenderer;