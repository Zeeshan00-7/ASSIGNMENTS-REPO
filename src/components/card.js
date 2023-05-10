import React from 'react'
import {data} from './userData'
import styles from './card.module.css'
export default function Card() {
  return (
    <div className={styles.header}>{
        data.map((user) => (
          <div className={styles.wrapper}>
            <img className={styles.image} src={user.image}/>
            <div className={styles.data}>
                <h1 style={{fontWeight:'bold' }}>{user.name}</h1>
                <li>{user.designation}</li>
                <h5>{user.experience}</h5>

            </div>
          </div>

        ))
        
        
        }</div>
  )
}