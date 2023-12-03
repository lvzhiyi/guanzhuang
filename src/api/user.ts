// @ts-ignore
/* eslint-disable */
import request from '@/shared/utils/request';

/** 校验用户、密码登陆 POST /api/be/user/check/account */
export async function loginPOST(body: any, options?: { [key: string]: any }) {
  return request('/accounts/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取交易账户 分页获取交易账户 POST /api/be/mt4/transaction/accounts/${param0} */
export async function pageTransactionAccountUsingPOST(
  params: {
    // path
    /** 用户账户类型：1->真实账户，2->模拟账户，3->福利账户 */
    type: '1' | '2' | '3';
  },
  body: any,
  options?: { [key: string]: any },
) {
  const { type: param0, ...queryParams } = params;
  return request(`/api/be/mt4/transaction/accounts/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
