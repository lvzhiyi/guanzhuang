import { Space } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

const percent = (val: number, baseNum: number) => {
  return `${(val / baseNum) * 100}%`;
};

const ProductionHeader = () => {
  const dataList = [
    {
      plannedLabel: '计划根数',
      plannedNum: 8,
      practicalLabel: '当前根数',
      practicalNum: 13,
      cls: styles.green,
    },
    {
      plannedLabel: '计划米数',
      plannedNum: 80,
      practicalLabel: '当前米数',
      practicalNum: 110,
      cls: styles.red,
    },
  ];

  return (
    <Space size={23} className={styles.productionHeader}>
      {dataList.map((item, i) => (
        <div key={i} className={classNames(styles.productionBox, item.cls)}>
          <div className={styles.productionItem}>
            <div>{item.plannedLabel}</div>
            <div>{item.plannedNum}</div>
          </div>
          <div className={styles.productionItem}>
            <div>{item.practicalLabel}</div>
            <div>{item.practicalNum}</div>
          </div>
          <div className={styles.productionItem}>
            <div>完成率</div>
            <div>
              {item.plannedNum
                ? percent(item.practicalNum, item.plannedNum)
                : '-'}
            </div>
          </div>
        </div>
      ))}
    </Space>
  );
};

export default ProductionHeader;
