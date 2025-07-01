export const getAssetURl = (image)=>{
  return new URL(`../assets/img/${image}`,import.meta.url).href
}