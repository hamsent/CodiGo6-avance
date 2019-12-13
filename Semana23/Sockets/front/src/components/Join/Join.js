import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                    <h2>Ingrese</h2>
                    <input type="text" placeholder="Ingrese su Nombre" className="form-control" onChange={(event)=>setName(event.target.value)}/>
                    <input type="text" placeholder="Ingrese la Sala" className="form-control" onChange={(event)=>setRoom(event.target.value)}/>
                    <Link onClick={(event)=>(!name||!room)? event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="btn btn-primary btn-block" type="submit">
                        Ingresar
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default Join;
