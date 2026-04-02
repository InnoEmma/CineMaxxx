import { useState } from "react";

function TvShowDetails() {
  const [show, setSHow] = useState(true);
  const words =
    "This is a long text. A very long character of text, i am supposed to cut this";

  const cut = (words.length > 20 && show) ?  words :  words.slice(0, 20) ;
  console.log(cut + "...");
  console.log(words);

  function hideShow(){
    setSHow((e)=> !e)
    console.log('ss');
  }

  return (
    <div>
      <h1>Tv Show Details</h1>
      <p>{cut + "..."}</p>
      <button onClick={hideShow} className="bg-gray-400 p-2 text-white rounded-full">Click me</button>
    </div>
  );
}

export default TvShowDetails;
