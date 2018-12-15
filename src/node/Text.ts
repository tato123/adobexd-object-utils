import GraphicsNode from './GraphicsNode'
import { Text } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDTextWrapper implements JsonSerializer {
  private xdNode: Text
  private parentNodeWrapper: GraphicsNode

  constructor(xdNode: Text) {
    this.xdNode = xdNode
    this.parentNodeWrapper = new GraphicsNode(this.xdNode)
  }

  toJSON(): SerializedNode {
    let result = {}

    if (this.parentNodeWrapper) {
      result = this.parentNodeWrapper.toJSON()
    }

    const node = this.xdNode
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
    }
  }
}
