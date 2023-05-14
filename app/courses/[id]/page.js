import React from 'react'
import getData from '../../querries/getData'
import GetData from '@/app/courses/components/GetData';
import styles from '../../page.module.css'
import getProducts from '@/app/querries/getProducts';

export const generateStaticParams = async () => {
  const data = await getData();
  const {products}= data
  return products?.map((product) => ({
    id: product.id.toString(),
  }));
};

export default async function page() {
const products = await getProducts();
console.log(products)

  return (
    <main className={styles.main}>
        <GetData />
    </main>
  )
}
