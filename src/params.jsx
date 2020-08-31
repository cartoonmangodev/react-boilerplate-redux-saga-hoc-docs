import React from "react";
import t from "prop-types";

// const kinds = {
//   info: "#5352ED",
//   positive: "#2ED573",
//   negative: "#FF4757",
//   warning: "#FFA502",
// };

export const Api = ({ children, kind, ...rest }) => (
  <div
    style={{
      padding: 3,
      borderRadius: 3,
      color: "white",
      background: "red",
    }}
    {...rest}
  >
    {children}
  </div>
);

Api.propTypes = {
  task: t.shape({ name: t.string }),
  tasks: t.arrayOf(t.object),
  request: t.object,
  error: t.object,
  loader: t.bool,
  callback: t.object,
  filter: t.oneOfType([t.arrayOf(t.string), t.arrayOf(t.arrayOf(t.string))]),
  callback: t.object,
};

Api.defaultProps = {
  task: "Data-Handler",
};
export const Request = ({ children, kind, ...rest }) => (
  <div
    style={{
      padding: 3,
      borderRadius: 3,
      color: "white",
      background: "red",
    }}
    {...rest}
  >
    {children}
  </div>
);

Request.propTypes = {
  query: t.object,
  params: t.object,
  payload: t.object,
  axiosConfig: t.object,
  paramSerializer: t.object,
  asyncFunction: t.func,
  asyncFunctionParams: t.array,
  retry: t.bool,
  errorParser: t.bool,
  polling: t.bool,
  pollingCount: t.number,
  delay: t.number,
  clearDataOnError: t.bool,
  errorDataHandling: t.bool,
  defaultErrorParser: t.bool,
};

Request.defaultProps = {
  paramSerializer: { arrayFormat: "brackets" },
  errorParser: false,
  retry: 0,
  polling: false,
  delay: 8000,
  clearDataOnError: false,
  errorDataHandling: true,
  defaultErrorParser: false,
};
export const Callback = ({ children, kind, ...rest }) => (
  <div
    style={{
      padding: 3,
      borderRadius: 3,
      color: "white",
      background: "red",
    }}
    {...rest}
  >
    {children}
  </div>
);

Callback.propTypes = {
  successCallback: t.func,
  errorCallback: t.func,
  finalCallback: t.func,
  pollingCallback: t.func,
  updateStateCallback: t.func,
};

export const task = ({ children, kind, ...rest }) => (
  <div
    style={{
      padding: 3,
      borderRadius: 3,
      color: "white",
    }}
    {...rest}
  >
    {children}
  </div>
);

task.propTypes = {
  /**
   *  Type of task to execute
   */
  name: t.oneOf([
    "Data-Handler",
    "Infinite-Handler",
    "Delete-Handler",
    "Update-Handler",
    "Update-Key-Handler",
    "Toggle-Key-Handler",
    "Splice-Data-Handler",
    "Delete-Key-Handler",
    "Don't-Update-Data-Handler",
    "Custom-Handler",
  ]),
  /**
   *  clear previous stored data
   */
  clearData: t.oneOf([true, false]),
  /**
   * accessing the deep object in a particulr reducer
   */
  subKey: t.arrayOf(t.string),
  isAppendTop: t.oneOf([true, false]),
  deleteKey: t.arrayOf(t.oneOfType([t.string, t.arrayOf(t.string)])),
  id: t.oneOfType([
    t.number,
    t.string,
    t.arrayOf(t.string),
    t.arrayOf(t.number),
  ]),
  key: t.string,
  spliceKey: t.arrayOf(t.number),
  toggleKey: t.oneOf([true, false]),
  updateCallback: t.func,
};

task.defaultProps = {
  name: "Data-Handler",
  clearData: false,
};
