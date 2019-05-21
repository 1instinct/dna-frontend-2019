// @flow
/* eslint-disable flowtype/require-return-type */
import * as React from "react";
import styled from "styled-components";
import { Colors } from "../constants";

type PropsType = {
  bold?: boolean,
  size?: number,
  color?: string,
  hoverColor?: string,
  children: React.Node
};

const Span = styled.span`
  color: ${({ color }: PropsType) => color};
  font-size: ${({ size }: PropsType) => size}px;
  font-weight: ${({ bold }: PropsType) => (bold ? "900" : "initial")};
  text-decoration: none;
  &:hover {
    color: ${({ hoverColor, color }: PropsType) =>
      hoverColor ? hoverColor : color};
  }
`;

class BrandText extends React.Component<PropsType> {
  static defaultProps = {
    color: Colors.black,
    size: 16,
    bold: false
  };

  render() {
    return <Span {...this.props}>{this.props.children}</Span>;
  }
}

export default BrandText;
