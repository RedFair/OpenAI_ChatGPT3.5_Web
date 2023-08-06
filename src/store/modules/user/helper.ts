/*
 * @Author: 火红色祥云 809880192@qq.com
 * @Date: 2023-08-06 21:11:11
 * @LastEditors: 火红色祥云 809880192@qq.com
 * @LastEditTime: 2023-08-06 21:54:25
 * @FilePath: /OpenAI_ChatGPT3.5_Web/src/store/modules/user/helper.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://raw.githubusercontent.com/Chanzhaoyu/chatgpt-web/main/src/assets/avatar.jpg',
      name: '火红色祥云',
      description: 'Star on <a href="https://github.com/RedFair/OpenAI_ChatGPT3.5_Web.git" class="text-blue-500" target="_blank" >GitHub</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
