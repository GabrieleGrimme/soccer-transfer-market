import styled from 'styled-components/macro';

export default function ShoppingCart({playersInShoppingCart}) {
 
    return (
        <CartWrapper>
            <NameWrapper>
                <h3>Player name</h3>
                {playersInShoppingCart.map((player) => (
                <p>{player.name}</p>))}
                <h4>Sum: </h4>
            </NameWrapper>
            <PriceWrapper>
                <h3>Price</h3>
                {playersInShoppingCart.map((player) => (
                <p>{player.price}</p>))}
                <h4>{playersInShoppingCart.reduce((total, { price = 0 }) => +total + +price, 0)}</h4>
            </PriceWrapper>
        </CartWrapper>
    );
}

const CartWrapper = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 2px solid green;
    border-radius: 0.5rem;
    padding: 2rem;
    margin: auto 0;

    h3 {
        color: green;
    }
`;
const NameWrapper = styled.section`

`;

const PriceWrapper = styled.section`

`;