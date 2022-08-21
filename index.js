// code your solution here
function superbowlWin(games){
   
  let target = games.find((elem,index,arr)=>{
    return elem.result === 'W'
  })

  if (target){
    return target.year
  }
  return undefined
}
