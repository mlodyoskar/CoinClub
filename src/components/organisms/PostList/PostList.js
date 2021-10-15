import React, {useState} from "react";
import PostListItem from "components/moleculs/PostListItem/PostListItem";
import {posts} from "data/posts";
import {users} from "data/users";

const PostList = () => {
    const [postsData, setPostsData] = useState(posts)
    const [userData, setUserData] = useState(users)

    postsData.map(post => {
        post.name = userData[post.userId].name;
        post.userName = userData[post.userId].userName;
        post.avatarImg = userData[post.userId].imgSrc;
    })

    return (
        postsData.map(post => PostListItem(post))
    )
}

export default PostList;