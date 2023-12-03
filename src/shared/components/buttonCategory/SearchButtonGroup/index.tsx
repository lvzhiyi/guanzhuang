import { Form, Space } from 'antd';
import BaseButton from '@/shared/components/buttonCategory/BaseButton';

export interface SearchButtonGroupProps {
  loading?: boolean;
  resetSearch: () => void;
}

const SearchButtonGroup = ({
  loading,
  resetSearch,
}: SearchButtonGroupProps) => (
  <Form.Item className="search-button-container">
    <Space size={30}>
      <BaseButton htmlType="submit" loading={loading} className="search-button">
        搜索
      </BaseButton>
      <BaseButton onClick={resetSearch} loading={loading} ghost>
        重置
      </BaseButton>
    </Space>
  </Form.Item>
);
export default SearchButtonGroup;
