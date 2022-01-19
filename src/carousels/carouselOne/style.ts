import styled from 'styled-components';

interface TesteInterface {
    color?: string;
}

interface ItemProps {
    width?: string;
}

export const CarouselWrap = styled.div<TesteInterface>`
    /* display: flex; */
    overflow: hidden;
    border: 1px solid gray;

    .inner-container {
        white-space: nowrap;
        transition: transform 0.3s;
    }
`;

export const Item = styled.div<ItemProps>`
    height: 200px;
    width: ${props => props.width};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #FF2E63;
    color: #fff;
`;

Item.defaultProps = {
    width: '100px',
}

export const Controls = styled.div`

    button {
        background-color: #303841;
        color: #fff;
        border: inherit;
        padding: .75rem;
    }

    .active-slide {
        background-color: #FF2E63;
    }
`;