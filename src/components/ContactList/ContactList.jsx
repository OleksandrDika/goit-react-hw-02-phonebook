import React from 'react';
import { ButtonList, Item } from './ContactList.styled';

export const ContactList = ({ visibleContact, deleteContact }) => {
  return (
    <ul>
      {visibleContact.map(item => {
        return (
          <Item key={item.id}>
            {item.name}:{item.number}
            <ButtonList type="button" onClick={() => deleteContact(item.id)}>
              Delete
            </ButtonList>
          </Item>
        );
      })}
    </ul>
  );
};
