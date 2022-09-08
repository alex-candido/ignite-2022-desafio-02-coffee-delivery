import { Route, Routes } from 'react-router-dom';
import CompleteOrderPage from '../pages/CompleteOrder';
import HomePage from '../pages/Home';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
