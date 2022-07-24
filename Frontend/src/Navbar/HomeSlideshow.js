import React from 'react'
import { Footer } from '../pages/Footer/Footer'
import Categories from './Categories'
import ParentCategory from './CategoriesOfCategories/ParentCategory'
import SlideShowImg from './SlideShowImg'

export default function HomeSlideshow() {
  return (
    <div>
    <ParentCategory/>  
<SlideShowImg/>
<Categories/>
<Footer/>
    </div>
  )
}
