import { useEffect, useState } from "react";

function App() {
 
 let [pageData, setPageData] = useState({heading:"", paragraph: ""});


 async function getData() {
   let unprocessed = await fetch("http://localhost:8080/all");
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
