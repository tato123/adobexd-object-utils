export default class XDGraphicsNodeWrapper {
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

      fill: node.fill,
      fillEnabled: node.fillEnabled,
      stroke: node.stroke,
      strokeEnabled: node.strokeEnabled,
      strokeWidth: node.strokeWidth,
      strokePosition: node.strokePosition,
      strokeEndCaps: node.strokeEndCaps,
      strokeJoins: node.strokeJoins,
      strokeMiterLimit: node.strokeMiterLimit,
      strokeDashArray: node.strokeDashArray,
      strokeDashOffset: node.strokeDashOffset,
      shadow: node.shadow,
      blur: node.blur,
      pathData: node.pathData,
      hasLinkedGraphicFill: node.hasLinkedGraphicFill,
      ...result
    };
  }
}
