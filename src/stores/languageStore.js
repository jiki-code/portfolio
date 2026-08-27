import { ref } from 'vue'

export const currentLang = ref('vi')

export function setLanguage(lang) {
  if (lang === 'vi' || lang === 'en') {
    currentLang.value = lang
  }
}

export function toggleLanguage() {
  currentLang.value = currentLang.value === 'vi' ? 'en' : 'vi'
  return currentLang.value
}
