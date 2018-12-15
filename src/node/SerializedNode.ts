export interface SerializedNode {
  type: string
  [extraProps: string]: any
}

export interface JsonSerializer<A = SerializedNode> {
  toJSON(): A
}
