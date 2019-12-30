import React, { useState, useEffect } from "react";
import classnames from "classnames";

import { colors } from "../../styles/theme";

const Pagination = ({ totalPages, currentPage, onChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const [activePage, setActivePage] = useState(+currentPage || 1);

  useEffect(() => {
    if (currentPage) {
      setActivePage(+currentPage);
    }
  }, [currentPage]);

  return (
    <>
      <div className="pagination">
        {pages.map(pageN => (
          <div
            key={pageN}
            className={classnames("step", { active: pageN === activePage })}
            onClick={() => {
              setActivePage(pageN);
              onChange(pageN);
            }}
          >
            {pageN}
          </div>
        ))}
      </div>
      <style jsx>{`
        .pagination {
          display: flex;
          margin: -10px;
        }

        .step {
          width: 36px;
          height: 36px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: solid 1px ${colors.lightGrey};
          margin: 10px;
          font-size: 18px;
          font-weight: 500;
          color: ${colors.grey};
          cursor: pointer;
        }

        .step.active {
          border: solid 1px transparent;
          background-color: ${colors.lightBlue};
          color: ${colors.white};
        }
      `}</style>
    </>
  );
};

export default Pagination;
