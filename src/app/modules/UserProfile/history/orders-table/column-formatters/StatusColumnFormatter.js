import React from "react";
import {
  ProductStatusCssClasses,
  ProductStatusTitles
} from "../../HistoryOrdersUIHelpers";

export const StatusColumnFormatter = (cellContent, row) => (
  <span
    className={`label label-lg label-light-${
      ProductStatusCssClasses[row.status]
    } label-inline`}
  >
    {ProductStatusTitles[row.status]}
  </span>
);
