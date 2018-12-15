export default class XDShadowWrapper {
  constructor(xdNode) {
    this.xdNode = xdNode;
  }

  toJSON() {
    let result = {};

    const node = this.xdNode;
    return {
      type: node.constructor.name,

      x: node.x,
      y: node.y,
      blur: node.blur,
      color: node.color,
      visible: node.visible,
      ...result
    };
  }
}
