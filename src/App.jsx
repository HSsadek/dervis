import Services from './components/services/Services';
import Hero from './components/hero/Hero';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className="container">
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};
export default App;
