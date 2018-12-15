export default class XDLinearGradientFillWrapper {
  constructor(xdNode) {
    this.xdNode = xdNode;
  }

  toJSON() {
    let result = {};

    const node = this.xdNode;
    return {
      type: node.constructor.name,

      colorStops: node.colorStops,
      startX: node.startX,
      startY: node.startY,
      endX: node.endX,
      endY: node.endY,
      ...result
    };
  }
}
