import React from "react";
import { Footer, Container } from "../../../components/layout";
import { Button } from "../../../components/ui";
import { formatCurrency } from "../../../utils/numbers";

export const Summary = ({ total, handleClick }) => {
  return (
    <Footer className="z-20">
      <Container>
        <div className="flex items-center justify-between px-4 py-6">
          <div className="flex flex-col">
            <p className="text-sm font-normal text-brand-secondary">
              Total Price:
            </p>
            <p className="text-lg font-normal">IDR {formatCurrency(total)}</p>
          </div>
          <Button className="w-40" handleClick={handleClick}>
            Order Now
          </Button>
        </div>
      </Container>
    </Footer>
  );
};
