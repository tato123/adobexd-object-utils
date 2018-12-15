import { Blur } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class BlurWrapper implements JsonSerializer {
  private xdNode: Blur

  constructor(xdNode: Blur) {
    this.xdNode = xdNode
  }

  toJSON(): SerializedNode {
    let result = {}

    const node = this.xdNode
    return {
      type: node.constructor.name,

      blurAmount: node.blurAmount,
      brightnessAmount: node.brightnessAmount,
      fillOpacity: node.fillOpacity,
      isBackgroundEffect: node.isBackgroundEffect,
      visible: node.visible,
      ...result
    }
  }
}
