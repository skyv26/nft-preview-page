import React from 'react';
import styles from './ImageContainer.module.css';
import NFTImage from '../../assests/image-equilibrium.jpg';
import IconView from '../../assests/icon-view.svg';

const ImageContainer = (props) => {
    return (
        <section className={styles.ImageContainer}>
            <img src={NFTImage} alt="NFT the future business" />
            <figcaption className={styles.FigCaption}>
                <img src={IconView} alt="Watch eye symbol" className={styles.IconView} />
            </figcaption>
        </section>
    );
}

export default ImageContainer;