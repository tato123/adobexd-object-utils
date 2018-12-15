import { Color } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDColorWrapper implements JsonSerializer {
  private xdNode: Color

  constructor(xdNode: Color) {
    this.xdNode = xdNode
  }

  toJSON(): SerializedNode {
    let result = {}

    const node = this.xdNode
    return {
      type: node.constructor.name,

      a: node.a,
      r: node.r,
      g: node.g,
      b: node.b,
      ...result
    }
  }
}
