import { HyperlinkConfig } from 'common/types'

export const setContextMenus = (config: HyperlinkConfig) => {
  chrome.contextMenus.removeAll()

  config.actions.forEach((action, index) => {
    chrome.contextMenus.create({
      title: action.name,
      id: `${index}`,
      contexts: ['action'],
    })
  })
}
