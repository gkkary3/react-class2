import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/1/12/View_of_saint_Peter_basilica_from_a_roof.jpg"
      title="First Meetup"
      address="Some Street 5, Some Ciry"
      description="This is a first meetup"
    />
  );
}

export default MeetupDetails;
