import React from 'react'
import styled from 'styled-components'

import CardViewer from '../cardTypes'

const Container = styled.div`
    display: flex;
    justify-contents: center;
    align-items: center;
`

// const StyleSelector: React.FC = () => {
//     return <div></div>
// }

const StyleViewer: React.FC = () => {
    return (
        <Container>
            <CardViewer card={'en2Sp'} />
        </Container>
    )
}

export default StyleViewer
