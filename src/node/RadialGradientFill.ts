import { SerializedNode, JsonSerializer } from './SerializedNode'

export interface RadialGradientFill {}

export default class XDRadialGradientFillWrapper implements JsonSerializer {
  private xdNode: RadialGradientFill

  constructor(xdNode: RadialGradientFill) {
    this.xdNode = xdNode
  }

  toJSON(): SerializedNode {
    let result = {}

    const node = this.xdNode
    return {
      type: node.constructor.name,

      ...result
    }
  }
}
