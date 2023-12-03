import type {
  RequestOptionsInit,
  RequestOptionsWithoutResponse,
  RequestMethod,
  RequestOptionsWithResponse,
  RequestResponse,
} from 'umi-request';
import { extend } from 'umi-request';
import useRequest from 'ahooks/lib/useRequest';
import type {
  Options,
  Plugin,
  Result,
  Service,
} from 'ahooks/lib/useRequest/src/types';
// import baseAPIHost, { allowDebug } from '@/shared/consts/baseAPIHost';
import type { RequestError } from './errorHandler';
import requestConfig from './requestConfig';
import errorHandler from './errorHandler';
import buildResInitData from './buildResInitData';

let requestMethodInstance: RequestMethod;
const getRequestMethod = () => {
  if (requestMethodInstance) {
    // request method 已经示例化
    return requestMethodInstance;
  }

  // runtime 配置可能应为依赖顺序的问题在模块初始化的时候无法获取，所以需要封装一层在异步调用后初始化相关方法
  // 当用户的 app.ts 中依赖了该文件的情况下就该模块的初始化时间就会被提前，无法获取到运行时配置

  const errorAdaptor = requestConfig.errorConfig?.adaptor;
  requestMethodInstance = extend({
    errorHandler,
    mode: 'no-cors',
    ...requestConfig,
    // credentials: SERVE_ENV === 'pro' ? 'include' : 'same-origin',
    // headers: {
    //   platform: 'BE',
    // },
  });

  // 中间件统一res错误处理
  requestMethodInstance.use(async (ctx, next) => {
    await next();
    const { req, res } = ctx;
    // @ts-ignore
    if (req.options?.skipErrorHandler) {
      return;
    }
    const { options } = req;
    const { getResponse } = options;
    const resData = getResponse ? res.data : res;
    const errorInfo = errorAdaptor(resData, ctx);
    if (errorInfo.success === false) {
      // 抛出错误到 errorHandler 中处理
      const error: RequestError = new Error(errorInfo.message);
      error.name = 'BizError'; // 系统及业务错误
      error.data = resData;
      error.info = errorInfo;
      error.redirectPage = errorInfo.redirectPage;
      throw error;
    }
  });

  // Add user custom middleware
  const customMiddlewares = requestConfig.middleware || [];
  customMiddlewares.forEach((mw) => {
    requestMethodInstance.use(mw);
  });

  // Add user custom interceptors
  const requestInterceptors = requestConfig.requestInterceptors || [];
  const responseInterceptors = requestConfig.responseInterceptors || [];
  requestInterceptors.forEach((ri) => {
    requestMethodInstance.interceptors.request.use(ri);
  });
  responseInterceptors.forEach((ri) => {
    requestMethodInstance.interceptors.response.use(ri);
  });

  return requestMethodInstance;
};

const request = (url: any, options: any) => {
  const requestMethod = getRequestMethod();

  const headers: {
    token?: string;
  } = {};

  if (localStorage.getItem('token') && !options?.skipToken) {
    headers.token = localStorage.getItem('token') || '';
  }

  const resultURL = `http://81.69.4.168:10000/pipe/pile${url}`;
  return requestMethod(resultURL, {
    ...options,

    headers: { ...headers, ...options?.headers },
  });
};

function useHooksRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Plugin<TData, TParams>[],
): Result<TData, TParams> {
  console.log('service', service);

  return useRequest(service, { manual: true, ...options }, plugins);
}

export default request;

export { useHooksRequest as useRequest, buildResInitData };
