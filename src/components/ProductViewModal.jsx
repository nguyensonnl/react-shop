import React from 'react';

import productData from '../assets/fake-data/product'
import ProductView from './ProductView'
import Button from './Button'

const ProductViewModal = () => {

    const product = productData.getProductBySlug("quan-jean-phong-cach-10");

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product} />
                <div className="product-view__modal__content__close">
                    <Button
                        size="sm"
                    >
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;