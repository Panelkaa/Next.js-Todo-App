  export const getAllPosts = async () => {
    try {
        const response = await fetch (`https://jsonplaceholder.typicode.com/posts`, {
          next: {
            revalidate: 60
          }
        })
        return response.json()
      }
      catch {
        throw new Error('Unable to fetch post!!!')
      }
  }

  export const getPostsBySearch = async (search: string) => {
    try {
        const response = await fetch (`https://jsonplaceholder.typicode.com/posts?q=${search}`, {
          next: {
            revalidate: 60
          }
        })
        return response.json()
      }
      catch {
        throw new Error('Unable to fetch post!!!')
      }
  }