import React from 'react';
import styles from './NftCardInfo.module.css';
import NftImage from '../../assests/icon-ethereum.svg'
import IconClock from '../../assests/icon-clock.svg';

const NftCardInfo = (props) => {
    return (
        <section className={styles.NftCardInfo}>
            <h1 className={styles.NftTitle}>Equilibrium #3429</h1>
            <p className={styles.NftDesc}>Our Equilibrium collection promotes balance and calm.</p>
            <div className={styles.Aside}>
                <aside className={styles.NftType}>
                    <img src={NftImage} alt="NFT Type Symbol" />
                    <p className={styles.NftPrice}>0.041 ETH</p>
                </aside>
                <aside className={styles.NftTimeLeft}>
                    <img src={IconClock} alt="Time Clock" />
                    <p className={styles.NftSaleLeft}>3 days left</p>
                </aside>
            </div>
        </section>
    );
}

export default NftCardInfo;