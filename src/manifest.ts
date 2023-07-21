import { ManifestV3 } from 'rollup-plugin-chrome-extension'

const manifest: ManifestV3 = {
  name: 'Tugboat',
  manifest_version: 3,
  permissions: ['activeTab', 'contextMenus', 'scripting', 'storage'],
  action: {
    default_title: 'Create hyperlink',
  },
  background: {
    service_worker: 'chrome/background.ts',
  },
  options_page: 'pages/options/index.html',
  icons: {
    16: 'resources/icons/icon32.png',
    48: 'resources/icons/icon96.png',
    128: 'resources/icons/icon256.png',
  },
}

export default manifest
