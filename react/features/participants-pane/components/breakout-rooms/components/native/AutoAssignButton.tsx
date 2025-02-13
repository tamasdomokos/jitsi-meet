/* eslint-disable lines-around-comment */
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../../../../base/ui/components/native/Button';
import { BUTTON_TYPES } from '../../../../../base/ui/constants';
// @ts-ignore
import { autoAssignToBreakoutRooms } from '../../../../../breakout-rooms/actions';

// @ts-ignore
import styles from './styles';

/**
 * Button to auto assign participants to breakout rooms.
 *
 * @returns {JSX.Element} - The auto assign button.
 */
const AutoAssignButton = () => {
    const dispatch = useDispatch();

    const onAutoAssign = useCallback(() => {
        dispatch(autoAssignToBreakoutRooms());
    }, [ dispatch ]);

    return (
        <Button
            accessibilityLabel = 'breakoutRooms.actions.autoAssign'
            label = 'breakoutRooms.actions.autoAssign'
            labelStyle = { styles.autoAssignLabel }
            onPress = { onAutoAssign }
            style = { styles.autoAssignButton }
            type = { BUTTON_TYPES.TERTIARY } />
    );
};

export default AutoAssignButton;
