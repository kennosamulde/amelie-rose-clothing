import React from "react"

import CollectionItem from "../collection-item/collection-item.component"
import { withRouter } from "react-router-dom"
import { CollectionPreviewContainer, PreviewHeader, Title, Preview, RightIcon, SeeMore } from "./collection-preview.styles"

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <PreviewHeader>
        <Title>{title}</Title>
        <SeeMore to={`/shop/${routeName}`}>
          See more <RightIcon />
        </SeeMore>
      </PreviewHeader>
      <Preview>
        {items
          .filter((item, index) => index < 5)
          .map((item) => (
            <CollectionItem key={item.id} item={item} routeName={routeName} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview)
