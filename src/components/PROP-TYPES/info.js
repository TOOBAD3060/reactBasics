import React from "react";
// import { ReactPropTypes } from "react";
import DefaultImage from "../../checked.png"
import PropTypes from 'prop-types'
const Info = ({name,age,sex}) => {
    const theName = name && name.firstName
    return <article>
        <h2>{theName  || "ALAGA"}</h2>
        <h4>{sex}</h4>
        <h5> {age || 100} </h5>
    </article>
} 

Info.propTypes = {
    name: PropTypes.object.isRequired,
    age:PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired
};
// Info.defaultProps = {
//     // name:{firstName:"CEO TOOBAD"}, Works staright forward
//     name: "TOOBAD",
//     age:100,
//     sex:"No Identity"

// }


export default Info;