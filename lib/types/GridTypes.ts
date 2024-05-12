import { ReactNode } from 'react';

export type ItemData = {
    // A string corresponding to the component key
    i: string;

    // These are all in grid units, not pixels
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    maxW?: number;
    minH?: number;
    maxH?: number;

    // If true, equal to `isDraggable: false, isResizable: false`.
    static: boolean;
    // If false, will not be draggable. Overrides `static`.
    isDraggable: boolean;
    // If false, will not be resizable. Overrides `static`.
    isResizable: boolean;
    // By default, a handle is only shown on the bottom-right (southeast) corner.
    // As of RGL >= 1.4.0, resizing on any corner works just fine!
    resizeHandles?: Array<'s' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'>;
    // If true and draggable, item will be moved only within grid.
    isBounded: boolean;
};

export type ItemComponent = {
    itemData: ItemData;
    component: ReactNode;
};

export type DraggedItem = {
    i: String;
    component: ReactNode;
};
