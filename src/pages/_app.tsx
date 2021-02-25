import { ChallengesProvider } from '../contexts/ChallengesContext';
import '../styles/global.css';

// _app.tsx: será recalculado
function MyApp({ Component, pageProps }) {  
  return (
    <ChallengesProvider>      
          <Component {...pageProps} />;       
    </ChallengesProvider>
  )
}

export default MyApp;
