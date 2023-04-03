import React, { useState } from 'react'
import './Motivation.css'


export default function Motivation() {

    const [entreprise, setEntreprise] = useState('')
    const [recruteur, setRecruteur] = useState('')
    const [poste, setPoste] = useState('')


  return (
    <>
        <h1>Templates de motivation</h1>

        <input type="text" 
                placeholder="Entreprise"
                onChange={e => setEntreprise(e.target.value)}
                value={entreprise}
                
        />
        
        <input type="text"
                placeholder="Recruteur"
                onChange={e => setRecruteur(e.target.value)}
                value={recruteur}
        />

        <input type="text"
                placeholder="Poste"
                onChange={e => setPoste(e.target.value)}
                value={poste}
        />

        <p>{entreprise} {recruteur} {poste}</p>

    </>
  )
}
