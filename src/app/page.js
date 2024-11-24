"use client"
import Image from "next/image";

export default function Home() {
 
    const resultFunction = ()=>{
      let value = document.getElementById("value").value;
      value=parseFloat(value)
      const result = document.getElementById("result");
        const anaValue = 1.371742112482853;
        const tolaValue = 11.664;
        const finalValueInAna = Math.round(anaValue*value);
        result.innerHTML=finalValueInAna;
     }

  return (
    <div>
        <h1 className="text-3xl text-center mt-5 bg-blue-500 p-4 text-yellow-50">Wellcome To Gram ➡️ Ana (Bengali) Gold Converter</h1>

        <hr />

        <div className="text-center mt-5 border border-red-400 rounded-xl w-5/12 h-[500px] mx-auto">  
              <div className="mt-[150px]"> 
              <h1 className="mb-2">Enter Gram :-</h1>
        <input required placeholder="Enter Value" className="border border-blue-500 rounded-md text-center" type="text" name="value" id="value" />
        <br />
        <button onClick={resultFunction} className="bg-blue-600 m-2 p-2 rounded-md text-white">Convert</button>  
        <h2 className="mt-3" id="result">Your Value in Ana is </h2>
        <h1></h1>
              </div>
        </div>
        <footer className="text-center mt-8 underline"><span className="text-3xl font-mono">L I A K A T 😍</span>
        </footer>
    </div>
   
  );
}
