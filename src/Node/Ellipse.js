export default class XDEllipseWrapper {
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

      radiusX: node.radiusX,
      radiusY: node.radiusY,
      isCircle: node.isCircle,
      ...result
    };
  }
}
