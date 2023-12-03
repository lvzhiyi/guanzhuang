import { Form, Input } from 'antd';
import BaseButton from '@/shared/components/buttonCategory/BaseButton';
import { useRequest } from '@/shared/utils/request';
import { loginPOST } from '@/api/user';
import locationServices from '@/shared/services/locationServices';
import styles from './index.less';

const Login = () => {
  const [form] = Form.useForm();

  const {
    runAsync: loginAPI,
    data: currentUserAreaData,
    loading: loginLoading,
  } = useRequest(loginPOST);

  const onFinish = (values: any) => {
    console.log('账号密码', values);
    loginAPI(values);
    // localStorage.set('token', info.token);
    // localStorage.setItem('token', 'token');

    // locationServices.push('/');
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      requiredMark={false}
      layout="vertical"
    >
      <Form.Item
        label="账号"
        name="username"
        rules={[{ required: true, message: '账号不能为空' }]}
      >
        <Input maxLength={254} placeholder="账号" />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '密码不能为空' }]}
      >
        <Input.Password maxLength={20} type="password" placeholder="请输入" />
      </Form.Item>
      <BaseButton
        htmlType="submit"
        className={styles.loginButton}
        loading={loginLoading}
      >
        登录
      </BaseButton>
    </Form>
  );
};

export default Login;
