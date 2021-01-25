import React from "react";
import {
  List,
  ListItem,
  Button,
  Typography,
  ListItemText,
} from "@material-ui/core";

const BookingDetails = ({ checkoutData, handleBackStep, handleNextStep }) => (
  <>
    <List>
      {checkoutData.live.line_items.map((item) => (
        <ListItem key={item.id}>
          <ListItemText
            primary={item.name}
            secondary={`Cantidad: ${item.quantity}`}
          />
          <Typography variant="body2">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </ListItem>
      ))}
      <ListItem>
        <ListItemText primary="Precio total" />
        <Typography variant="body2">
          {checkoutData.live.subtotal.formatted_with_code}
        </Typography>
      </ListItem>
    </List>

    <div className="actions">
      <Button
        size="medium"
        onClick={(e) => handleBackStep(e, "datos del pedido")}
        variant="contained"
      >
        Atras
      </Button>
      <Button
        onClick={(e) => handleNextStep(e, "pago del pedido")}
        size="medium"
        color="secondary"
        variant="contained"
      >
        Siguiente
      </Button>
    </div>
  </>
);
export default BookingDetails;