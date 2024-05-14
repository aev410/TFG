import React, { useState } from 'react';
import axios from 'axios';

const UploadItem = () => {
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('itemName', itemName);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('itemImage', selectedFile);

        try {
            const response = await axios.post('/api/items', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={submitForm}>
            <label>
                Item Name:
                <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </label>
            <label>
                Upload Image:
                <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} required />
            </label>
            <button type="submit">Upload Item</button>
        </form>
    );
};

export default UploadItem;