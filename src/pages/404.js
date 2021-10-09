import { navigate } from 'gatsby-link'
import { useEffect } from 'react'

const NotFoundPage = () => {
  useEffect(()=>{
    navigate('/')
  },[])
  return null
}

export default NotFoundPage
