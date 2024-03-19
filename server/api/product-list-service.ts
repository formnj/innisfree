export default defineEventHandler(async (event): Promise<Array<object>> => {
  let { redisUse } = getQuery(event)
  redisUse = redisUse === 'Y'

  type Nullable<T> = T | null
  const { innerDomain } = useRuntimeConfig()

  const redis = useStorage('redis')
  const redisKey: string = '{pd}:productlist'
  let products: Nullable<Array<object>> = redisUse
    ? await redis.getItem(redisKey)
    : null

  if (!products) {
    try {
      ;({
        data: { products }
      } = await $fetch(
        `${innerDomain}/product/getProducts?productId=${redisUse ? 1 : 3000}`,
        { method: 'GET' }
      ))
      redisUse && (await redis.setItem(redisKey, products))
    } catch (e) {
      console.error(e)
    }
  }

  return products ?? []
})
