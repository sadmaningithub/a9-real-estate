import PropTypes from "prop-types";


const CategoryProperty = ({catWiseProperty}) => {

    console.log(typeof catWiseProperty)

    return (
        <div>
            <h1>Coming soon...</h1>
        </div>
    );
};

CategoryProperty.propTypes = {
    catWiseProperty: PropTypes.object.isRequired
}

export default CategoryProperty;