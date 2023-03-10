const Card = (props) => {
    return (
        <div class={props.class + " show"}>
                    <img src={props.foto} alt={props.fotoAlt} />
                     <div class="info">  
                    <h2>{props.showName}</h2>
                    <p>{props.beschrijving}</p>
                    <div class="btn-holder">
                    <button class="show-btn" onClick={() => window.location.href = `voorstelling?showName=${props.showName}`}>Meer info</button>              </div>
                    </div>
                    
        </div>
    );
  };
  
  export default Card;
  