const useTableProps = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      render(val, _, index) {
        return index + 1;
      },
    },
    {
      title: '管桩规格',
      dataIndex: 'name',
      key: 'name',
      onCell: ({ rowSpan }) => ({ rowSpan }),
    },
    {
      title: '长度',
      dataIndex: 'length',
      key: 'length',
      render(val) {
        return val.join('+');
      },
    },
    {
      title: '单轮生产计划',
      children: [
        {
          title: '根数',
          dataIndex: 'singleProductionNum',
          key: 'singleProductionNum',
          render(val) {
            return val || '/';
          },
        },
        {
          title: '米数',
          dataIndex: 'singleProductionMiter',
          key: 'singleProductionMiter',
          render(val) {
            return val || '/';
          },
        },
      ],
    },
    {
      title: '当班实际生产情况',
      children: [
        {
          title: '根数',
          dataIndex: 'currentProductionNum',
          key: 'currentProductionNum',
        },
        {
          title: '米数',
          dataIndex: 'currentProductionMiter',
          key: 'currentProductionMiter',
        },
      ],
    },
    {
      title: '完成率',
      dataIndex: 'percent',
      key: 'percent',
      render(val) {
        return val || '/';
      },
    },
    {
      title: '是否翻池',
      dataIndex: 'remark',
      key: 'remark',
    },
  ];

  return columns;
};

export default useTableProps;
