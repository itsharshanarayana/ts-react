import styles from './approval-card.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface ApprovalCardProps {
  children?: React.ReactNode
}

const ApprovalCard: React.FC<ApprovalCardProps> = (props) => {
  console.log(props);
  return (
    <div className="ui card">
      <div className="content">
        {props.children}
      </div>
      <div className="extra content">
        <div className="ui two buttons">

          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalCard;
