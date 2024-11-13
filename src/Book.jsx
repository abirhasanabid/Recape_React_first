import PropTypes from 'prop-types';
import './Book.css'
const Book = ({book}) => {
    const {name,price} = book;
    return (
        <div className='book'>
            <h3>Subject : {name}</h3>
            <p>Price : {price}</p>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;