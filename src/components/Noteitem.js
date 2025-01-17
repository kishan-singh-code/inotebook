import React from 'react'
// import noteContext from "../context/notes/noteContext"
import { ReactComponent as Deletelogo } from './icons/delete.svg';
import { ReactComponent as Editlogo } from './icons/edit.svg';
import ReactTooltip from 'react-tooltip';



const Noteitem = (props) => {
    // const context = useContext(noteContext);
    // const { deleteNote } = context;
    const { note, updateNote, popdel } = props;
    return (
        <div className="col-md-3 ">
            <div className="card my-3 card_hover_white">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        {/* <i className="far fa-trash-alt mx-2" onClick={() => {
                            deleteNote(note._id);
                            props.showAlert("Deleted Successfully", "success");
                        }}></i> */}

                        <Deletelogo data-tip data-for='Delete' className="point del mx-2" onClick={() => {
                            // deleteNote(note._id);
                            popdel(note);


                            // props.showAlert("Deleted Successfully", "success");
                        }} />

                        <ReactTooltip id='Delete' type='warning' textColor='#ffffff' backgroundColor='red' effect='solid' padding='5px'>
                            <span>Delete</span>
                        </ReactTooltip>

                        {/* <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i> */}
                        <Editlogo data-tip data-for='Edit' className="point edt" onClick={() => { updateNote(note) }} />
                        <ReactTooltip id='Edit' type='warning' textColor='#ffffff' backgroundColor='#287dfc' effect='solid' padding='5px'>
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