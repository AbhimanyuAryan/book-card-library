import React from 'react'
import './Book.css'
import Cat from '../cat.png'

var book = () => {
    return(
        <div style={{width:'600px', height: '400px'}}>
            <a target='_blank' href='http://jsforcats.com'>
                <div class="view"> READ </div>
                <div id='cover' style={{backgroundImage: `url(${Cat})`, backgroundPosition: 'center', display: 'block', float: 'left',width:'200px', height: '200px', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}></div>
                <h2 style={{textAlign: 'left', width: '140px'}}>Javascript for Cats</h2>
            </a>
            <h3>
                <a href='http://github.com/maxogden' target='_blank'><p style={{textAlign: 'left'}}>Max Ogden</p></a>
            </h3>
            <p className='level' style={{textAlign: 'left'}}>Beginner</p>
            <p className='description' style={{textAlign: 'left', display: 'block',width: '140px', wordWrap: 'break-word' ,height: '80px', fontSize: '12px'}}>An in-browser interactive introductory programming text designed for cats. Humans are probably also capable of following along.</p>
        </div>
    )
};

export default book;