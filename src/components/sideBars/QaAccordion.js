import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { QAndA } from "./QAData"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    borderRadius:"none",
    marginTop:'4%'
  },
  Accordion: {
    backgroundColor: "#ffffff",
    color: "#010606",
    boxShadow: 'none',
  },
  AccordionSummary:{
    marginLeft:'60px',

  },
  heading: {
    width:"100px",
    marginLeft:"10px",
    fontFamily: "Helvetica",
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "80%",
    flexShrink: 0
  },

//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary
//   }
}));

const QAAccordion = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

//   const data = [
//     {
//       id: "panel1",
//       heading: "¿Que hacemos en Sh3ck cuando estamos cansados de chequear productos para la gente de Venezuela?",
//       details: "Nulla facilisi. Phasellus sollicitudin nulla et"
//     },
//     {
//       id: "panel2",
//       heading: "¿En que ciudades se encuentran disponibles?",
//       details: " et et et et et "
//     },
//     {
//         id: "panel3",
//         heading: "¿Que hacemos en Sh3ck",
//         details: "Nulla facilisi. Phasellus sollicitudin nulla et"
//     },
//       {
//         id: "panel4",
//         heading: "¿En que ciudades se encuentran disponibles?",
//         details: " et et et et et ",
//       },
//       {
//         id: "panel5",
//         heading: "¿Que hacemos en Sh3ck",
//         details: "Nulla facilisi. Phasellus sollicitudin nulla et"
//       },
//       {
//         id: "panel6",
//         heading: "¿En que ciudades se encuentran disponibles?",
//         details: " et et et et et "
//       },
//       {
//         id: "panel7",
//         heading: "¿Que hacemos en Sh3ck",
//         details: "Nulla facilisi. Phasellus sollicitudin nulla et"
//       },
//       {
//         id: "panel8",
//         heading: "¿En que ciudades se encuentran disponibles?",
//         details: " et et et et et "
//       },
//       {
//         id: "panel9",
//         heading: "¿En que ciudades se encuentran disponibles?",
//         details: " et et et et et "
//       },
//       {
//         id: "panel10",
//         heading: "¿Que hacemos en Sh3ck",
//         details: "Nulla facilisi. Phasellus sollicitudin nulla et"
//       },
//       {
//         id: "panel11",
//         heading: "¿En que ciudades se encuentran disponibles?",
//         details: " et et et et et "
//       },
//       {
//         id: "panel12",
//         heading: "¿De que trata sh3ck?",
//         details: " et et et et et "
//       },
//       {
//         id: "panel13",
//         heading: "¿Como sé que los chequeadores son personas confiables?",
//         details: " et et et et et "
//       },
//       {
//         id: "panel14",
//         heading: "¿Hay alguna forma de ver el producto que voy a comprar?",
//         details: "Nulla facilisi. Phasellus sollicitudin nulla et"
//       },
//       {
//         id: "panel15",
//         heading: "¿Si decido comprar, pueden traérme mi producto?",
//         details: " et et et et et "
//       }
//   ];

  return (
    <div className={classes.root}>
      {QAndA.map((accordion) => {
        const { id, heading, details } = accordion;
        return (
          <Accordion
          className={classes.Accordion}
            expanded={expanded === id}
            key={id}
            onChange={handleChange(id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>{heading}</Typography>
              {/* <Typography className={classes.secondaryHeading}>
                {secondaryHeading}
              </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default QAAccordion