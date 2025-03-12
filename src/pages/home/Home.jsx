import React from 'react'
import Layout from '../../components/layout/Layout'
import Herosection from '../../components/herosection/Herosection'
import Category from '../../components/category/Category'
import Productcard from '../../components/productcard/Productcard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonal/Testimonal'
import Context from '../../context/Context'
import { useContext } from 'react'

const Home = () => {
  const ContextValue = useContext(Context);
    const name = ContextValue
  return (
    <Layout>
         <Herosection/>
         <Category/>
       <Productcard/>
       <Track/>
       <Testimonial/>
     {name}
    </Layout>
  )
}

export default Home
