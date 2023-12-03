import { Layout } from 'antd';
import type { IRoute } from 'umi';
import { last } from 'lodash';
import Logo from '@/shared/icons/logo.svg';
import TradeMark from '@/shared/icons/tradeMark.svg';
import type { IRouteComponentProps } from 'umi';
import useUserInfo from '@/shared/hooks/useUserInfo';
import type { AuthorityType } from '@/shared/hooks/useUserInfo';
import Link from '@/shared/components/base/Link';
import { productionStatusPath } from '@/routes/const/paths';
import SideMenu from './SideMenu';
import styles from './index.less';

const buildAuthorityRoutes = (
  routes: IRouteComponentProps['route']['routes'],
  authority: AuthorityType,
): any =>
  routes?.map((route) => {
    if (!route.name) {
      // TODO: 加权限
      // if (!route.name || route.name && !authority[route.name]) {
      return false;
    }

    const name = route.name ? last(route.name.split('.')) : undefined;

    if (route.routes) {
      return {
        ...route,
        name,
        routes: buildAuthorityRoutes(route.routes, authority),
      };
    }

    return { ...route, name };
  });

export default function Sider({ routes = [] }: { routes?: IRoute[] }) {
  const { authority } = useUserInfo();

  const menuData = buildAuthorityRoutes(routes, authority);

  return (
    <Layout.Sider width={230} className={styles.sider}>
      <div className={styles.logoWrap}>
        <Link to={productionStatusPath}>
          <Logo />
        </Link>
      </div>
      <SideMenu className={styles.sideMenu} menuData={menuData} />
      <div className={styles.tradeMark}>
        <TradeMark />
      </div>
    </Layout.Sider>
  );
}
