import { updateClipboard } from 'chrome/scripting/clipboard'
import { setContextMenus } from 'common/contextMenus'
import { loadHyperlinkConfig } from 'common/storage'

const updateContextMenus = async () => {
  const config = await loadHyperlinkConfig()
  setContextMenus(config)
}

chrome.runtime.onInstalled.addListener(updateContextMenus)

chrome.runtime.onStartup.addListener(updateContextMenus)

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab!.id! },
    func: updateClipboard,
    args: [tab!, info.menuItemId as string],
  })
})

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    func: updateClipboard,
    args: [tab],
  })
})
