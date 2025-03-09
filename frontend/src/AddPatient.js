import { useState } from 'react';

function AddPatient() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [condition, setCondition] = useState('');

    const handleAddPatient = async () => {
        await fetch('https://your-backend-url.onrender.com/api/patients/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, age, condition })
        });

        alert('Patient added!');
    };

    return (
        <div>
            <h2>Add Patient</h2>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder="Condition" onChange={(e) => setCondition(e.target.value)} />
            <button onClick={handleAddPatient}>Add</button>
        </div>
    );
}

export default AddPatient;
