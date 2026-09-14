import Router from '@/components/Router';
import Layout from '@/components/layout/Layout';
import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Courts from '@/components/pages/Courts';
import Pricing from '@/components/pages/Pricing';
import Booking from '@/components/pages/Booking';
import Community from '@/components/pages/Community';
import Contact from '@/components/pages/Contact';

function renderPage(path: string, navigate: (path: string) => void) {
  switch (path) {
    case '/':
      return <Home onNavigate={navigate} />;
    case '/about':
      return <About onNavigate={navigate} />;
    case '/courts':
      return <Courts onNavigate={navigate} />;
    case '/pricing':
      return <Pricing onNavigate={navigate} />;
    case '/booking':
      return <Booking onNavigate={navigate} />;
    case '/community':
      return <Community onNavigate={navigate} />;
    case '/contact':
      return <Contact />;
    default:
      return <Home onNavigate={navigate} />;
  }
}

function App() {
  return (
    <Router>
      {(path, navigate) => (
        <Layout currentPath={path} onNavigate={navigate}>
          {renderPage(path, navigate)}
        </Layout>
      )}
    </Router>
  );
}

export default App;
