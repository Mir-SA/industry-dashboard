import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Form({ submit, symbols, industry }) {
  return (
    <Card sx={{ height: 150 }}>
      <form>
        <Typography variant="h6" gutterBottom>
          Subscribe to Symbol
        </Typography>

        <TextField
          id="outlined-basic"
          label="Symbol"
          variant="outlined"
          onChange={symbols}
          inputProps={{ style: { textTransform: "uppercase" } }}
          type="text"
          sx={{ marginLeft: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Industry"
          variant="outlined"
          onChange={industry}
          inputProps={{ style: { textTransform: "capitalize" } }}
          type="text"
          sx={{ marginLeft: 3 }}
        />
        <Button
          onClick={submit}
          variant="outlined"
          color="primary"
          size="medium"
          sx={{ marginLeft: 5 }}
        >
          Add
        </Button>
      </form>
    </Card>
  );
}
