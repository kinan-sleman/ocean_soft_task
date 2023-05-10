import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"; // import the ExpandMore icon
import FilterListIcon from "@material-ui/icons/FilterList";
import '../styles/group.css';
function Group() {
    return (
        <div className="group">
            <div className='child1'>
                <div>
                    Make Up Type <ExpandMoreIcon style={{ fontSize: "1rem" }} /> {/* add the ExpandMore icon */}
                </div>
                <div>
                    Price <ExpandMoreIcon style={{ fontSize: "1rem" }} /> {/* add the ExpandMore icon */}
                </div>
                <div>
                    Review <ExpandMoreIcon style={{ fontSize: "1rem" }} /> {/* add the ExpandMore icon */}
                </div>
                <div>
                    Color <ExpandMoreIcon style={{ fontSize: "1rem" }} /> {/* add the ExpandMore icon */}
                </div>
                <div>
                    Material <ExpandMoreIcon style={{ fontSize: "1rem" }} /> {/* add the ExpandMore icon */}
                </div>
                <div>
                    Offer <ExpandMoreIcon style={{ fontSize: "1rem" }} /> {/* add the ExpandMore icon */}
                </div>
                <div>
                    All filter <FilterListIcon style={{ fontSize: "1rem" }} /> {/* add the ExpandMore icon */}
                </div>
            </div>
            <div className="child2">
                Sort By <ExpandMoreIcon style={{ fontSize: "1rem" }} /> 
            </div>
        </div>
    );
}

export default Group;