import React,{useState} from 'react';

function Home(){
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  const cafes = [
 
      {
            
      "name": "Bazaar Cafe",

      "place_id": "kjk234g4gcvfx8usg1l33pi",

      
      "id": "jahgde7wgdiau8ewsahgosd",
      
      "street_no": "60H",
      
      "locality": "Solomos Island Road",
      
      "postal_code": "20688",
      
      "lat": "36.7783 N",
      
      "long": "119.4179 W"
      
      }, {
            
      "name": "Ashley's Cafe",

      "place_id": "12hydbdf76sljfts87sbfis",

      
      "id": "12hydbdf76sljfts87sbfis",
      
      "street_no": "1B",
      
      "locality": "Macarthur Blvd",
      
      "postal_code": "20619",
      
      "lat": "38.1781 N",
      
      "long": "118.4171 W"
      
      }, {
      "name": "Avenue Cafe",

      "place_id": "skjd86svvfdrsv55svbvf3f",
        
      
      "id": "kjk234g4gcvfx8usg1l33pi",
      
      "street_no": "45250",
      
      "locality": "Worth Avenue, Unit A",
      
      "postal_code": "20619",
      
      "lat": "36.1152",
      
      "long": "117.521"
      
      }, {
      "name": "Hi-Lo Cafe",

      "place_id": "mjdhgetr4pojfyts22fzfsh",
        
      
      "id": "saswe3s6yydtdr52hsd72yst",
      
      "street_no": "1X",
      
      "locality": "Macarthur Blvd",
      
      "postal_code": "20687",
      
      "lat": "36.7783",
      
      "long": "119.4179"
      
      }, {
      "name": "California Chicken Cafe",

      "place_id": "12hydbdf76sljfts87sbfis",
        
      
      "id": "skjd86svvfdrsv55svbvf3f",
      
      "street_no": "7S",
      
      "locality": "Three Notch Road",
      
      "postal_code": "20619",
      
      "lat": "36.83",
      
      "long": "119.6"
      
      }, {
      "name": "Avenue Bakery Cafe",

      "place_id": "jahgde7wgdiau8ewsahgosd",
        
      
      "id": "mjdhgetr4pojfyts22fzfsh",
      
      "street_no": "22803",
      
      "locality": "Gunston Dr Lexington Park",
      
      "postal_code": "20688",
      
      "lat": "35.7788",
      
      "long": "119.979"
      
      }, {
      
      "name": "Philz Coffee",

      "place_id": "urhw3837ehalod7w02b7835",

      
      "id": "urhw3837ehalod7w02b7835",
       
      "street_no": "225",
      
      "locality": "Macarthur Blvd",
      
      "postal_code": "20687",
      
      "lat": "35.77813",
      
      "long": "119.41791"
      
      }
      
      ]
      const submit = () => {
       for(var i = 0; i<cafes.length; i++){
         if(cafes[i].id === search){
           const data = cafes[i];
           list.splice(0,0,data)
           setList([...list])
           console.log(data)
         }
       }
      }

      // const serchHandler = () => {
      //   if(search !== ""){
      //      list = cafes.filter(search => {
      //       return Object.value(search).join("")
      //       .toLowerCase()
      //       .includes(search.toLowerCase());
      //     });
      //     setSearch(list);
      //   }else{
      //     setSearch(cafes);
      //   }
      // };

      // cafes.filter(post => {
      //   if (search === "") {
      //     return post;
      //   } else if (post.id.toLowerCase().includes(search.toLowerCase())) {
      //     return post;
      //   }
      // });
      
  return(
    <>
       <div className="container">
      <div className="row">
        <div className="col-12" id="header-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12" id="header">
                <h2>California Cafe Directory</h2>
              </div>
              <div className="col-12" id="search-wrapper">
                <input type="text" placeholder="Search your favorite cafes!" value={search} onChange={e=>{setSearch(e.target.value)}}/>
                <button type="submit" onClick={submit}>search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-12" id="table-wrapper">
              <table>
                <thead>
                  <tr className="table100-head">
                    <th className="column1">S No</th>
                    <th className="column2">Cafe Name</th>
                    <th className="column3">Address</th>
                    <th className="column4">Postal Code</th>
                    <th className="column5">Lat</th>
                    <th className="column6">Long</th>
                  </tr>
                </thead>
                <tbody>
                  { list.map((post, index) => (
                    <tr key={index}>
                      <td className="column1">{post.id}</td>
                      <td className="column2">{post.name}</td>
                      <td className="column3">{post.locality}</td>
                      <td className="column4">{post.postal_code}</td>
                      <td className="column5">{post.lat}</td>
                      <td className="column6">{post.long}</td>
                    </tr>))}                   
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;