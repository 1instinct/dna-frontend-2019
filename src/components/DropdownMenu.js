// @flow
/* eslint-disable flowtype/require-return-type */
import * as React from "react";
import onClickOutside from "react-onclickoutside";
import styled from "styled-components";
import BrandText from "./BrandText";
import { Colors } from "../constants";
// import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListButton = styled.div`
  cursor: pointer;
`;

const ListItems = styled.div`
  background-color: ${Colors.pink};
  position: absolute;
  top: 25px;
  left: -5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;
  text-decoration: none;
`;

const ListItem = styled.div`
  padding-bottom: 10px;
  cursor: pointer;
`;

type ListItemType = {
  title: string,
  path: string
};

type PropsType = {
  listItems: ListItemType[],
  menuTitle: string,
  history: {
    push: (path: string) => void
  }
};

// TODO: If more than one of these is mounted at a time
// then this handleClickOutside will NOT work.
// DOCS: https://github.com/Pomax/react-onclickoutside

const DropdownMenu = (props: PropsType) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { listItems, history, menuTitle } = props;
  DropdownMenu.handleClickOutside = () => setIsOpen(false);
  return (
    <Wrapper>
      <ListButton onClick={() => toggle()}>
        <BrandText
          size={20}
          color={Colors.darkNavy}
          hoverColor={Colors.white}
          {...props}
        >
          {menuTitle}
        </BrandText>
      </ListButton>
      {isOpen && (
        <ListItems>
          {listItems.map((item: ListItemType) => (
            <ListItem
              key={item.title}
              onClick={() => {
                toggle();
                history.push(item.path);
              }}
            >
              <BrandText
                size={16}
                color={Colors.darkNavy}
                hoverColor={Colors.white}
              >
                {item.title}
              </BrandText>
            </ListItem>
          ))}
        </ListItems>
      )}
    </Wrapper>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => DropdownMenu.handleClickOutside
};

export default onClickOutside(DropdownMenu, clickOutsideConfig);
