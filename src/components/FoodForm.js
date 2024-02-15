import { useRef } from "react";

function FoodForm() {

    const nameRef = useRef();
    const imageUrlRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const newFood = {
            name: nameRef.current.value,
            imageUrl: imageUrlRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value
        };
        console.log(newFood);
        nameRef.current.value = "";
        imageUrlRef.current.value = "";
        descriptionRef.current.value = "";
        priceRef.current.value = "";
    }


    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="foodform_name">
                Name
            </label>
            <input 
                type="text" 
                id="foodform_name" 
                ref={nameRef}
                />
            <label htmlFor="foodform_imageurl">Image URL</label>
            <input 
                type="text" 
                id="foodform_imageurl" 
                ref={imageUrlRef}
                />
            <label htmlFor="foodform_description">Description</label>
            <textarea 
                id="foodform_description" 
                ref={descriptionRef}
                />
            <label htmlFor="foodform_price">Price</label>
            <input 
                type="number" 
                step="1" 
                id="foodform_price" 
                ref={priceRef}
                />
            <button type="submit">Add</button>
        </form>
    );
}

export default FoodForm;