import React from 'react';

const Entity = (props) => {
    
       const { item } = props;
       if (!props.item){
        return <div>Loading...</div>
      }
    return (
    <div className="card" style={{ width: '100%'}}>
        <div className="form-group">
        <div className="row inline-block" style={{margin: '5px'}}>
          <img src={item.picture.thumbnail} />
                
          {item.name.first}&nbsp;{item.name.last}</div>
    </div>
   
    </div>
        );
    }

export default Entity;