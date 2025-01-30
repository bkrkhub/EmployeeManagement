import './UpdateUser.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateUser = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: "",
            department: ""
        })
    
    
        const handleInputChange = (event) => {
            const {name, value} = event.target;
            setFormData({
                ...formData,
                [name]:value,
            })
        }

        useEffect(() => {
            const fetchEmployee = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/api/employee/${id}`);
                    const data = await response.json();
                    setFormData(data);
                } catch (error) {
                    console.log("Error fetching user:", error.message);
                }
            }
            fetchEmployee();
        }, [id]);

        const handleSubmit = async (e) => {
            e.preventDefault()

            try {
                const response = await fetch(`http://localhost:8080/api/employee/${id}`, 
                 {
                    method : "PATCH",
                    headers : {"Content-Type" : "application/json"},
                    body: JSON.stringify(formData)
                }
                );
                
                const data = await response.json();
                console.log("User Updated: " , data);
                navigate(`/`);
            } catch (error) {
                console.error(`Error when updating user: `, error.message);
            }
        };

    return (
        <>
            <div className = "center-form">
                <h1>Edit the Choosen Employee</h1>
                <Form onSubmit = {handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type = "text"
                            name = "name"
                            placeholder = "Enter Name"
                            value = {formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type = "email"
                            name = "email"
                            placeholder = "Enter email"
                            value = {formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Control
                            type = "text"
                            name = "phone"
                            placeholder = "Enter phone"
                            value = {formData.phone}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicDepartment">
                        <Form.Control
                            type = "text"
                            name = "department"
                            placeholder = "Enter department"
                            value = {formData.department}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button variant = "primary" type = "submit" className = "w-100">
                        Edit Employee
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default UpdateUser;