import React from 'react';

import Helmet from '../components/Helmet';
import Section, { SectionBody, SectionTitle } from '../components/Section'

import productData from '../assets/fake-data/product';

const Product = (props) => {

    const product = productData.getProductBySlug(props.match.params.slug);
    return (
        <Helmet title={product.title}>

        </Helmet>
    );
};

export default Product;