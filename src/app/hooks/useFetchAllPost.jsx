import React, { useEffect } from 'react'

export default  function useFetchAllPost() {
   const [loading, setLoading] = React.useState(true)
   const [error, setError] = React.useState(null)
   const [allPost, setAllPost] = React.useState([])

   const fetchData = async () => {
      setLoading(true)
      try {

         await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
               return setAllPost(json)
            })
         setLoading(false)
      }
      catch (error) {
         setLoading(false)
         setError(error)
      }
   }

   useEffect(() => {
      fetchData()
   }, [])


   return { allPost, loading, error }
}
