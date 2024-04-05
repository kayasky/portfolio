import React from "react";

import {
  Html,
  Head,
  Body,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from your portfolio site</Preview>
      <Body>
        <Container>
          <Section>
            <Heading>
              You recieved this message from the Contact Me form:
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender's email address is: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
