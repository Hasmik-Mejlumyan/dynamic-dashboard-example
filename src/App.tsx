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
      </div>
    </MainLayout>
  );
};

export default App;
