import React, { useState } from 'react'
import Navbar from '../Molecules/Navbar'
import './Header.css'
import { Mainbutton } from '../Atoms/Button'
export default function Header() {

    return (
        <div>
            <Navbar />
            <div className='main'>
                
                <div className='text' >
                    <h1>Be There</h1>
                    <h3>Listen to Brilliant Songs in the moment</h3>
                    <h3>that truely defines you</h3>

                    <Mainbutton/>
                </div>
                <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440' className='image' />

            </div>
        </div>
    )
}