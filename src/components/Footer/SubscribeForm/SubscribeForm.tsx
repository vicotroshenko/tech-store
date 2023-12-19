import { useState } from "react";
import { SubscribeButton, SubscribeField } from "./SubscribeForm.material";
import { FooterForm } from "./SubscribeForm.styled";

const SubscribeForm = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmitEmail = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
    console.log(email);
  };
	
  return (
    <FooterForm onSubmit={handleSubmitEmail}>
      <SubscribeField
        id="outlined-basic"
        label="Your Email"
				type="email"
				value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
      />
      <SubscribeButton type="submit" variant="contained">
        Subscribe
      </SubscribeButton>
    </FooterForm>
  );
};

export default SubscribeForm;
