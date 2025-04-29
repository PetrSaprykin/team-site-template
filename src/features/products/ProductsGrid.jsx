import '../../shared/styles/global.css'

import { For } from 'solid-js'

import products from '../../../products'
import ProductCard from './components/ProductCard'
import styles from './ProductsGrid.module.css'

export default function ProductsGrid(props) {
  return (
    <div class={styles.productsGrid}>
      <For each={products}>{(product) => <ProductCard product={product} onMemberSelect={props.onMemberSelect} />}</For>
    </div>
  )
}
