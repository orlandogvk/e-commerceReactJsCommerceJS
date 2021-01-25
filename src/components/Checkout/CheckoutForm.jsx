 import {
    Grid,
    Button,
    Select,
    MenuItem,
    TextField,
    InputLabel,
    FormControl,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  
  const CheckoutForm = ({
    user = {},
    handleChange,
    handleSubmit,
    handleSelectChange,
  }) => (
    <form onSubmit={handleSubmit} autoComplete="on">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="first-name"
            name="firstName"
            label="Primer Nombre"
            value={user.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="last-name"
            name="lastName"
            label="Apellido"
            value={user.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            type="email"
            label="Email"
            value={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="address"
            name="address"
            value={user.address}
            label="Dirección"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="city"
            name="city"
            label="Ciudad"
            value={user.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="post-code"
            name="postCode"
            value={user.postCode}
            onChange={handleChange}
            label="Zip / Código postal"
          />
        </Grid>
  
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="shipping-country-select-label">
              País de compra
            </InputLabel>
            <Select
              required
              name="shippingCountry"
              id="shipping-country-select"
              value={user.shippingCountry.code || ""}
              labelId="etiqueta de selección país de la compra"
              onChange={(e) => handleSelectChange(e, "shippingCountries")}
            >
              {user.shippingCountries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
  
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="shipping-subdivision-select-label">
              Departamento de compra
            </InputLabel>
            <Select
              required
              name="shippingSubdivision"
              id="shipping-subdivision-select"
              labelId="etiqueta subdivisión país de la compra"
              value={user.shippingSubdivision.code || ""}
              onChange={(e) => handleSelectChange(e, "shippingSubdivisions")}
            >
              {user.shippingSubdivisions.map((subdivision) => (
                <MenuItem key={subdivision.code} value={subdivision.code}>
                  {subdivision.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
  
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="shipping-options-select-label">
              Opciones de compra
            </InputLabel>
            <Select
              required
              name="shippingOptions"
              value={user.shippingOption.id}
              id="shipping-options-select"
              labelId="etiqueta de selección opciones de compra"
              onChange={(e) => handleSelectChange(e, "shippingOptions")}
            >
              {user.shippingOptions.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {`${option.description} - (${option.price.formatted_with_symbol})`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
  
      <div className="actions">
        <Button size="medium" to="/basket" component={Link} variant="contained">
          Anterior
        </Button>
        <Button type="submit" size="medium" color="secondary" variant="contained">
          Siguiente
        </Button>
      </div>
    </form>
  );
  
  export default CheckoutForm;