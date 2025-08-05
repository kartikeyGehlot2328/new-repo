import { useEffect, useState } from "react";

function App() {
 
 let [pageData, setPageData] = useState({heading:"", paragraph: ""});


 async function getData() {
   let unprocessed = await fetch("https://backend-seven-sandy-99.vercel.app/all");
   let processed =  await unprocessed.json();
   setPageData({heading:processed[0].heading, paragraph:processed[0].paragraph});
 }

 useEffect(()=>{
   getData();
 },[])

  return (
    <>
     <h1>{pageData.heading}</h1>
     <p>
         {pageData.paragraph}
     </p>
    </>
  )
}

export default App
