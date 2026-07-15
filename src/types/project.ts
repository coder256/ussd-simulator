export interface Label {
  label: string
  digit: string
  next: string
}

export interface Node {
  type: 'menu | input | action'
  prompt: string
  options: Label[]
  placeholder?: string
  inputType?: 'tel | number | text'
  next?: string
}
