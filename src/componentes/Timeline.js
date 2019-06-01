import React, { Component } from 'react';
import FotoItem from '.bin/instalura/src/componentes/FotoItem';

export default class Timeline extends Component {
    render(){
        return (
        <div className="fotos container">
          <FotoItem/>
          <FotoItem/>
        </div>            
        );
    }
}