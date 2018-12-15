export default class XDColorWrapper {
  constructor(xdNode) {
    this.xdNode = xdNode;
  }

  toJSON() {
    let result = {};

    const node = this.xdNode;
    return {
      type: node.constructor.name,

      a: node.a,
      r: node.r,
      g: node.g,
      b: node.b,
      ...result
    };
  }
}
