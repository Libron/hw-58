import React from 'react';
import Alert from "../../UI/Alert/Alert";

const Alerts = () => {
    const someHandler = () => null;
    return (
        <div className="alerts container">
            <h2 style={{color: "#a2ca28"}}>Alerts examples:</h2>
            <Alert
                type="primary"
                show={true}
                dismiss={someHandler}
            >This is a primary type alert</Alert>
            <Alert type="success">This is a primary type alert</Alert>

            <Alert
                type="warning"
                show={true}
            >This is a warning type alert</Alert>
            <Alert type="success">This is a warning type alert without dismiss !</Alert>

            <Alert
                type="success"
                show={true}
                dismiss={someHandler}
            >This is a success type alert</Alert>
            <Alert type="danger">This is a success type alert</Alert>

            <Alert
                type="danger"
                show={true}
                dismiss={someHandler}
            >This is a danger type alert</Alert>
            <Alert type="danger">This is a danger type alert</Alert>
        </div>
    );
};

export default Alerts;