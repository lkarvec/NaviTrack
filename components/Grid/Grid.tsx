import React from 'react';
import PropTypes from 'prop-types';
import { Responsive as GridLayout } from 'react-grid-layout';

/**
 * Interactable Grid component that
 * * See https://github.com/react-grid-layout/react-grid-layout for examples and documentation
 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @returns {JSX} Grid Component
 */

const Grid = (props) => {
    const { items, setLayout, onDrop } = props;
    const body = [];
    const layout = [];

    for (const item of items) {
        body.push(<div>{item.component} test</div>);
        layout.push(item.itemData);
    }
    console.log(layout);
    return (
        <GridLayout
            className="layout"
            layout={layout}
            onDrop={onDrop}
            autoSize={true}
            onLayoutChange={setLayout}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
            width={1200}
            isDroppable={true}
        >
            {items.map((item, index) => (
                <div key={`index`}>{item.component}</div>
            ))}
        </GridLayout>
    );
};

export default Grid;
