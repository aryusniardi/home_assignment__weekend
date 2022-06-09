import Hero from './components/hero/hero'
import Section from './components/section/section__component'
import {Spacer} from './components/base__components'
import CustomSection1 from './components/custom__section/custom__section_1';
import Testimonial from './components/testimonial/testimonial';
import Footer from './components/footer/footer';
import CustomSection3 from './components/custom__section/custom__section_3';
import CustomSection2 from './components/custom__section/custom__section_2';

function App() {
  return (
    <div className="App">
      <Hero />
      <CustomSection1 />
      <Spacer lg/>
      <Testimonial />
      <Spacer lg black/>
      <Section 
        title="POV" 
        background="black" 
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
      />
      <Spacer lg black/>
      <Section
        title="Resource"
        background="black"
        desc="These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best"
      />
      <Spacer lg black/>
      <CustomSection2 />
      <Spacer lg black/>
      <CustomSection3 />
      <Footer />
    </div>
  );
}

export default App;
