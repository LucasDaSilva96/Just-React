import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

function PayConfirmation() {
  const { information } = useParams();
  const location = useLocation();
  const { displayName } = location.state.currentUser;
  const navigate = useNavigate();
  const [startConfetti, setStartConfetti] = useState(true);

  return (
    <React.Fragment>
      <section className="w-full h-[80dvh]  flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl capitalize underline font-bold">
          Payment confirm
        </h1>
        <div className="max-w-[500px] px-3 flex flex-col gap-6 bg-[#a3b18a6c] py-3 rounded-md">
          <p>
            <strong>Dear {displayName ? displayName : "Guest"},</strong> We're
            excited to inform you that your purchase has been successfully
            completed! The total amount of your order is{" "}
            <strong className="underline">${information}.</strong> <br /> <br />
            Thank you for choosing our services. Your order details have been
            processed, and you can expect a confirmation email shortly. If you
            have any questions or need further assistance, feel free to reach
            out to our support team. We appreciate your business and look
            forward to serving you again. Best regards,{" "}
            <strong className="underline">Just React team</strong>
          </p>
          <Button buttonType="inverted" onClick={() => navigate("/")}>
            Done
          </Button>
        </div>
      </section>
      {startConfetti && (
        <div className="w-full h-[100dvh] absolute top-0 left-0 flex justify-center items-center  z-50">
          <ConfettiExplosion
            duration={3000}
            particleCount={300}
            onComplete={() => setStartConfetti(false)}
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default PayConfirmation;
