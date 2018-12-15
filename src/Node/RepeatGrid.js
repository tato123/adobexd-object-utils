export default class XDRepeatGridWrapper {
  constructor(xdNode) {
    this.xdNode = xdNode;
    this.parentNodeWrapper = new XDSceneNodeWrapper(this.xdNode);
  }

  toJSON() {
    let result = {};

    if (this.parentNodeWrapper) {
      result = this.parentNodeWrapper.toJSON();
    }

    const node = this.xdNode;
    return {
      type: node.constructor.name,

      width: node.width,
      height: node.height,
      numColumns: node.numColumns,
      numRows: node.numRows,
      paddingX: node.paddingX,
      paddingY: node.paddingY,
      cellSize: node.cellSize,
      ...result
    };
  }
}
