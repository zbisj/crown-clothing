import React from 'react';

import CollectionItem from '../collection-item/CollectionItem'
import { PreviewContainer, Title, Preview} from './collection-preview.styles'

const CollectionPreview = ({title, items}) => (

  <PreviewContainer>
    <Title>{ title.toUpperCase() }</Title>
    <Preview>
      {
        items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </Preview>
  </PreviewContainer>
);

export default CollectionPreview;
