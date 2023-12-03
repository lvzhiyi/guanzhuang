import { App, ConfigProvider } from 'antd';
import { ApplyPluginsType, plugin } from 'umi';
import antThemes from './shared/styles/antThemes.js';

export function rootContainer(container: any) {
  const runtimeAntd = plugin.applyPlugins({
    key: 'antd',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });

  ConfigProvider.config({
    // prefixCls: PREFIX_CLS,
  });

  // const validateMessages = {
  //   required: formatMessage(messages.required, {
  //     // eslint-disable-next-line no-template-curly-in-string
  //     value: '${label}',
  //   }),
  // };

  const finalConfig = {
    ...{
      // prefixCls: PREFIX_CLS,
      ...runtimeAntd,
      autoInsertSpaceInButton: false,
      theme: { token: antThemes },
      // form: { validateMessages },
    },
  };

  return (
    <ConfigProvider {...finalConfig}>
      <App>{container}</App>
    </ConfigProvider>
  );
}
