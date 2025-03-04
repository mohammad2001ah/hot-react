import { useEffect,useState } from "react";
export default function Info(){
  const [fact,setFact]=useState("Loading...");
  const API_URL="https://catfact.ninja/fact";
  const fetchData=async()=>{
    // fetch function from js its work to fetch data from link
    const res=await fetch(API_URL);
    const data=await res.json();
    console.log(data.fact);
    setFact(data.fact);
    // console.log("fact data",fact.value.fact);
    return data;
  }
  useEffect(()=>{
  fetchData();
},[])
  return(
    <>
    <h1>this is a fact</h1>
    <p>{fact}</p>
    </>
  );
}