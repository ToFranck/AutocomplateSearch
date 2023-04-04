import React, { useState } from 'react'
import './Motivation.css'


export default function Motivation() {

    const [entreprise, setEntreprise] = useState('')
    const [recruteur, setRecruteur] = useState('')
    const [poste, setPoste] = useState('')
    const [techno, setTechno] = useState('')


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

        <input type="text"
                placeholder="Techno"
                onChange={e => setTechno(e.target.value)}
                value={techno}
        />

        <p>{entreprise} {recruteur} {poste}</p>

       <p> Cher/e { recruteur },
J'ai le plaisir de vous présenter ma candidature pour le poste de { poste } dans votre entreprise. Avec mes années d'expérience dans le développement web et ma passion pour la programmation, je suis convaincu que je peux contribuer significativement à votre équipe.
Au cours de mes études, j'ai travaillé sur une variété de projets qui ont exigé des compétences en développement web, en résolution de problèmes, gestion de projet et en travail d'équipe. J'ai également acquis un savoir dans l'utilisation de technologies telles que { techno }. 
En tant que { poste }, je suis constamment à la recherche de nouvelles opportunités pour apprendre et améliorer mes compétences. Je suis très motivé par les enjeux et les projets complexes qui me permettent de développer mes compétences techniques et de résolution de problèmes. De plus, je suis un collaborateur passionné qui aime travailler en équipe et communiquer régulièrement avec les autres membres de l'équipe.
Enfin, je tiens à souligner ma volonté de rejoindre votre entreprise en raison de sa réputation exceptionnelle, ainsi que son engagement envers l'excellence et l'innovation. Je suis convaincu que je serais un ajout précieux à votre équipe et je suis impatient d'avoir la possibilité de discuter avec vous en personne.
Je vous remercie de votre temps et de votre considération. Veuillez trouver ci-joint mon CV pour plus d'informations sur mes compétences et mon expérience.
Cordialement,
Tolosano Franck</p>





    </>
  )
}
