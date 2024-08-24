import React from "react";

const Evento = (props) => {
    return (
        <div className="event">
            <div className="label">
                <img src={props.fotoPerfil} alt="..." />
            </div>
            <div className="content">
                <div className="summary">
                    <a className="user">
                        {props.nome}
                    </a> {props.mensagem}
                    <div className="date">
                        {props.tempo} minutos atrás
                    </div>
                </div>
                <div className="meta">
                    <a className="like">
                        <i className="like icon"></i> {props.likes} Likes
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Evento;


// const Evento = (props) => {
//     return (
//         <div className="event">
//             <div className="label">
//                 <img src={props.fotoPerfil} alt="..." />
//             </div>
//             <div className="content">
//                 <div className="summary">
//                     <a className="user">
//                         {props.nome}
//                     </a> {props.mensagem}
//                     <div className="date">
//                         {props.tempo} minutos atrás
//                     </div>
//                 </div>
//                 <div className="meta">
//                     <a className="like">
//                         <i className="like icon"></i> {props.likes} Likes
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Evento;
