const Card = (props) => {
    return (
        <div class="show">
                    <img src={props.foto} alt={props.fotoAlt} />
                     <div class="info">  
                    <h2>{props.beschrijving}</h2>
                    <p>asdasdasd</p>
                    <button class="show-btn">Buy Tickets</button>
                    </div>
                    
        </div>
    );
  };
  
  export default Card;
  