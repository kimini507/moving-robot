import { useEffect, useRef } from "react";
import classes from "./LogPanel.module.css";

function LogPanel({ logs = [], header }) {
  const logListRef = useRef(null);

  useEffect(() => {
    // need to use babel
    logListRef.current?.lastElementChild?.scrollIntoView();
  }, [logs]);

  return (
    <div className={classes.logPanelContainer}>
      {header && <div className={classes.logPanelHeader}>{header}</div>}
      <div className={classes.logsContainer} ref={logListRef}>
        {logs.map((v, i) => (
          <div key={i}>{v}</div>
        ))}
      </div>
    </div>
  );
}

export default LogPanel;
