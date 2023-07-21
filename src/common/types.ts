export interface HyperlinkAction {
  name: string
  regex: string
}

export interface HyperlinkConfig {
  actions: HyperlinkAction[]
}
