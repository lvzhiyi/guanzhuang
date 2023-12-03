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
      title: '模具号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '桩规格',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '模具长度',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '配桩长度',
      dataIndex: 'length',
      key: 'length',
      render(val) {
        return val.join('+');
      },
    },
    {
      title: '布料线号',
      dataIndex: 'id',
      key: 'id',
    },
  ];

  return columns;
};

export default useTableProps;
