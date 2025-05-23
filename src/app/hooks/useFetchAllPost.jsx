import React, { useEffect } from 'react'

export default  function useFetchAllPost() {
   const [loading, setLoading] = React.useState(true)
   const [error, setError] = React.useState(null)
   const [allPost, setAllPost] = React.useState([])
   console.log("🚀 ~ useFetchAllPost 99999999999~ allPost:", allPost)

   const fetchData = async () => {
      setLoading(true)
      try {

         await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
               console.log("🚀 ~ fetchData ~ json:", json)
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
