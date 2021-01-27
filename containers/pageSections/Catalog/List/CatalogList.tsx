import React from 'react';
import { PaginationButton, ProductsCard } from 'components';
import { routesConfig } from 'config/routes/routes';
import { useRouter } from 'next/router';
import { CatalogListWrapper } from './styles/styles';

const CatalogList = ({ products }) => {
  const { push } = useRouter();
  const goLocation = ({
    name, prefix, _id,
  }) => {
    const path = routesConfig.getProductItemRoute();
    push({ pathname: path, query: { title: name, prefix, id: _id } }, path);
  };

  return (
    <CatalogListWrapper>
      <ProductsCard dataSource={products} goLocation={goLocation} />
      <PaginationButton />
    </CatalogListWrapper>
  );
};

export default CatalogList;
