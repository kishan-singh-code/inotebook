import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import { ReactComponent as Deletelogo } from './icons/delete.svg';
import { ReactComponent as Editlogo } from './icons/edit.svg';
import ReactTooltip from 'react-tooltip';



const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        {/* <i className="far fa-trash-alt mx-2" onClick={() => {
                            deleteNote(note._id);
                            props.showAlert("Deleted Successfully", "success");
                        }}></i> */}

                        <Deletelogo data-tip data-for='Delete' className="point mx-2" onClick={() => {
                            deleteNote(note._id);
                            props.showAlert("Deleted Successfully", "success");
                        }} />

                        <ReactTooltip id='Delete' type='warning' textColor='#ffffff' backgroundColor='#287dfc' effect='solid' padding='7px'>
                            <span>Delete</span>
                        </ReactTooltip>

                        {/* <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i> */}
                        <Editlogo data-tip data-for='Edit' className="point " onClick={() => { updateNote(note) }} />
                        <ReactTooltip id='Edit' type='warning' textColor='#ffffff' backgroundColor='#287dfc' effect='solid' padding='7px'>
                            <span>Edit</span>
                        </ReactTooltip>


                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem