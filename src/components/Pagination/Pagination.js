import React from "react";
import PropTypes from "prop-types";

//Import icons
import { ReactComponent as NextPage } from "../../assets/next.svg";
import { ReactComponent as PrevPage } from "../../assets/prev.svg";

//Import styles
import "./Pagination.css";

// handle pagination with two main buttons
const Pagination = ({ handlePrev, handleNext, disablePrev, disableNext }) => {
  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={disablePrev}>
        <PrevPage className="icon-page" />
        Página anterior
      </button>
      <button onClick={handleNext} disabled={disableNext}>
        Siguiente Página
        <NextPage className="icon-page" />
      </button>
    </div>
  );
};

// PropTypes for typechecking
Pagination.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  disablePrev: PropTypes.bool.isRequired,
  disableNext: PropTypes.bool.isRequired
};
export default Pagination;
