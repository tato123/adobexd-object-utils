import { SerializedNode, JsonSerializer } from './SerializedNode'
import { Shadow } from '../@types/scenegraph'

export default class XDShadowWrapper implements JsonSerializer {
  private xdNode: Shadow

  constructor(xdNode: Shadow) {
    this.xdNode = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.xdNode
    return {
      type: node.constructor.name,
      x: node.x,
      y: node.y,
      blur: node.blur,
      color: node.color,
      visible: node.visible
    }
  }
}
