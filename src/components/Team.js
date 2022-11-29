import React from "react";

export default function Team(props) {
    const membersElement = props.currTeam.map(member => {
        return (
            <div className="member">
                {member}
                <button onClick={() => props.removeFunc(member)}><b>x</b></button>
            </div>
        )
    })

    return (
        <div className="team-container">
            <h2>Your Team</h2>
            <h4>Total HP: {props.totalHP}</h4>
            {membersElement}
        </div>
    )
}