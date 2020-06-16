import React from "react";

function Card({ icon, title, children }) {
    return (
        <div className="card mt-4">
            <div className="card-header">
                <h1>
                    <strong>
                        <i className={`fa fa-${icon}`} aria-hidden="true" />
                        {title}
                    </strong>
                </h1>
            </div>
            <div className="card-body">{children}</div>
        </div>
    );
}

export default Card;