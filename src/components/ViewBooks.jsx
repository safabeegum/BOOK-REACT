import React from 'react'
import Navbar from './Navbar'

const ViewBooks = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">TITLE</th>
      <th scope="col">AUTHOR</th>
      <th scope="col">PUBLISHING YEAR</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>  
      <th scope="row">1</th>
      <td>Harry Potter</td>
      <td>J K Rowling</td>
      <td>2023</td>
      <td>500</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>3 Men in a Boat</td>
      <td>ABC</td>
      <td>2020</td>
      <td>450</td>
    </tr>
    
    <tr>
    <th scope="row">3</th>
      <td>Annie Frank</td>
      <td>Annie Frank</td>
      <td>2016</td>
      <td>550</td>
    </tr>

    <tr>
    <th scope="row">4</th>
      <td>Adventures of Tom Sawyer</td>
      <td>Mark Twain</td>
      <td>2017</td>
      <td>470</td>
    </tr>
      
    <tr>
    <th scope="row">5</th>
      <td>To Kill a Mockingbird</td>
      <td>Anu</td>
      <td>2013</td>
      <td>600</td>
    </tr>
    
    <tr>
    <th scope="row">6</th>
      <td>Wuthering Heights</td>
      <td>Jacob</td>
      <td>2010</td>
      <td>650</td>
    </tr>

    <tr>
    <th scope="row">7</th>
      <td>Pride and Prejudice</td>
      <td>George</td>
      <td>2012</td>
      <td>700</td>
    </tr>

    <tr>
    <th scope="row">8</th>
      <td>David Copperfield</td>
      <td>Samuel</td>
      <td>2014</td>
      <td>800</td>
    </tr>
  </tbody>
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBooks