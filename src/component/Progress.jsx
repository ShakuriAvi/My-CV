import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: '50%',
        backgroundColor: "#708090",
        borderRadius: 50,
        margin: 5,
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",

    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;


