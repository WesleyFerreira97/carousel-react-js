import styled from 'styled-components';

interface TesteInterface {
    color?: string;
}

export const CarouselWrap = styled.div<TesteInterface>`
    /* display: flex; */
    overflow: hidden;
    border: 1px solid gray;

    .inner {
        white-space: nowrap;
        transition: transform 0.3s;
    }
`;

type ItemProps = {
    width?: string;
}


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