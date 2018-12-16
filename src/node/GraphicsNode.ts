import { GraphicsNode } from '../@types/scenegraph'
import SceneNodeWrapper from './SceneNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class GraphicsNodeWrapper extends SceneNodeWrapper implements JsonSerializer {
  private _xdNode: GraphicsNode

  constructor(xdNode: GraphicsNode) {
    super(xdNode)
    this._xdNode = xdNode
  }

  toJSON(): SerializedNode {
    let result = {}

    const node = this._xdNode
    return Object.assign(
      {},
      {
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
        hasLinkedGraphicFill: node.hasLinkedGraphicFill
      },
      super.toJSON()
    )
  }
}
