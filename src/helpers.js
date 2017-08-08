export const sort=(items,param)=>{
  let paramA,paramB;
  return items.sort(function (a, b) {
    if(param.field=="date"){
      param.order?(paramA=a[param.field], paramB=b[param.field]):(paramB=a[param.field], paramA=b[param.field]);
      return new Date(paramA) - new Date(paramB);
    }
    else if(param.field=="name")
    {
      param.order?(paramA=a[param.field].toLowerCase(), paramB=b[param.field].toLowerCase()):(paramB=a[param.field].toLowerCase(), paramA=b[param.field].toLowerCase());
      if (paramA < paramB)
        return -1;
      if (paramA > paramB)
        return 1;
      return 0;
    }
  });
}  