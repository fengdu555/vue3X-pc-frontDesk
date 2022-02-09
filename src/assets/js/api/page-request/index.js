import ajax from '@/utils/request'
import Qs from 'qs'
import apiUrl from '../api'

/**
 * @description: 创建api
 */
export function handleCreateApiAjax(data) {
  const _data = Qs.stringify(data)
  return ajax.request({
    url: apiUrl.initialize,
    method: 'post',
    data: _data,
  })
}
