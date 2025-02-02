import type { AppInfo } from '@/types/app'
export const APP_ID = `89126621-1d1e-4f8b-ae4c-266e41b7ce94`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `http://103013yt7td85.vicp.fun/v1`
export const APP_INFO: AppInfo = {
  title: 'DeepSeek ChatBot APP',
  description: '基于DeepSeek-R1:70B搭建的聊天机器人',
  copyright: 'Tong E Tech',
  privacy_policy: '',
  default_language: 'cn',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
