import React from "react";
import "./style.css";

function Map () {
    return(
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="span8">
            <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=15+Springfield+Way,+Hythe,+CT21+5SH&aq=t&sll=52.8382,-2.327815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"></iframe>
        </div>
        <div class="span4">
        </div>
    </div>
   ) 
}

export default Map;