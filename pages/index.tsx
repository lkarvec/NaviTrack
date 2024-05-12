import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Grid from '@components/Grid/Grid';
import { ReactNode, useState } from 'react';
import { ItemComponent, DraggedItem } from '../lib/types/GridTypes';
import Tracker from '../views/Trackers/base/Tracker';

export default function Home() {
    const [items, setItems] = useState<ItemComponent[]>([]);
    const [dragItem, setDraggedItem] = useState<DraggedItem>();
    const [index, setIndex] = useState<number>(0);

    const onDrop = (layout, layoutItem, _event) => {
        setItems([...items, { itemData: { ...layoutItem, i: dragItem.i }, component: dragItem.component }]);
    };

    const onLayoutChange = (items) => {
        console.log('layoutChanged');
    };

    const onCloseItem = (i: string) => {
        console.log(i);
        console.log(items);
        //setItems(items.filter((itemComponent: ItemComponent) => itemComponent.itemData.i !== i));
    };

    return (
        <>
            <Head>
                <title>NaviTrack</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                key="1"
                className="border"
                draggable={true}
                unselectable="on"
                // this is a hack for firefox
                // Firefox requires some kind of initialization
                // which we can do by adding this attribute
                // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
                onDragStart={(e) => {
                    setDraggedItem({
                        i: `Tracker-${index + 1}`,
                        component: <Tracker key={`Tracker-${index + 1}`} onCloseItem={onCloseItem} i={`Tracker-${index + 1}`} />,
                    });
                    setIndex(index + 1);
                    e.dataTransfer.setData('text/plain', '');
                }}
            >
                Droppable Element (Drag me!)
            </div>
            <Grid items={items} onDrop={onDrop} setLayout={onLayoutChange} closeItem={onCloseItem} />

            <Footer />
        </>
    );
}
