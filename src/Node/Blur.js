export default class XDBlurWrapper {
  constructor(xdNode) {
    this.xdNode = xdNode;
  }

  toJSON() {
    let result = {};

    const node = this.xdNode;
    return {
      type: node.constructor.name,

      blurAmount: node.blurAmount,
      brightnessAmount: node.brightnessAmount,
      fillOpacity: node.fillOpacity,
      isBackgroundEffect: node.isBackgroundEffect,
      visible: node.visible,
      ...result
    };
  }
}
