import React from 'react'

interface Props {

}

function findmissining() {
     var arr=[...Array(100).keys()].slice(1)

  let sum=0;
  for(let x in arr){
       sum+=arr[x]
  }
  let len=arr.length+1;
  return Math.floor((len*(len+1))/2)-sum
}
findmissining(array1)


function find10(){
     const arr=["Islamabad", "Gilgit", "Nawabshah", "Karachi",
"Abbotabad", "Gilgit", "Hyderabad", "Islamabad", "Lahore",
"Hyderabad", "Sukkur", "Faisalabad", "Kohat",
"Faisalabad", "Faisalabad", "Faisalabad", "Faisalabad",
"Lahore", "Abbotabad", "Attock", "Karachi", "Rawalpindi",
"Nawab Shah", "Abbotabad", "Sukkur", "Attock", "Multan",
"Faisalabad"];

const obj={
     "Faisalabad": 0,
     "Islamabad": 0,
     "Karachi": 0,
     "Gilgit": 0,
     "Lahore": 0,
     "Hyderabad": 0,
     "Nawab_Shah": 0,
     "Abbotabad": 0,
     "Sukkur": 0,
     "Attock": 0,





}
arr.map(item=>{
     if(item==="Faisalabad"){
          obj.Faisalabad+1
     }
     if(item==="Islamabad"){
          obj.Islamabad+1
     }
     if(item==="Karachi"){
          obj.Karachi+1
     }
     if(item==="Abbotabad"){
          obj.Abbotabad+1
     }
     if(item==="Gilgit"){
          obj.Gilgit+1
     }
     if(item==="Lahore"){
          obj.Lahore+1
     }
     if(item==="Hyderabad"){
          obj.Hyderabad+1
     }
     if(item==="Nawab Shah"){
          obj.Nawab_Shah+1
     }
     if(item==="Sukkur"){
          obj.Sukkur+1
     }
     if(item==="Attock"){
          obj.Attock+1
     }
return obj

})


}
const Wellocme = (props: Props) => {
     return (
          <View>

          </div>
     )
}

export default Wellocme
