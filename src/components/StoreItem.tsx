import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { Plus, Dash, Trash } from "react-bootstrap-icons";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              <Plus></Plus> Add to Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center" style={{ gap: ".5rem" }}>
              <Button
                variant="outline-primary"
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "2em", height: "2em" }}
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </Button>{" "}
              {/* minus */}
              <span style={{ fontSize: "1.25em" }}>{quantity}</span>
              <Button
                variant="outline-primary"
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "2rem", height: "2rem" }}
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </Button>{" "}
              {/* Plus */}
              <Button
                variant="danger" 
                style={{ marginLeft: "auto" }}
                onClick={() => removeFromCart(id)}
              >
                <Trash></Trash>
              </Button>{" "}
              {/* Plus */}
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
