import React from 'react';
import moment from 'moment';
import SearchForm from './components/SearchForm';
import { pageTransactionAccountUsingPOST } from '@/api/user';
import useTableColumns from './useTableColumns';
import { Card } from 'antd';

const now = moment();

const productionHistory = () => {
  // const dataSource = useSearchDataSource();
  // const schemaFormProps = {
  //   dataSource,
  //   initialValues: {
  //     duration: [
  //       now.clone().subtract(1, 'day').startOf('day'),
  //       now.clone().subtract(1, 'day').endOf('day'),
  //     ],
  //   },
  // };
  const columns = useTableColumns();

  // const onSearch = (values: Record<string, any>) => {
  //   schemaFormProps?.onSubmit && schemaFormProps?.onSubmit(values);
  //   schemaFormSearchDataRef.current = formatSearchFormData(values);
  //   tableSearchDataRef.current.pageNum = 1;

  //   getList();
  // };

  return (
    <div>111
      {/* <SearchForm onSubmit={onSearch} loading={undefined} />
      <Card>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowKey="rowKey"
          // loading={{
          //   spinning: !!loading,
          // }}
        />
      </Card> */}
    </div>
  );
};

export default productionHistory;
