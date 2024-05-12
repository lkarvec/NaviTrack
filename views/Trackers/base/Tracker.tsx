import React from 'react';
import Card from '@components/Card/Card';
import Button from '@components/Button/Button';

import classes from './Tracker.module.scss';

/**
 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @returns {JSX} Tracker Component
 */

const Tracker = (props) => {
    const { onCloseItem, i } = props;

    return (
        <Card key="Tracker">
            test <Button handleClick={() => onCloseItem(i)} />
        </Card>
    );
};

export default Tracker;
