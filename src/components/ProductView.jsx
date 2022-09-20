import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import numberWithCommas from '../utils/numberWithCommas';

const ProductView = props => {

    const product = props.product;

    const [previewImg, setPreviewImg] = useState(product.image01);

    const [descriptionExpand, setDescriptionExpand] = useState(false);

    return (
        <div className='product'>
            <div className='product__images'>
                <div className='product__images__list'>
                    <div className='product__images__list__item' onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className='product__images__list__item' onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className='product__images__main'>
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className='product-description__title'>
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                    <div className="product-description__toggle">
                        <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? "Thu gọn" : "Xem thêm"
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1><div className="product__info__title">{product.title}</div></h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithCommas(product.price)}
                    </span>
                </div>
                <div className="product__info__item">
                    <span className="product__info__item__title">
                        Màu sắc
                    </span>
                    <div className="product__info__item__list">
                        {
                            product.colors.map((item, index) => (
                                <div key={index} className='product__info__item__list__item'>
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductView.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductView;