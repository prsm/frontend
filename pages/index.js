import ContactBox from '../components/ContactBox';
import CustomHead from '../components/CustomHead';
import Embed from '../components/Embed';
import Events from '../components/Events';
import Header from '../components/Header';
import { Slideshow } from '../components/Slideshow';
import TextSection from '../components/TextSection';
import data from '../data';

export default function Home() {
  const { videoId, socials, buttons, events, images } = data;
  return (
    <div>
      <CustomHead title="PR1SM" description="Basler non-profit fokusiert auf digitale Medien" />
      <Header socials={socials} />
      <main className="max-w-3xl w-full m-auto grid grid-cols-1 gap-12 p-4 pt-12 pt:12">
        <TextSection />
        <ContactBox buttons={buttons} />
        <Embed videoId={videoId} />
        <Events events={events} />
        <Slideshow images={images} />
      </main>
    </div>
  );
}
