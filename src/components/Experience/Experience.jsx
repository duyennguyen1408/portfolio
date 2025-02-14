import React from "react";
import "./Experience.css";
import history from "../../data/history.json";

function Experience() {
    return (
        <section className="exp-container" id="experience">
            <h2 className="exp-title">Experience</h2>
            <div className="exp-content">
                <ul className="exp-history">
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className="exp-history-item">
                                <img
                                    src={historyItem.imageSrc}
                                    alt={`${historyItem.organisation} Logo`}
                                />
                                <div className="history-item-details">
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <h5>{`${historyItem.startDate} - ${historyItem.endDate}`}</h5>
                                    <p>{historyItem.experience}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Experience;
