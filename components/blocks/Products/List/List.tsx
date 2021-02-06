import React from 'react';
import { List, Card, Typography } from 'antd';
import { IProductsCard } from 'types/products-cards';
import styles from './ProductsCards.module.scss';
import { ProductCardFooter } from '../styles';

const ProductsList = ({ dataSource, goLocation }: IProductsCard) => (
  <List
    dataSource={dataSource}
    rowKey="_id"
    grid={{
      gutter: 20,
      column: 4,
    }}
    className={styles.root}
    pagination={{ pageSize: 8, position: 'bottom' }}
    renderItem={(item) => (
      <List.Item onClick={() => goLocation(item)}>
        <Card hoverable cover={<img src={item.image} height={300} alt="" />}>
          <Typography.Title level={5} className={styles.title}>
            {item.name}
          </Typography.Title>
          <ProductCardFooter>
            <Typography.Text type="secondary" className={styles.textDiscount}>
              {400}
            </Typography.Text>
            <Typography.Text type="danger" strong>
              {item.price}
            </Typography.Text>
          </ProductCardFooter>
        </Card>
      </List.Item>
    )}
  />
);

export default ProductsList;
