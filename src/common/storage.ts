import { HyperlinkConfig } from 'common/types'
import { FieldPath, FieldValues } from 'react-hook-form'

const loadData =
  <TFieldValues extends FieldValues = never, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
    keys: TName[],
  ) =>
  async () =>
    (await chrome.storage.sync.get(keys)) as TFieldValues

export const loadHyperlinkConfig = loadData<HyperlinkConfig>(['actions'])

export const saveHyperlinkConfig = (config: HyperlinkConfig) => chrome.storage.sync.set(config)
