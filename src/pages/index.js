import React from "react"
import { graphql } from "gatsby"

const Products = ({ data }) => {
	console.log(data)
	return <div></div>
}

export default Products

export const query = graphql`
	{
		allShopifyProduct {
			nodes {
				title
				handle
				variants {
        	shopifyId
      	}
				priceRangeV2 {
					maxVariantPrice {
						amount
					}
				}
				description
				
			}
		}
	}
`