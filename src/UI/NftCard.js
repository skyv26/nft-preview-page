import React from 'react';
import styles from './NftCard.module.css';

const NftCard = (props) => {
    return (
        <main className={styles.NftCard}>
            {props.children}
        </main>
    );
}

export default NftCard;