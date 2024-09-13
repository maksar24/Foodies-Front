import { PlusOutlined } from "@ant-design/icons";
import React from "react";

import {
  CardBox,
  CustomAvatar,
  AvatarWrapper,
  PlusIcon,
  UserName,
  UserInfo,
  UserDetail,
  UserDetailNumber,
} from "./UserInfoCard.styled";

export const UserInfoCard = ({
  name,
  email,
  avatar,
  createdRecipeCount = 0,
  favoriteRecipeCount = 0,
  followersCount = 0,
  followingCount = 0,
  onUpdateAvatar,
  isCurrentUser,
}) => (
  <CardBox>
    <AvatarWrapper>
      <CustomAvatar src={avatar} alt="User Avatar" />
      {isCurrentUser && (
        <PlusIcon onClick={onUpdateAvatar}>
          <PlusOutlined />
        </PlusIcon>
      )}
    </AvatarWrapper>

    <UserName>{name}</UserName>

    <UserInfo>
      <UserDetail>
        Email: <UserDetailNumber>{email}</UserDetailNumber>
      </UserDetail>
      <UserDetail>
        Added recipes: <UserDetailNumber>{createdRecipeCount}</UserDetailNumber>
      </UserDetail>
      {isCurrentUser && (
        <UserDetail>
          Favorites: <UserDetailNumber>{favoriteRecipeCount}</UserDetailNumber>
        </UserDetail>
      )}
      <UserDetail>
        Followers: <UserDetailNumber>{followersCount}</UserDetailNumber>
      </UserDetail>
      {isCurrentUser && (
        <UserDetail>
          Following: <UserDetailNumber>{followingCount}</UserDetailNumber>
        </UserDetail>
      )}
    </UserInfo>
  </CardBox>
);
