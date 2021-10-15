import React, {useState} from "react";
import {Avatar} from "../../atoms/Avatar/Avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins, faComment} from "@fortawesome/free-solid-svg-icons";
import {Wrapper, StyledAvatar, StyledPostWrapper, StyledUser, StyledName, StyledUserName, PostText, PostImg, StatContainer, Stats, Likes} from "./PostListItem.styles";


const PostListItem = ({name, userName, text, avatarImg, img, likes} ) => {

    const [likesCounter, setLikesCounter] = useState(likes)
    const [isLiked, setIsLiked] = useState(false)

    const handleLike = () => {
        isLiked ? setLikesCounter(likesCounter - 1) : setLikesCounter(likesCounter + 1);
        setIsLiked(!isLiked);
    }

    return (
        <Wrapper>
            <StyledAvatar>
                <Avatar imgSrc={avatarImg}/>
            </StyledAvatar>
            <StyledPostWrapper>
                <StyledUser>
                    <StyledName>{name}</StyledName>
                    <StyledUserName>{userName}</StyledUserName>
                </StyledUser>
                <PostText>
                    {text}
                </PostText>
                {img === '' ? null :
                    <PostImg>
                        <img src={img} alt='Post picture' />
                    </PostImg>
                }
                <Stats>
                    <StatContainer liked={isLiked} tabIndex='0' onClick={handleLike}>
                        <FontAwesomeIcon icon={faCoins} />
                        <Likes>{likesCounter}</Likes>
                    </StatContainer>
                    <StatContainer tabIndex='0'>
                        <FontAwesomeIcon icon={faComment} />
                        <p>13</p>
                    </StatContainer>
                </Stats>
            </StyledPostWrapper>
        </Wrapper>
    )
}




export default PostListItem;