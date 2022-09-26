import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/12/View_of_saint_Peter_basilica_from_a_roof.jpg",
    address: "Some address 5, 12345 Some City",
    description: "this is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/12/View_of_saint_Peter_basilica_from_a_roof.jpg",
    address: "Some address 10, 12345 Some City",
    description: "this is a Second meetup!",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]); //상태관리하기 위해 사용

  useEffect(() => {
    // Http 요청을 보내기 위해 사용
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
