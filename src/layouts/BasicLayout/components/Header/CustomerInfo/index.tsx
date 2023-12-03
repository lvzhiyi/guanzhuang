import { Dropdown } from 'antd';
import PeopleCircleOutlined from '@/assets/peopleCircleOutlined.svg';
import locationServices from '@/shared/services/locationServices';
import { loginPath } from '@/routes/const/paths';

import styles from './index.less';

export default function CustomerInfo() {
  // const { initialState } = useModel('@@initialState');
  // const { userInfo } = initialState || {};

  const logout = () => {
    localStorage.setItem('token', '');
    locationServices.push(loginPath);
  };

  // disabled: true, 为了点击不关闭menu
  const menuItem = [
    {
      disabled: false,
      key: 'logout',
      label: <div onClick={logout}>退出登录</div>,
    },
  ];

  return (
    <Dropdown
      menu={{ items: menuItem }}
      trigger={['click']}
      overlayClassName={styles.customerWrapper}
      getPopupContainer={(triggerNode) => triggerNode}
    >
      <div className={styles.dropdownWrap}>
        <PeopleCircleOutlined />
      </div>
    </Dropdown>
  );
}
