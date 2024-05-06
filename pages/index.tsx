import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Grid from '@components/Grid/Grid';
import { useState } from 'react';

export default function Home() {
    const [items, setItems] = useState([]);
    const [layout, changeLayout] = useState([]);

    const onDrop = () => {};

    return (
        <>
            <Head>
                <title>NaviTrack</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className="border"
                draggable={true}
                unselectable="on"
                // this is a hack for firefox
                // Firefox requires some kind of initialization
                // which we can do by adding this attribute
                // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
                onDragStart={(e) => e.dataTransfer.setData('text/plain', '')}
            >
                Droppable Element (Drag me!)
            </div>
            <Grid items={items} onDrop={onDrop} />

            <Footer />
        </>
    );
}
