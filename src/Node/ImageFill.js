export default class XDImageFillWrapper {
  constructor(xdNode) {
    this.xdNode = xdNode;
  }

  toJSON() {
    let result = {};

    const node = this.xdNode;
    return {
      type: node.constructor.name,

      SCALE_STRETCH: node.SCALE_STRETCH,
      SCALE_COVER: node.SCALE_COVER,
      scaleBehaviour: node.scaleBehaviour,
      mimeType: node.mimeType,
      isLinkedContent: node.isLinkedContent,
      naturalWidth: node.naturalWidth,
      naturalHeight: node.naturalHeight,
      ...result
    };
  }
}
