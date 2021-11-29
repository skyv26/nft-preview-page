import React from 'react';
import NftCreatorAvatar from '../../assests/image-avatar.png';
import styles from './NftCreator.module.css';

const NftCreator = (props) => {
    return (
        <section className={styles.NftCreatorSection}>
            <img src={NftCreatorAvatar} alt="NFT creator avatar" />
            <p className={styles.NftCreatorDesc}>Creation of <span>Jules Wyvern</span></p>
        </section>
    );
}

export default NftCreator;