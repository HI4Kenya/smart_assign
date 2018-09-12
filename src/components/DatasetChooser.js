import React,{Component} from 'react'




const headers ={
    headers:{
        Authorization: `Basic ${btoa('peterkahenyanjoki@gmail.com:Cephaspk@0100100110')}`

}
}

export default class DatasetChooser extends Component {
  constructor() {
    super();
    this.state={
      datasets:[]
    }
  }


  componentWillMount(){
    fetch('http://197.136.81.99:8080/training/api/dataSets?paging=false&fields=id,name,code,shortName,description,href', headers
    ).then((fetchData) => fetchData.json()).then((jsonData)=>{
        this.setState({
          datasets:jsonData.dataSets
        })
    }).catch((error)=>{console.log('Error', error)});
  }
  render(){

    console.log(this.state.datasets)
    return(
      <ol>
      {this.state.datasets.map((dataset)=><div><a href={dataset.href}>{dataset.name}</a></div>)}
      </ol>
    );
  }


}
