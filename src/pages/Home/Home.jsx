import React from 'react'
import Slider from '../../components/Slider/Slider'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import Homepara from '../../components/HomePara/Homepara'
import FAQ from '../../components/FAQs/Faq'
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <div>
            <Slider />
            <PopularProducts />
            <Homepara />
            <FAQ />
        </div>
    )
}

export default Home