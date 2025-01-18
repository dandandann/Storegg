import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { useApi, getApi} from "./useApi"


export type productList = {
    id : number
    title : string
    price : number
    image : string

}

export type productDetail = {
    id: number
    title: string
    price: number
    description: string
    image : string
}


export const useProductList = () => {
    const {error, 
        isLoading,
        data} = useQuery({
        queryKey : ['productList'],
        queryFn : async () => {
            return await getApi<productList[]>('products')
        }
    })

   return {error, isLoading, data}
};


export const useProductDetail = (productId : string) => {
    const {error,
           isLoading,
           data} = useQuery({
            queryKey : ['productDetail', productId],
            queryFn : async () => {
                return await getApi<productDetail>(`products/${productId}`)
            }
           })

     

    return {error, isLoading, data}
    
}


