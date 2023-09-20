import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export function getStaticProps() {
  /**
   * preredndering code
   */
}

export default HomePage;

/***
 * Prerendering code here
 */

