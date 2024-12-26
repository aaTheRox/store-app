import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

type DetailsProps = {
  description?: string;
};

const DetailsAccordion = (props: DetailsProps) => {
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    quantity >= 0 ? setQuantity(quantity + 1) : setQuantity(0);
    console.log(quantity);
  };

  const removeQuantity = () => {
    console.log(quantity);
    quantity >= 0 ? setQuantity(quantity - 1) : setQuantity(0);
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Detalles</AccordionTrigger>
        <AccordionContent>{props.description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DetailsAccordion;
