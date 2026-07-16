export interface Service {
  id: string
  label: string
  provider: string
  dialPrefix: string
  rootNode: string
  nodes: Record<string, Node>
}

export interface Option {
  label: string
  digit: string
  next: string
}

export interface NodeParent {
  name: Node
}

export interface Node {
  type: 'menu' | 'input' | 'action'
  prompt: string
  options: Option[]
  placeholder?: string
  inputType?: 'tel' | 'number' | 'text'
  next?: string
}
