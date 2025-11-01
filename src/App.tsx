import MainLayout from './components/layout/MainLayout/MainLayout';
import MainStats from './components/Statistics/MainStats.tsx';
import Charts from './components/Charts/Charts.tsx';
import ControlPanel from './components/ControlPanel/ControlPanel.tsx';
import LatestActivity from './components/ControlPanel/LatestActivity/LatestActivity.tsx';

const App = () => {
  return (
    <MainLayout>
      <div>
        <MainStats />
        <Charts/>
        <ControlPanel />
        <LatestActivity />
      </div>
    </MainLayout>
  );
};

export default App;
