import React, {useEffect, useState} from "react";

function App() {

    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setBackendData(data));
    }, []);

    return (
        <div>
            {typeof backendData.users === "undefined" ? (
                <h1>Loading ...</h1>
            ) : (
                backendData.users.map((user, index) => (
                    <p key={index}>{user}</p>
                ))
            )}
        </div>
    );
}

export default App;