import { fetch } from '@/utils/http'

export const getMood = () => fetch('https://v1.hitokoto.cn/', {})
