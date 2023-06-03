import React from "react";
import { Footer, Container } from "../../../components/layout";
import { Button } from "../../../components/ui";
import { formatCurrency } from "../../../utils/numbers";

export const Summary = ({ total, loading, handleClick }) => {
  return (
    <Footer className="z-20">
      <Container>
        <div className="flex items-center justify-between px-4 py-6">
          <div className="flex flex-col">
            <p className="text-sm font-normal text-brand-secondary">
              Total Price:
            </p>
            {!loading ? (
              <p className="text-lg font-normal">IDR {formatCurrency(total)}</p>
            ) : (
              <div className="mt-2 h-3 w-56 animate-bounce rounded-lg bg-brand-grey-1"></div>
            )}
          </div>
          <Button className="w-40" handleClick={handleClick}>
            Order Now
          </Button>
        </div>
      </Container>
    </Footer>
  );
};
