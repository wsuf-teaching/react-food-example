import { useRef, useState } from "react";

function FoodForm(props) {

    const nameRef = useRef();
    const imageUrlRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const [nameIsValid, setNameIsValid] = useState(true);
    const [imageUrlIsValid, setImageUrlIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();

        if(nameRef.current.value.trim() == ''){
            setNameIsValid(false);
            return;
        }

        if(imageUrlRef.current.value.trim() == ''){
            setImageUrlIsValid(false);
            return;
        }

        setNameIsValid(true);
        setImageUrlIsValid(true);
        const newFood = {
            name: nameRef.current.value,
            imageUrl: imageUrlRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value
        };
        console.log(newFood);
        props.onAddNewFood(newFood);
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
            { !nameIsValid && <span style={{color:"red"}}>Name cannot be empty!</span> }
            <label htmlFor="foodform_imageurl">Image URL</label>
            <input 
                type="text" 
                id="foodform_imageurl" 
                ref={imageUrlRef}
                />
            { !imageUrlIsValid && <span style={{color:"red"}}>Image url cannot be empty!</span>}
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