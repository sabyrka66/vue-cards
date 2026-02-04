import { artificialDelay } from '@/helpers/artificialDelay'
import { ref } from 'vue'

export const useFetch = (callback: (arg: string) => Promise<void>) => {
  const isLoading = ref<boolean>(false)
  const error = ref<string>('')

  const fetchResponse = async (arg: string): Promise<void> => {
    try {
      isLoading.value = true
      await artificialDelay()
      await callback(arg)
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message
      }
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, error, fetchResponse }
}
