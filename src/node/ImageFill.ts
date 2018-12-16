import { SerializedNode, JsonSerializer } from './SerializedNode'
import { ImageFill } from '../@types/scenegraph'

export default class ImageFillWrapper implements JsonSerializer {
  private xdNode: ImageFill

  constructor(xdNode: ImageFill) {
    this.xdNode = xdNode
  }

  toJSON(): SerializedNode {
    let result = {}

    const node = this.xdNode
    return {
      type: node.constructor.name,

      // SCALE_STRETCH: ImageFill.SCALE_STRETCH,
      // SCALE_COVER: ImageFill.SCALE_COVER,
      scaleBehaviour: node.scaleBehaviour,
      mimeType: node.mimeType,
      isLinkedContent: node.isLinkedContent,
      naturalWidth: node.naturalWidth,
      naturalHeight: node.naturalHeight,
      ...result
    }
  }
}
