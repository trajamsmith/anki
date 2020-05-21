import React from 'react'
import spVocab from './spanishVocab'
import { TSpVocabCards } from '../types/cardTypes'

// CSS Files
import './spanishVocab/styles.css'

const Index: React.FC<{ card: TSpVocabCards }> = ({ card }) => {
    const innerHTML = spVocab[card]

    return (
        <>
            <iframe title="card" src={innerHTML}></iframe>
        </>
    )
}

export default Index
