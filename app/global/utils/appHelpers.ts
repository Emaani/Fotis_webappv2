
// export const getAccessTokenFromStorage=()=>{
//     return localStorage.getItem('accessToken');
// }

export const getAccessTokenFromStorage = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('accessToken');
  }
  // Fallback solution when localStorage is not available
  return null;
};

export const reduceDecimals = (value: number, points:number) => {
  return parseFloat(value.toFixed(points))
}

