import React from 'react';
import { Form } from 'antd';
import SearchButtonGroup from '@/shared/components/buttonCategory/SearchButtonGroup';

const SearchForm = ({ onSubmit, loading }) => {
  const resetSearch = () => { };

  return (
    <Form
      onFinish={onSubmit}
      // form={formInstance}
      layout="vertical"
      className="list-search-form"
    >
      <SearchButtonGroup loading={loading} resetSearch={resetSearch} />
    </Form>
  );
};
export default React.memo(SearchForm);
