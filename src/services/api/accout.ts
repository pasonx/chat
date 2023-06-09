// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export interface UserInfo {
    username: string
    password?: string
    email?:string
}

export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: UserInfo;
  }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}


/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(params?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data: (params || {}),
  });
}

export async function login(params:UserInfo) {
    return request<Record<string, any>>('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: (params || {}),
    });
}

export async function register(params:UserInfo) {
  debugger
    return request<Record<string, any>>('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: (params || {}),
    });
}
  
