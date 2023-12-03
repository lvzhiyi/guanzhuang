import ProductionHeader from './components/ProductionHeader';
import OperateButtonGroup from './components/OperateButtonGroup';
import ProductionTable from './components/ProductionTable';

export default function IndexPage() {
  return (
    <div>
      <ProductionHeader />
      <OperateButtonGroup />
      <ProductionTable />
    </div>
  );
}
