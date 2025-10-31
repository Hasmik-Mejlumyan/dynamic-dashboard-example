import MainLayout from './components/layout/MainLayout/MainLayout';
import Charts from './components/Charts/Charts.tsx';
import Statistics from "./components/Statistics/Statistics.tsx";

const App = () => {
  return (
    <MainLayout>
      <div>
        < div className="grid grid-cols-4 gap-2">
          <Statistics title="Orders" value={582} percentage={-4} isPositive={false}/>
          <Statistics title="Revenue" value={`$123456`} percentage={10} isPositive={true}/>
          <Statistics title="Average Price" value={`$15.9`} percentage={0} isPositive={false}/>
          <Statistics title="Product Sold" value={582} percentage={-73} isPositive={false}/>
        </div>
          <Charts/>
          {/*ControlPanel*/}
          {/*Latest Activity*/}

          {/*<div className="grid grid-cols-4 gap-2">*/}
          {/*  <div className="bg-primary">1</div>*/}
          {/*  <div className="bg-primary">2</div>*/}
          {/*  <div className="bg-primary">3</div>*/}
          {/*  <div className="bg-primary">4</div>*/}
          {/*</div>*/}
          {/*<div className="grid grid-cols-4 gap-2 mt-2">*/}
          {/*  <div className="bg-primary">1</div>*/}
          {/*  <div className="bg-primary col-span-2">2</div>*/}
          {/*  <div className="bg-primary">3</div>*/}
          {/*</div>*/}
        </div>
    </MainLayout>
  );
};

export default App;
