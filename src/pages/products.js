import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import ProductCard from "../components/ProductCard"
import styled from "styled-components"


const Products = ({data}) => {
    const { nodes } = data.allShopifyProduct
   /*
    return(
       <div>
           <Wrapper>
           {
           nodes?.map((product, index) => <ProductCard key={index} product={product}/>)
            }
            </Wrapper>
       </div>
    )
    */
    return (
      <Layout>
        <Wrapper>
          {nodes?.map((product, index) => (<ProductCard key={index} product={product} />))}
        </Wrapper>
      </Layout>)
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
              featuredImage {
                src
              }
           }
        }
    }
`

const Wrapper= styled.div`
display: grid;
margin: 40px;
grid-template-columns: repeat(3, auto);
justify-content: left;
gap:40px;
max-width: 1234px;

`

