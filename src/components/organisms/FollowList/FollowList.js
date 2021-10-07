import React, { useState } from "react";
import FollowListItem from "components/moleculs/FollowListItem/FollowListItem";
import { users as usersData } from "data/users";
import { Wrapper } from "./FollowList.styles";

const FollowList = () => {
  const [users, setUsers] = useState(usersData);

  return (
    <Wrapper>
      {users.map(({ name, userName }) => (
        <FollowListItem name={name} userName={userName} />
      ))}
    </Wrapper>
  );
};

export default FollowList;
