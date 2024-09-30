import { useLoaderData, useParams } from "react-router-dom";
import CategoryProperty from "../CategoryProperty/CategoryProperty";

const CategoryWiseProperty = () => {

    const properties = useLoaderData()
    const { segment } = useParams()
    console.log(properties, segment)
    const categoryWiseProperty = properties.filter(property => property.segment_name === segment)
    console.log(categoryWiseProperty)
    // const { id } = categoryWiseProperty

    return (
        <div className="mb-24">
            {
                categoryWiseProperty.map((catWiseProperty) => <CategoryProperty key={catWiseProperty.id} catWiseProperty={catWiseProperty}></CategoryProperty>)
            }
        </div>
    );
};

export default CategoryWiseProperty;