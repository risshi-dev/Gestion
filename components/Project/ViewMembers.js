import { UserOutlined } from "@ant-design/icons/lib/icons";
import { Avatar } from "antd";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeam } from "../../stateManagement/Project/action";
import Project from "../../styles/Project.module.css";
function ViewMembers() {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(getTeam({ projectId: router.query._id }));
  }, []);

  const teams = useSelector((state) => state.projectReducer.team);
  const user = useSelector((state) => state.loginReducer.login);

  return (
    <div className={Project.TeamContainer}>
      {teams.map((member) =>
        member._id === user._id ? (
          <div
            className={`${Project.TeamMember} ${Project.TeamAdmin}`}
            key={member._id}
          >
            <Avatar
              style={{
                backgroundColor: "#3bbfff",
                verticalAlign: "middle",
              }}
              size="large"
              gap={2}
            >
              {member.username[0].toUpperCase()}
            </Avatar>{" "}
            {member.username}
          </div>
        ) : null
      )}

      {teams.map((member) =>
        member._id !== user._id ? (
          <div className={Project.TeamMember} key={member._id}>
            <Avatar
              style={{
                backgroundColor: "#3bbfff",
                verticalAlign: "middle",
              }}
              size="large"
              gap={2}
            >
              {member.username[0].toUpperCase()}
            </Avatar>{" "}
            {member.username}
          </div>
        ) : null
      )}
    </div>
  );
}

export default ViewMembers;
