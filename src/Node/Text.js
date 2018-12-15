export default class XDTextWrapper {
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

      text: node.text,
      styleRanges: node.styleRanges,
      flipY: node.flipY,
      textAlign: node.textAlign,
      lineSpacing: node.lineSpacing,
      areaBox: node.areaBox,
      clippedByArea: node.clippedByArea,
      ...result
    };
  }
}
