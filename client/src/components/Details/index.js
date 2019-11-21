
import React, { Component } from "react";
import "./style.css";

class Details extends Component {
    
    render() {
        return (
            <ResultsListItem
                key={volunteerEvent.id}
                eventTitle={volunteerEvent.eventTitle}
                description={volunteerEvent.description}
                eventDate={volunteerEvent.eventDate}
                eventTime={volunteerEvent.eventTime}
                organization={volunteerEvent.organization}
                experience={volunteerEvent.experience}
                zipcode={volunteerEvent.zipcode}
                volNum={volunteerEvent.volNum}
                link={volunteerEvent.link}
            />
        )
    }
}; 

export default Details;