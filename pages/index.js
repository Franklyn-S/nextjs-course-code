import { Fragment } from "react";
import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/events-search";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featureEvents = getFeaturedEvents();
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={featureEvents} />
    </Fragment>
  );
}

export default HomePage;
