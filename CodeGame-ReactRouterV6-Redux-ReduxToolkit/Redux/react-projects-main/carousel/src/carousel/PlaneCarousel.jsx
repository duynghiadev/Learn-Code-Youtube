import React, { useState } from "react";

function getAsGroupNoToIndex(totalNoOfCards, shownAtOnce) {
  const noOfGroups = Math.ceil(totalNoOfCards / shownAtOnce);

  const groupNoToIndex = {};

  for (let i = 1; i <= noOfGroups; i++) {
    let startIndex = (i - 1) * shownAtOnce;
    let endIndex = i * shownAtOnce - 1;

    for (let j = startIndex; j <= endIndex; j++) {
      if (groupNoToIndex[i]) {
        if (j < totalNoOfCards) {
          groupNoToIndex[i].push(j);
        }
      } else {
        groupNoToIndex[i] = [j];
      }
    }
  }

  return groupNoToIndex;
}

const PlaneCarousel = ({ children, shownAtOnce }) => {
  const totalNoOfCards = children.length;

  const noOfGroups = Math.ceil(totalNoOfCards / shownAtOnce);

  const [currentGrp, setCurrentGrp] = useState(1);

  const groupNoToIndex = getAsGroupNoToIndex(totalNoOfCards, shownAtOnce);

  const handlePrevious = () => {
    if (currentGrp === 1) {
      setCurrentGrp(noOfGroups);
    } else {
      setCurrentGrp((val) => val - 1);
    }
  };

  const handleNext = () => {
    if (currentGrp === noOfGroups) {
      setCurrentGrp(1);
    } else {
      setCurrentGrp((val) => val + 1);
    }
  };

  return (
    <div>
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${shownAtOnce}, 1fr)` }}
      >
        {groupNoToIndex[currentGrp].map((index) => {
          return children[index];
        })}
      </div>

      <div className="btn-grp">
        <button className="btn" onClick={handlePrevious}>
          Left
        </button>
        <button className="btn" onClick={handleNext}>
          Right
        </button>
      </div>
    </div>
  );
};

export default PlaneCarousel;
