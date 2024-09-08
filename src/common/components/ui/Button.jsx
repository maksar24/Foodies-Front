import { Button as AndtButton } from "antd";
import React from "react";
import { styled } from "styled-components";

const StyledButton = styled(AndtButton)`
  box-shadow: none;
  height: unset;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  padding: ${({ children }) =>
    children ? "16px 32px !important" : "16px !important"};
  width: ${({ children, icon }) => !children && icon && "50px !important"};

  &:disabled {
    border-color: transparent;
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Button = ({ ...props }) => (
  <StyledButton {...props} shape="round" />
);
