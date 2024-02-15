import React from 'react';
import { Panel } from '../../../components/Panel';

const fakeRecipes = [
  { id: 1, name: 'Pomidorowa' },
  { id: 2, name: 'Kurczak curry' },
  { id: 3, name: 'Sajgonki' },
  { id: 4, name: 'Hamburger' },
  { id: 5, name: 'Schabowy z ziemniakami' }
];

const LastRecipes = () => {
  return (
    <Panel
      title="Ostatnie przepisy"
      theme="is-primary"
      path="recipes"
      iconName="folder"
      listElements={fakeRecipes}
    />
  );
};

export default LastRecipes;
