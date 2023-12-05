import { Fragment } from "react";
import { useRouter } from "next/router";

import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/events-search";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featureEvents = getFeaturedEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={featureEvents} />
    </Fragment>
  );
}

export default HomePage;
