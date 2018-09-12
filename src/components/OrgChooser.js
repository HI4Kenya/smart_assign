import React,{Component} from 'react'
import './OrgChooser.css'
const headers = {
  headers: {
    Authorization: "Bearer iCRJMQNlMestplr0pgqPSM5fmEYgxj"
  }
};
export default class OrgChooser extends Component {

  constructor(){
    super();
    this.state={
      orgunits:[]
    }
  }


  componentWillMount(){
    fetch(
      "http://api.kmhfltest.health.go.ke/api/facilities/facilities/?page=1&format=json",
      headers
    )
      .then(fetchData => fetchData.json())
      .then(jsonData => {
        //anything = jsonData.results;
        //ReactDOM.render(<App results={anything} />, rootElement);
      })
      .catch(error => {
        console.log("Error", error);
      });

  }
  render(){
    return(

      <div id="tree">
      <ul id="myUL">
  <li><span className="caret">Beverages</span>
    <ul className="nested">
      <li>Water</li>
      <li>Coffee</li>
      <li><span className="caret">Tea</span>
        <ul className="nested">
          <li>Black Tea</li>
          <li>White Tea</li>
          <li><span className="caret">Green Tea</span>
            <ul className="nested">
              <li>Sencha</li>
              <li>Gyokuro</li>
              <li>Matcha</li>
              <li>Pi Lo Chun</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
      </div>
    )
  }



  componentDidMount(){
    var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
  }
}
