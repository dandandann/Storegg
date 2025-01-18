import { useQueries, useQuery } from "@tanstack/react-query"
import axios from "axios"


const listApi = axios.create({
    baseURL : 'https://fakestoreapi.com/'
})


export const useApi = <T>(url: string, key: unknown[]) => {
    const {isLoading,
          error,
          data
     } = useQuery({
      queryKey: key,
      queryFn: async () => {
        return await getApi<T>(url);
      },
    })
  
    return { error, isLoading, data }
}



export const getApi = async <T>(url: string) => {
    const response = await listApi.get<T>(url);
    return response.data;
}
  

