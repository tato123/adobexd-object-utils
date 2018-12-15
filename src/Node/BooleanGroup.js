export default class XDBooleanGroupWrapper {
  constructor(xdNode) {
    this.xdNode = xdNode;
    this.parentNodeWrapper = new XDGraphicsNodeWrapper(this.xdNode);
  }

  toJSON() {
    let result = {};

    if (this.parentNodeWrapper) {
      result = this.parentNodeWrapper.toJSON();
    }

    const node = this.xdNode;
    return {
      type: node.constructor.name,

      pathOp: node.pathOp,
      ...result
    };
  }
}
