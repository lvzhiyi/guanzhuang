import type { IRouteComponentProps } from 'umi';
import { Layout } from 'antd';
import Header from './components/Header';
import useSetPageTitle from '../utils/useSetPageTitle';
import Sider from './components/Sider';
import ErrorBoundary from './components/ErrorBoundary';
import './index.less';

export default function IndexPage(props: IRouteComponentProps) {
  const {
    route: { routes },
  } = props;
  console.log('routes', routes);

  useSetPageTitle(routes);

  return (
    <Layout style={{ background: 'white' }}>
      <Sider routes={routes} />
      <Layout className="main-layout">
        <Header />
        <Layout className="content-layout">
          <Layout.Content>
            <ErrorBoundary>{props.children}</ErrorBoundary>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
