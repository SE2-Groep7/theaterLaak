const Card = (props) => {
    return (
        <div class={props.class + " show"}>
                    <img src={props.foto} alt={props.fotoAlt} />
                     <div class="info">  
                    <h2>{props.beschrijving}</h2>
                    <p>Dit is een placeholder voor de show verhaaltje</p>
                    <div class="btn-holder"><button class="show-btn">Buy Tickets</button></div>
                    </div>
                    
        </div>
    );
  };
  
  export default Card;
  