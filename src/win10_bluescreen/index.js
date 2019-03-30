import React from 'react';
import styled from 'styled-components';

const Win10Blue = ({
  className
}) => {
  return (
    <div className={className} style={{height: '100vh'}}>
      <div className="content">
        <div className="face">
          :<span className="mouth">(</span>
        </div>
        <div className="message">
          Your PC ran into a problem and needs to restart.
        </div>
        <div className="message">We couldn't restart your PC automatically.</div>
        <div className="error">
          If you'd like to know more, you can search online later for this error: CRITICAL_PROCESS_DIED
        </div>
        <div className="message">Restart your PC manually</div>
      </div>
    </div>
  );
};

export default styled(Win10Blue) `
position: absolute;
top: 0;
left: 0;
right: 0;
background-color: #0065cc;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Segoe UI light', Arial;
word-break: break-word;
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10%
}

.face {
  font-size: 10em;
  margin-bottom: 50px;
  color: #fff;
}

.error {
  padding: 30px 0 70px 0;
  color: #5bdbea;
}

.message {
  font-size: 2.3em;
  margin-bottom: 5px;
  color: #fff;
}`;