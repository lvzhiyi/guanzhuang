import { Card, Table } from 'antd';
import useTableColumns from './useTableColumns';

const MaterialStatusReport = () => {
  const columns = useTableColumns();

  const dataSource = [
    {
      id: 1,
      rowKey: '400-95-1',
      rowSpan: 3,
      name: '400-95',
      length: [7, 7],
      singleProductionNum: 3,
      singleProductionMiter: 42,
      currentProductionNum: 4,
      currentProductionMiter: 56,
      percent: '67%',
      remark: '翻池',
    },
    {
      id: 2,
      rowKey: '400-95-2',
      rowSpan: 0,
      name: '400-95',
      length: [8],
      singleProductionNum: 5,
      singleProductionMiter: 40,
      currentProductionNum: 5,
      currentProductionMiter: 56,
      percent: '100%',
      remark: null,
    },
    {
      id: 3,
      rowKey: '400-95-3',
      rowSpan: 0,
      name: '400-95',
      length: [9],
      singleProductionNum: 10,
      singleProductionMiter: 49,
      currentProductionNum: 7,
      currentProductionMiter: 36,
      percent: '70%',
      remark: null,
    },
    {
      id: 4,
      rowKey: '500-100-1',
      rowSpan: 1,
      name: '500-100',
      length: [7, 8],
      singleProductionNum: 6,
      singleProductionMiter: 90,
      currentProductionNum: 8,
      currentProductionMiter: 90,
      percent: '133%',
      remark: null,
    },
    {
      id: 5,
      rowKey: '500-125-1',
      rowSpan: 1,
      name: '500-125',
      length: [14],
      singleProductionNum: null,
      singleProductionMiter: null,
      currentProductionNum: 2,
      currentProductionMiter: 28,
      percent: null,
      remark: '计划外',
    },
  ];

  return (
    <div>
      <div className="page-title">爆料情况</div>
      <Card>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowKey="rowKey"
          // loading={{
          //   spinning: !!loading,
          // }}
          // {...restProps}
        />
      </Card>
    </div>
  );
};

export default MaterialStatusReport;
