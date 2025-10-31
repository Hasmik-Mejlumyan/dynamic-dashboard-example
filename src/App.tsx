import MainLayout from './components/layout/MainLayout/MainLayout';
import Charts from './components/Charts/Charts.tsx';
import MainStats from './components/Statistics/MainStats.tsx';

const App = () => {
  return (
    <MainLayout>
      <div>
        <MainStats />
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
