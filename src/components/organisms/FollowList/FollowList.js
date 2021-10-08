import React, { useState } from "react";
import FollowListItem from "components/moleculs/FollowListItem/FollowListItem";
import { users as usersData } from "data/users";
import { Wrapper } from "./FollowList.styles";
import { Title } from "components/atoms/Title/Title";

const FollowList = () => {
  const [users, setUsers] = useState(usersData);

  console.log(users);

  const followUser = (userName) => {
    const newUsers = users.filter((user) => user.userName !== userName);
    setUsers(newUsers);
    console.log(users);
  };

  return (
    <Wrapper>
      <Title text="People you may know" />
      {users.slice(0, 4).map(({ name, userName, imgSrc }) => (
        <FollowListItem name={name} userName={userName} imgSrc={imgSrc} followUser={followUser} />
      ))}
    </Wrapper>
  );
};

export default FollowList;
