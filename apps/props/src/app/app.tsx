import {faker} from "@faker-js/faker";
import React from "react";
import CommentDetail from "../components/comment-detail/comment-detail";
import ApprovalCard from "../components/approval-card/approval-card";


const App: React.FC = () => {
  return (

    <div>
      <div>
        <h1>Props 101</h1>
      </div>
      <div>
        <ApprovalCard>Are you sure you want to do this?</ApprovalCard>
      </div>
      <div>
        <ApprovalCard>
          <CommentDetail name="Sam"
                         pic={faker.image.image()}
                         updateTime={new Date().toLocaleDateString()}
                         comment={"Nice blog post!"}
          />
        </ApprovalCard>
      </div>
      <div>
        <ApprovalCard>
          <CommentDetail name="Sam"
                         pic={faker.image.image()}
                         updateTime={new Date().toLocaleDateString()}
                         comment={"Nice blog post!"}
          />
        </ApprovalCard>
      </div>

      <div>
        <ApprovalCard>
          <CommentDetail name="Jack"
                         pic={faker.image.image()}
                         updateTime={new Date().toLocaleDateString()}
                         comment={"Amazing blog post!"}
          />
        </ApprovalCard>
      </div>

      <div>
        <ApprovalCard>
          <CommentDetail name="Jill"
                         pic={faker.image.image()}
                         updateTime={new Date().toLocaleDateString()}
                         comment={"So so blog post!"}
          />
        </ApprovalCard>
      </div>

      <div>
        <ApprovalCard>
          <CommentDetail name="Jane"
                         pic={faker.image.image()}
                         updateTime={new Date().toLocaleDateString()}
                         comment={"So so blog post!"}
          />
        </ApprovalCard>
      </div>

      <div>
        <ApprovalCard>
          <CommentDetail name="Alex"
                         pic={faker.image.image()}
                         updateTime={new Date().toLocaleDateString()}
                         comment={"So so blog post!"}
          />
        </ApprovalCard>
      </div>
    </div>
  );

};
export default App;

