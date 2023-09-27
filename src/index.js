import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import data from 'data/user.json'

const card = <div class="card" style={{width: '18rem',marginLeft:'50%'}}>
<img src={data.avatar} class="card-img-top" style={{width:'100px'}} alt={data.username}/>
<div class="card-body">
  <h3 class="card-title">{data.username}</h3>
  <p class="card-text">{data.tag}</p>
  <p class="card-location">{data.location}</p>
</div>
</div>


ReactDOM.createRoot(document.getElementById('root')).render(card);
