import { useStorageLocal } from '~/composables/useStorageLocal'

export const storageDemo = useStorageLocal('webext-demo', 'Storage Demo', { listenToStorageChanges: true })
export const darkMode = useStorageLocal('darkmode', true, { listenToStorageChanges: true })
