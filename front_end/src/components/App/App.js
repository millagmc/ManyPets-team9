import FormPets from '../FormPets/FormPets';
import './App.css';
import { AddressFinder } from "@knocode/address-finder";
import { useEffect,useState } from "react";

function App() {
  const [dogBreed, setDogbreed] =useState([])

   useEffect(() => {
     AddressFinder.setup({
       inputField: "#line_1",
       outputFields: {
         line_1: "#line_1",
         line_2: "#line_2",
         line_3: "#line_3",
         post_town: "#post_town",
         postcode: "#postcode",
       },
     });
   }, []);

   useEffect(()=>{
    async function fetchData(){
      const response = await fetch("https://api.thedogapi.com/v1/breeds");

      const data = await response.json()
      setDogbreed(data)
      console.log(data)
    }

    fetchData()
   },[])

  return (
    <div className="App">
      {/* <FormPets /> */}

      <form>
        <label htmlFor="line_1">Address Line 1</label>
        <input
          type="text"
          id="line_1"
          placeholder="Start typing your address..."
        />
        <label htmlFor="line_2">Address Line 2</label>
        <input type="text" id="line_2" />
        <label htmlFor="line_3">Address Line 3</label>
        <input type="text" id="line_3" />
        <label htmlFor="post_town">Town or City</label>
        <input type="text" id="post_town" />
        <label htmlFor="postcode">Postcode</label>
        <input type="text" id="postcode" />
        {/* dog breed */}
        <label  htmlFor="dogbreeds">Dog Breeds</label>
        <select id="dogbreed" name="dogbreed">
          {dogBreed?
          dogBreed.map((input)=>{
            return(
              <option value={input.name}>{input.name}</option>

            )
          }): <option value="none">No Options</option>}
        </select>
      </form>
    </div>
  );
}

export default App;
