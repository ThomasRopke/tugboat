import { HyperlinkConfig } from 'common/types'

/**
 * Update clipboard.
 *
 * @remarks
 * This method must remain self contained.
 */
export const updateClipboard = async (tab: chrome.tabs.Tab, actionId?: string) => {
  let text = tab.title
  if (actionId) {
    const { actions } = (await chrome.storage.sync.get('actions')) as HyperlinkConfig
    const action = actions[Number(actionId)]
    const regex = RegExp(action.regex)
    text = regex.exec(tab.title!)?.[0]
  }

  const url = tab.url!
  const clipboardItem = new ClipboardItem({
    'text/plain': new Blob([url], { type: 'text/plain' }),
    'text/html': new Blob([`<a href="${url}">${text || url}</a>`], { type: 'text/html' }),
  })

  navigator.clipboard.write([clipboardItem]).then(
    () => {},
    (e) => {
      alert(e)
    },
  )
}
