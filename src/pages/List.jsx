import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useFirebase } from "../context/Firebase";

export const ListingPage = () => {
    const {handleCreateNewListing} = useFirebase()
    const [name, setName] = useState('')
    const [isbnNumber, setIsbnNumber] = useState('')
    const [price, setPrice] = useState('')
    const [coverPic, setCoverPic] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleCreateNewListing(name, isbnNumber, price, coverPic)
    }
    return (
        <>
            <Form className="ml-5 mr-5">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Enter Book Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Book Name" value={name} onChange={e => setName(e.target.value)} />  
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Enter ISBN Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter ISBN Number" value={isbnNumber} onChange={e => setIsbnNumber(e.target.value)} />  
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Enter Price</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Price" value={price} onChange={e => setPrice(e.target.value)} />  
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Upload Cover Page of Book</Form.Label>
                                    <Form.Control type="file" value={coverPic} onChange={e => setCoverPic(e.target.files[0])} />  
                                </Form.Group>
                                
                                <Button variant="primary" type="submit" onClick={handleSubmit}>
                                    Create
                                </Button>
                            </Form>
        </>
    )
}