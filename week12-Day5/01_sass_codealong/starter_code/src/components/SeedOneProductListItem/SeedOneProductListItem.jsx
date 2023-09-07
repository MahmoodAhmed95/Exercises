import { useState } from 'react';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SeedOneProductListItem(props){

  const [inventoryQty, setInventoryQty] = useState(props.crop.seed_quantity);
  const [qty, setQty] = useState(1);

  function handleQtyChange(evt){
    setQty(parseInt(evt.target.value))
  }

  const disabled = inventoryQty == 0;

    return (
        <Card className="SeedOneProductListItem">
          <Card.Header className="SeedOneProductListItemHeader">{props.crop.seed_type}</Card.Header>

      <Card.Img variant="top" src={"/images/"+props.crop.seed_image_url} alt={props.crop.seed_name} />
      <Card.Body>
        <Card.Title>{props.crop.seed_name}</Card.Title>
        <Card.Subtitle>{props.crop.seed_origin}</Card.Subtitle>
        <Card.Text>
        {props.crop.seed_description}
        </Card.Text>
        <form className="row align-items-center">
        <div className="col-2">
        <label htmlFor={"seedCount" + props.crop.seed_id} className="col-form-label">Qty</label>
        </div>
        <div className="col-4">
        <input id={"seedCount" + props.crop.seed_id} className="form-control" max={props.crop.seed_quantity} type="number" value={qty} onChange={handleQtyChange}></input>
        </div>
        <div className="col-6">
        <Button disabled={disabled} className="col" variant="primary">Buy Now</Button>
        </div>
            
            
       

        </form>
      </Card.Body>
    </Card>
    )
}