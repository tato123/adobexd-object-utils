export default class XDRadialGradientFillWrapper {
  constructor(xdNode) {
    this.xdNode = xdNode;
  }

  toJSON() {
    let result = {};

    const node = this.xdNode;
    return {
      type: node.constructor.name,

      ...result
    };
  }
}
