import mediaData from "./data.js";

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 

function getUniqueTags(data){
  let uniqueArr = []
  let flattenUniqueArr = []
  let uniqueSet =[]
  data.map((item)=>{
      uniqueArr.push(item.tags)
  })
flattenUniqueArr = uniqueArr.flat()
    flattenUniqueArr.forEach((item)=>{
        if(!uniqueSet.includes(item)){
            uniqueSet.push(item)
        }
    })
    return uniqueSet
}

console.log(getUniqueTags(mediaData));