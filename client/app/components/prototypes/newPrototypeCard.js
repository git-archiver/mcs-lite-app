import { connect } from 'react-redux';
import React, { Component } from 'react';

import newPrototypeCardStyles from './newPrototypeCard.css';
import CreateNewPrototypeDialog from './dialogs/createNewPrototype';

import Button from 'mtk-ui/lib/Button';

import { default as compose } from 'recompose/compose';
import { default as pure } from 'recompose/pure';
import { default as withState } from 'recompose/withState';
import { default as withHandlers } from 'recompose/withHandlers';

const NewPrototypeCardLayout = ({
  isCreatePrototype,
  openCreatePrototype,
  setIsCreatePrototype,
  prototypeName,
}) => {
  return (
    <div className={newPrototypeCardStyles.base}>
      <CreateNewPrototypeDialog
        isCreatePrototype={isCreatePrototype}
        setIsCreatePrototype={setIsCreatePrototype}
      />
      Create your prototype now!
      <Button type="submit" className={newPrototypeCardStyles.button} onClick={openCreatePrototype}>
        Create
      </Button>
    </div>
  );
}

export default compose(
  pure,
  withState('isCreatePrototype', 'setIsCreatePrototype', false),
  withHandlers({
    openCreatePrototype: props => () => props.setIsCreatePrototype(true),
  }),
)(NewPrototypeCardLayout)