

import PropTypes from 'prop-types';

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
    ShoeCard.propTypes = {
        imgURL: PropTypes.shape({
            bigShoe: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired
        }).isRequired,
        changeBigShoeImage: PropTypes.func.isRequired,
        bigShoeImage: PropTypes.string.isRequired
    };

    const handleClick = () => {
        if (bigShoeImage !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

    return (
        <div
            className={`border-2 rounded-xl ${bigShoeImage === imgURL.bigShoe
                    ? "border-coral-red"
                    : "border-transparent"
                } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img
                    src={imgURL.thumbnail}
                    alt='shoe colletion'
                    width={127}
                    height={103.34}
                    className='object-contain'
                />
            </div>
        </div>
    )
}

export default ShoeCard