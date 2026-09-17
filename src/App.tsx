import { MotionConfig } from 'framer-motion';
import HomePage from './pages/HomePage';
import { I18nProvider } from './i18n';

function App() {
  return <I18nProvider><MotionConfig reducedMotion="user"><HomePage /></MotionConfig></I18nProvider>;
}

export default App;
