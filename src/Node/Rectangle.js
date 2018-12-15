export default class XDRectangleWrapper {
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

      width: node.width,
      height: node.height,
      cornerRadii: node.cornerRadii,
      hasRoundedCorners: node.hasRoundedCorners,
      effectiveCornerRadii: node.effectiveCornerRadii,
      ...result
    };
  }
}
